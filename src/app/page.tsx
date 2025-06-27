// pages/report.tsx
import ReportViewer from '@/components/ReportViewer';
import Head from 'next/head';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Tererai Trent Foundation - Progress Report</title>
        <meta name="description" content="H1 2025 Progress Report: Sowing Seeds of Hope and Opportunity" />
        <style>{`
          @media print {
            @page {
              margin: 1.5cm;
              counter-increment: page;
              
              @bottom-center {
                content: "Page " counter(page);
                font-size: 10pt;
                font-family: sans-serif;
                color: #2c3e50;
                font-weight: 500;
              }
            }
            
            @page :first {
              margin: 0;
              @bottom-center {
                content: none;
              }
            }
            
            body {
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
            
            /* Hide non-essential elements */
            .print-hidden {
              display: none !important;
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