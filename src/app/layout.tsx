import "./globals.css";
import SettingsFloat from "@/components/SettingsFloat";
import { inter } from "@/fonts";
import { ReportProvider } from "@/contexts/ReportContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
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
      <body className={inter.className}>
        <ThemeProvider>
          <ReportProvider>
            {children}
            <SettingsFloat />
          </ReportProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
