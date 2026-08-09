export default function Home() {
  return (
    <main style={{ padding: '2rem', maxWidth: 640 }}>
      <h1>Ndlovu Tech Solutions — API Gateway</h1>
      <p>Este domínio serve as APIs dos apps da Ndlovu Tech Solutions.</p>
      <ul>
        <li>
          <code>/carronamao/api/subscription/check</code>
        </li>
        <li>
          <code>/carronamao/api/subscription/renew</code>
        </li>
        <li>
          <code>/carronamao/api/payments/mpesa</code>
        </li>
        <li>
          <code>/carronamao/api/payments/mpesa/webhook</code>
        </li>
      </ul>
    </main>
  );
}
