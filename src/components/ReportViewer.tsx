// components/ReportViewer.tsx
'use client';
import { reportData } from '@/data/report';

import { useEffect, useState } from 'react';
import CoverPage from './CoverPage';
import TableOfContents from './TableOfContents';
import GuidingMission from './GuidingMission';
import MessageSection from './MessageSection';
import ImpactSection from './ImpactSection';
import StrategicVisionSection from './StrategicVisionSection';
import Sections from './Sections';
import FutureGoalsSection from './FutureGoalsSection';
import ClosingSection from './ClosingSection';

/**
 * The ReportViewer component renders a report with sections,
 * subheadings, paragraphs, lists, images, and other content
 * types. It also includes a table of contents (TOC) that links
 * to each section.
 */
const ReportViewer = () => {
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


  // Generate TOC items
  const tocItems = [
    { id: 'message', title: reportData.message.title },
    { id: 'impact', title: 'Our Impact at a Glance' },
    { id: 'vision', title: 'Our Strategic Vision' },
    ...reportData.sections.map((section, i) => ({
      id: `section-${i + 1}`,
      title: section.title
    })),
    { id: 'future', title: 'Looking Ahead' },
    { id: 'thankyou', title: 'Thank You' }
  ];

  return (
    <div className="max-w-5xl mx-auto bg-white font-serif text-gray-700 relative">
      <CoverPage />
      <div className="p-8 space-y-16 print:p-0">
        <TableOfContents
          items={tocItems}
          active={activeSection}
          setActive={setActiveSection}
        />
        <GuidingMission />
        <MessageSection />
        <ImpactSection />
        <StrategicVisionSection />
        <Sections />
        <FutureGoalsSection />
        <ClosingSection />
      </div>
    </div>
  );
};

export default ReportViewer;