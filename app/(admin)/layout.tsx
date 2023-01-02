import '../../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      {' '}
      <body>
        {' '}
        <head />
        {children}
      </body>
    </html>
  );
}
