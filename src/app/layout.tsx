import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Provider from './components/Provider';
import StoryContextProvider from './libs/context';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Medium Clone',
  description: 'Learn how to build medium with NextJS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <StoryContextProvider>{children}</StoryContextProvider>
        </Provider>
      </body>
    </html>
  );
}
