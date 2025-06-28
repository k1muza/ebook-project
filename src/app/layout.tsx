import "./globals.css";
import SettingsFloat from "@/components/SettingsFloat";
import { inter } from "@/fonts";

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
        <SettingsFloat />
      </body>
    </html>
  );
}
