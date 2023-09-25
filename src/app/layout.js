import './globals.css';
import { Inter } from 'next/font/google';
import SiteHeader from '../app/layout-components/site-header/SiteHeader';
import SiteBG from '../app/layout-components/SiteBG';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Papa G's Tofu",
  description: 'Secret Society Organics',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <header>
          <SiteHeader />
        </header>
        <SiteBG>
          <main>{children}</main>
        </SiteBG>
        <footer></footer>
      </body>
    </html>
  );
}
