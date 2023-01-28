import Footer from '../../components/Footer';
import Header from '../../components/Header';
import PromoBanner from '../../components/PromoBanner';
import '../../styles/globals.css';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { cyan } from '@mui/material/colors';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: cyan[600],
//     },
//   },
// });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className='bg-[#FAFAFA] flex flex-col items-center w-full'>
        {/* <ThemeProvider theme={theme}> */}
        <PromoBanner />
        <Header />
        <div className='w-full flex flex-col'>{children}</div>
        <Footer />
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
