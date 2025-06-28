// pages/report.tsx
import ReportViewer from '@/components/ReportViewer';
import Head from 'next/head';
import { reportData } from '@/data/report';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>{reportData.pageTitle}</title>
        <meta name="description" content={reportData.pageDescription} />
        <style>{`
          @media print {
            @page {
              margin-top: 1.5cm;
              margin-bottom: 1.5cm;
              
              @bottom-center {
                content: "Page " counter(page);
                font-size: 11pt;
                font-family: 'Georgia', serif;
                color: #334155;
                font-weight: 600;
                border-top: 1px solid #e2e8f0;
                padding-top: 4px;
              }
            }
            
            @page :first {
              margin-top: 0;
              margin-bottom: 0;
              @bottom-center {
                content: none;
              }
            }
            
            body {
              margin: 0;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
              background: white !important;
              font-size: 12pt;
            }
            
            .print\:break-before {
              page-break-before: always;
            }
            
            .print\:break-inside-avoid {
              page-break-inside: avoid;
            }
            
            /* Cover page styling */
            .print\:min-h-screen {
              min-height: 100vh !important;
              height: 100vh !important;
              margin: 0 !important;
              padding: 0 !important;
            }
          }
        `}</style>
      </Head>
      <ReportViewer />
    </>
  );
};

export default HomePage;