export const metadata = {
  title: 'Ndlovu Tech Solutions — APIs',
  description: 'Serviços de API da Ndlovu Tech Solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body style={{ fontFamily: 'system-ui, sans-serif', margin: 0 }}>
        {children}
      </body>
    </html>
  );
}