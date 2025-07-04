// components/ReportViewer.tsx
'use client';
import useReportData from '@/hooks/useReportData';
import { useEffect, useState } from 'react';
import CoverPage from './CoverPage';
import TableOfContents from './TableOfContents';
import MessageSection from './MessageSection';
import ImpactSection from './ImpactSection';
import StrategicVisionSection from './StrategicVisionSection';
import Sections from './Sections';
import FinancialsSection from './FinancialsSection';
import FutureGoalsSection from './FutureGoalsSection';
import ClosingSection from './ClosingSection';
import TTIInfographic from './ImpactInfographic';

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


  interface TocItem {
    id: string
    title: string
    number: string
    children?: TocItem[]
  }

  // Generate TOC items with subheadings
  const tocItems: TocItem[] = []

  const addTopItem = (id: string, title: string, sub: TocItem[] = []) => {
    const number = `${tocItems.length + 1}`
    const top: TocItem = { id, title, number, children: sub }
    tocItems.push(top)
    top.children?.forEach((child, idx) => {
      child.number = `${number}.${idx + 1}`
    })
  }

  addTopItem('message', reportData.message.title)
  addTopItem('impact', reportData.impactTitle)
  addTopItem('vision', reportData.strategicVisionTitle)

  reportData.sections.forEach((section, i) => {
    const subs: TocItem[] = []
    section.content.forEach((c) => {
      if (typeof c !== 'string' && c.type === 'subheading') {
        subs.push({ id: `section-${i + 1}-sub-${subs.length + 1}`, title: c.text, number: '' })
      }
    })
    addTopItem(`section-${i + 1}`, section.title, subs)
  })

  addTopItem('financials', reportData.financialsTitle || 'Financials')
  addTopItem('future', reportData.futureGoalsTitle)
  addTopItem('thankyou', reportData.closingTitle)

  const sectionNumbers = tocItems.reduce<Record<string, number>>((acc, item) => {
    acc[item.id] = Number(item.number)
    return acc
  }, {})

  return (
    <div className="max-w-5xl mx-auto bg-white font-serif text-gray-700 relative">
      <CoverPage />
      <div className="p-8 space-y-16 print:p-[1.5cm]">
        <TableOfContents
          items={tocItems}
          active={activeSection}
          setActive={setActiveSection}
        />
        <TTIInfographic />
        <MessageSection number={sectionNumbers['message']} />
        <ImpactSection number={sectionNumbers['impact']} />
        <StrategicVisionSection number={sectionNumbers['vision']} />
        <Sections startNumber={sectionNumbers['section-1']} />
        <FinancialsSection number={sectionNumbers['financials']} />
        <FutureGoalsSection number={sectionNumbers['future']} />
        {/* <MapSection number={sectionNumbers['locations']} /> */}
        <ClosingSection number={sectionNumbers['thankyou']} />
      </div>
    </div>
  );
};

export default ReportViewer;
