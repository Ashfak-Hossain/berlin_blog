import type { Metadata } from 'next';
import './globals.css';
import Providers from '@/components/Providers';
import { fonts } from '@/lib/font/fonts';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer/Footer';
import 'react-notion-x/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'katex/dist/katex.min.css';

const data = {
  title: 'Zeta',
  description:
    'Zeta: A blog exploring the intersection of mathematics and competitive programming, featuring insights and techniques',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://zeta.vercel.app/'),
  title: data.title,
  description: data.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fonts.geistSans.className} ${fonts.ubuntu.className} antialiased`}
      >
        <Navbar />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
