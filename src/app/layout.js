import './globals.css';
import { Ribeye } from 'next/font/google'
import SiteHeader from '../app/layout-components/site-header/SiteHeader';
import SiteFooter from '../app/layout-components/site-footer/SiteFooter';
import SiteBG from '../app/layout-components/SiteBG';

export const metadata = {
  title: "Papa G's Tofu",
  description: 'Secret Society Organics',
};

const ribeye= Ribeye({ subsets: ['latin'], weight: ['400'] })




export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={ribeye.className}>
        <header>
          <SiteHeader />
        </header>
        <SiteBG>
          <main className='m-auto px-4 py-8  lg:px-12 max-w-[1200px]' >{children}</main>
        </SiteBG>
        <footer><SiteFooter /></footer>
      </body>
    </html>
  );
}
