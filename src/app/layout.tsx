import "./globals.css";
import SettingsFloat from "@/components/SettingsFloat";
import { inter } from "@/fonts";
import { ReportProvider } from "@/contexts/ReportContext";
import { reportData } from "@/data/report";
import { Toaster } from "react-hot-toast";

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
        <ReportProvider>
          {children}
          <SettingsFloat />
          <Toaster position="top-right" />
        </ReportProvider>
      </body>
    </html>
  );
}
