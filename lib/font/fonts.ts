import { Geist, Kanit, PT_Serif, Ubuntu } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-ubuntu',
});

const serif = PT_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-serif',
});

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-kanit',
});

export const fonts = {
  geistSans,
  ubuntu,
  serif,
  kanit,
};
