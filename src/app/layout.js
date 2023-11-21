import './globals.css';
import { solid } from './fonts'
import SiteHeader from '../app/layout-components/site-header/SiteHeader';
import SiteFooter from '../app/layout-components/site-footer/SiteFooter';
import SiteBG from '../app/layout-components/SiteBG';

export const metadata = {
  title: "Papa G's Tofu",
  description: 'Secret Society Organics',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={solid.className}>
        <header>
          <SiteHeader />
        </header>
        <SiteBG>
          <main className='m-auto px-2 sm:px-4 md:px-4 lg:px-12 py-8 md:py-16 lg:py-12 max-w-[1200px]'>
            {children}
          </main>
        </SiteBG>
        <footer>
          <SiteFooter />
        </footer>
      </body>
    </html>
  );
}
