import '@/app/ui/global.css';
import clsx from 'clsx';
import { inter } from './ui/fonts';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, 'antialiased')}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
