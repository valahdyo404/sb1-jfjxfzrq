import './globals.css';
import type { Metadata } from 'next';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Why Islam is the Truth',
  description: 'Discover the beauty and truth of Islam through logical proofs, scientific miracles, and historical evidence.',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#8BA888',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}