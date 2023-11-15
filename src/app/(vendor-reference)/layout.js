import '../globals.css';

export default function Layout({ children }) {
  return (
    <html lang='en'>
      <body>
          <main className='m-auto px-2 sm:px-4 md:px-4 lg:px-12 py-8 md:py-16 lg:py-12 max-w-[1200px]'>
            {children}
          </main>
      </body>
    </html>
  );
}
