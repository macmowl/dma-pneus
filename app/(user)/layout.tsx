import Footer from '../../components/Footer';
import Header from '../../components/Header';
import PromoBanner from '../../components/PromoBanner';
import '../../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className='bg-[#FAFAFA] flex flex-col items-center w-full'>
        <PromoBanner />
        <Header />
        <div className='w-full'>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
