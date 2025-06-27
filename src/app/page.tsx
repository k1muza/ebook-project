// pages/report.tsx
import ReportViewer from '@/components/ReportViewer';
import Head from 'next/head';

const ReportPage = () => {
  return (
    <>
      <Head>
        <title>Tererai Trent Foundation - Progress Report</title>
        <meta name="description" content="H1 2025 Progress Report: Sowing Seeds of Hope and Opportunity" />
      </Head>
      <ReportViewer />
    </>
  );
};

export default ReportPage;