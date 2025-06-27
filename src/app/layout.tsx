import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'TTI Foundation H1 2025 Progress Report',
  description: 'Sowing Seeds of Hope and Opportunity',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
