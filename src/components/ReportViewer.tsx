// components/ReportViewer.tsx
'use client';
import useReportData from '@/hooks/useReportData';
import { useEffect, useState } from 'react';
import CoverPage from './CoverPage';
import TableOfContents from './TableOfContents';
import GuidingMission from './GuidingMission';
import MessageSection from './MessageSection';
import ImpactSection from './ImpactSection';
import StrategicVisionSection from './StrategicVisionSection';
import Sections from './Sections';
import FutureGoalsSection from './FutureGoalsSection';
import dynamic from 'next/dynamic';
const MapSection = dynamic(() => import('./MapSection'), { ssr: false });
import ClosingSection from './ClosingSection';

/**
 * The ReportViewer component renders a report with sections,
 * subheadings, paragraphs, lists, images, and other content
 * types. It also includes a table of contents (TOC) that links
 * to each section.
 */
const ReportViewer = () => {
  const reportData = useReportData();
  const [activeSection, setActiveSection] = useState('');
  
  useEffect(() => {
    // Scroll to section if URL hash exists
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.substring(1);
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(hash);
        }
      }
    }
  }, []);

  if (!reportData) return null;


  // Generate TOC items
  const tocItems = [
    { id: 'message', title: reportData.message.title },
    { id: 'impact', title: 'Our Impact at a Glance' },
    { id: 'vision', title: 'Our Strategic Vision' },
    ...reportData.sections.map((section, i) => ({
      id: `section-${i + 1}`,
      title: section.title,
    })),
    { id: 'future', title: 'Looking Ahead' },
    { id: 'locations', title: 'Where We Work' },
    { id: 'thankyou', title: 'Thank You' },
  ];

  const sectionNumbers = tocItems.reduce<Record<string, number>>((acc, item, idx) => {
    acc[item.id] = idx + 1;
    return acc;
  }, {});

  return (
    <div className="max-w-5xl mx-auto bg-white font-serif text-gray-700 relative">
      <CoverPage />
      <div className="p-8 space-y-16 print:p-[1.5cm]">
        <TableOfContents
          items={tocItems}
          active={activeSection}
          setActive={setActiveSection}
        />
        <GuidingMission />
        <MessageSection number={sectionNumbers['message']} />
        <ImpactSection number={sectionNumbers['impact']} />
        <StrategicVisionSection number={sectionNumbers['vision']} />
        <Sections startNumber={sectionNumbers['section-1']} />
        <FutureGoalsSection number={sectionNumbers['future']} />
        <MapSection number={sectionNumbers['locations']} />
        <ClosingSection number={sectionNumbers['thankyou']} />
      </div>
    </div>
  );
};

export default ReportViewer;