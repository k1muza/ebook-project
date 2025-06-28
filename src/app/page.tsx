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