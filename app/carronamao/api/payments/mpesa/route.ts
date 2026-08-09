import { NextRequest } from 'next/server';
import { corsPreflight, jsonWithCors } from '@/lib/cors';

const MPESA_API_URL = process.env.MPESA_API_URL as string;
const MPESA_API_KEY = process.env.MPESA_API_KEY as string;
const MPESA_TIMEOUT_MS = 15_000;

// POST /carronamao/api/payments/mpesa
// body: { phone: string, amount: number, user_id: string, reference: string }
export async function POST(req: NextRequest) {
  const origin = req.headers.get('origin');

  let body: {
    phone?: string;
    amount?: number;
    user_id?: string;
    reference?: string;
  };
  try {
    body = await req.json();
  } catch {
    return jsonWithCors({ error: 'JSON inválido' }, { status: 400, origin });
  }

  if (!body.phone || !body.amount || !body.reference) {
    return jsonWithCors(
      { error: 'phone, amount, e reference são obrigatórios' },
      { status: 400, origin }
    );
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), MPESA_TIMEOUT_MS);

  try {
    const mpesaResponse = await fetch(MPESA_API_URL, {
      method: 'POST',
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${MPESA_API_KEY}`,
      },
      body: JSON.stringify({
        phone: body.phone,
        amount: body.amount,
        reference: body.reference,
      }),
    });

    clearTimeout(timeout);

    if (!mpesaResponse.ok) {
      const errorText = await mpesaResponse.text();
      console.error('[payments/mpesa] gateway erro:', errorText);
      return jsonWithCors(
        { error: 'Falha ao iniciar pagamento M-Pesa' },
        { status: 502, origin }
      );
    }

    const data = await mpesaResponse.json();
    return jsonWithCors(data, { status: 200, origin });
  } catch (err) {
    clearTimeout(timeout);

    if (err instanceof Error && err.name === 'AbortError') {
      console.error('[payments/mpesa] timeout ao contactar gateway M-Pesa');
      return jsonWithCors(
        { error: 'Tempo limite excedido ao contactar M-Pesa' },
        { status: 504, origin }
      );
    }

    console.error('[payments/mpesa] erro inesperado:', err);
    return jsonWithCors(
      { error: 'Erro inesperado ao processar pagamento' },
      { status: 500, origin }
    );
  }
}

export async function OPTIONS(req: NextRequest) {
  return corsPreflight(req.headers.get('origin'));
}
