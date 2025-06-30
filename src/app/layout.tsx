import "./globals.css";
import SettingsFloat from "@/components/SettingsFloat";
import { inter, uncialAntiqua } from "@/fonts";
import { ReportProvider } from "@/contexts/ReportContext";
import { reportData } from "@/data/report";

export const metadata = {
  title: reportData.pageTitle,
  description: reportData.pageDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${uncialAntiqua.variable}`}>
        <ReportProvider>
          {children}
          <SettingsFloat />
        </ReportProvider>
      </body>
    </html>
  );
}
