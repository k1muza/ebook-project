// components/ReportViewer.tsx
'use client';
import { reportData } from '@/data/report';
import {
  BarChart2,
  BookOpen,
  ChevronRight,
  FlaskConical,
  GraduationCap,
  Handshake,
  HeartHandshake,
  Lightbulb
} from 'lucide-react';
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
    { id: 'message', title: reportData.message.title, icon: <BookOpen size={16} /> },
    { id: 'impact', title: "Our Impact at a Glance", icon: <BarChart2 size={16} /> },
    { id: 'vision', title: "Our Strategic Vision", icon: <Lightbulb size={16} /> },
    ...reportData.sections.map((section, i) => ({
      id: `section-${i+1}`,
      title: `${i+1}. ${section.title}`,
      icon: i === 0 ? <GraduationCap size={16} /> : 
             i === 1 ? <FlaskConical size={16} /> : 
             <Handshake size={16} />
    })),
    { id: 'future', title: "Looking Ahead", icon: <ChevronRight size={16} /> },
    { id: 'thankyou', title: "Thank You", icon: <HeartHandshake size={16} /> }
  ];

  return (
    <div className="max-w-5xl mx-auto bg-white font-serif text-gray-700 relative">
      <CoverPage />
      <TableOfContents items={tocItems} active={activeSection} setActive={setActiveSection} />
      <div className="px-8 print:px-0">
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