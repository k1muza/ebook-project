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
import Image from 'next/image';
import { useEffect, useState } from 'react';

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

  const renderContent = (content: any, index: number) => {
    switch (content.type) {
      case 'paragraph':
        return <p key={index} className="mb-4 text-lg leading-relaxed">{content.text}</p>;
      case 'quote':
        return (
          <blockquote key={index} className="pl-6 py-4 my-6 border-l-4 border-emerald-500 bg-emerald-50 rounded-r-lg italic">
            <p className="text-lg">"{content.text}"</p>
            <p className="mt-2 font-medium text-emerald-700">— {content.author}</p>
          </blockquote>
        );
      case 'list':
        return (
          <ul key={index} className="list-disc pl-6 mb-6 space-y-2">
            {content.items.map((item: string, i: number) => (
              <li key={i} className="text-lg">{item}</li>
            ))}
          </ul>
        );
      case 'subheading':
        return <h3 key={index} className="text-2xl font-bold text-slate-800 mt-8 mb-4">{content.text}</h3>;
      case 'bold':
        return <strong key={index} className="font-semibold text-emerald-700">{content.text}</strong>;
      case 'image':
        return (
          <figure 
            key={index} 
            className={`my-8 print:break-inside-avoid ${content.layout === 'split' ? 'flex flex-col md:flex-row gap-8 items-center' : ''}`}
          >
            <div className={`relative overflow-hidden rounded-xl shadow-lg ${content.layout === 'split' ? 'md:w-1/2' : ''}`} 
                 style={{ height: content.layout === 'split' ? '300px' : '400px' }}>
              <Image 
                src={content.src} 
                alt={content.alt}
                layout="fill"
                objectFit="cover"
              />
            </div>
            {content.caption && (
              <figcaption className={`mt-2 text-sm text-gray-600 italic ${content.layout === 'split' ? 'md:w-1/2 md:mt-0' : ''}`}>
                {content.caption}
              </figcaption>
            )}
          </figure>
        );
      default:
        if (typeof content === 'string') {
          return <p key={index} className="text-lg mb-4">{content}</p>;
        }
        return null;
    }
  };

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
    <div className="max-w-5xl mx-auto p-8 bg-white font-serif text-gray-700 relative">
      {/* Cover Page */}
      <div className="min-h-screen flex flex-col justify-center items-center text-center py-20 mb-16 relative print:min-h-0 print:py-12">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-amber-50 opacity-70 z-0"></div>
        <div className="relative z-10">
          <div className="bg-emerald-100 p-2 px-4 rounded-full mb-8 inline-block">
            <p className="text-emerald-700 font-sans font-bold">Progress Report • {reportData.period}</p>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 max-w-3xl leading-tight">
            {reportData.reportTitle}
          </h1>
          <div className="w-32 h-1 bg-amber-500 my-8 mx-auto"></div>
          <p className="text-2xl text-slate-600 mb-12 max-w-2xl mx-auto">
            {reportData.organization}<br />
            {reportData.period}
          </p>
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl mx-auto">
            <Image 
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1" 
              alt="African students learning"
              layout="fill"
              objectFit="cover"
              className="opacity-90"
            />
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-emerald-200 opacity-50"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-amber-200 opacity-50"></div>
        <div className="absolute top-1/3 right-20 w-16 h-16 rounded-full bg-purple-200 opacity-50"></div>
      </div>

      {/* Table of Contents */}
      <div className="mb-20 p-8 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl border border-emerald-200 shadow-sm print:hidden">
        <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center">
          <BookOpen className="mr-3 text-emerald-600" size={32} />
          Table of Contents
        </h2>
        <ul className="space-y-3">
          {tocItems.map((item) => (
            <li key={item.id}>
              <a 
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                  setActiveSection(item.id);
                }}
                className={`flex items-center p-3 rounded-lg transition-all ${
                  activeSection === item.id 
                    ? 'bg-emerald-100 text-emerald-700 font-bold' 
                    : 'hover:bg-emerald-50'
                }`}
              >
                <span className="mr-3 text-emerald-600">{item.icon}</span>
                <span>{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Guiding Principle and Mission */}
      <div className="mb-16 text-center p-6 bg-gradient-to-r from-emerald-50 to-amber-50 rounded-xl">
        <p className="text-xl italic text-emerald-700 mb-6">“{reportData.guidingPrinciple}”</p>
        <p className="text-lg text-slate-700">{reportData.mission}</p>
      </div>

      {/* Message */}
      <div id="message" className="mb-20 scroll-mt-20">
        <h2 className="text-3xl font-bold text-slate-800 mb-6">{reportData.message.title}</h2>
        {reportData.message.content.map((content, index) => (
          renderContent(content, index)
        ))}
      </div>

      {/* Impact at a Glance */}
      <div id="impact" className="mb-20 scroll-mt-20">
        <h2 className="text-3xl font-bold text-slate-800 mb-10 flex items-center">
          <BarChart2 className="mr-3 text-emerald-600" size={32} />
          Our Impact at a Glance
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reportData.milestones.map((milestone, index) => (
            <div key={index} className="flex items-start p-6 bg-gradient-to-br from-emerald-50 to-amber-50 rounded-xl border border-emerald-100">
              <div className="bg-emerald-500 text-white rounded-full h-8 w-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                {index + 1}
              </div>
              <div>
                <h3 className="text-xl font-bold text-emerald-700">{milestone.title}</h3>
                <p className="text-slate-700">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Strategic Vision */}
      <div id="vision" className="mb-20 scroll-mt-20">
        <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Strategic Vision: A Blueprint for a Brighter Future</h2>
        <p className="text-lg mb-8">{reportData.strategicVision.intro}</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-emerald-50 p-8 rounded-2xl border-l-4 border-blue-500">
            <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
              <GraduationCap className="mr-2" size={24} />
              Education-Driven Goals
            </h3>
            <ul className="space-y-4">
              {reportData.strategicVision.educationGoals.map((goal, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                    <span className="text-blue-600 font-bold">{index + 1}.</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">{goal.title}</h4>
                    <p className="text-slate-700">{goal.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-amber-50 to-emerald-50 p-8 rounded-2xl border-l-4 border-amber-500">
            <h3 className="text-xl font-bold text-amber-800 mb-4 flex items-center">
              <Handshake className="mr-2" size={24} />
              Business-Driven Goals
            </h3>
            <ul className="space-y-4">
              {reportData.strategicVision.businessGoals.map((goal, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded-full mr-3 mt-1">
                    <span className="text-amber-600 font-bold">{index + 4}.</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">{goal.title}</h4>
                    <p className="text-slate-700">{goal.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Sections */}
      {reportData.sections.map((section, sectionIndex) => {
        const sectionId = `section-${sectionIndex+1}`;
        
        return (
          <div key={sectionIndex} id={sectionId} className="mb-20 scroll-mt-20">
            <h2 className="text-3xl font-bold text-slate-800 mb-10">
              {sectionIndex + 1}. {section.title}
            </h2>
            
            <div className="space-y-6">
              {section.content.map((content, contentIndex) => (
                renderContent(content, contentIndex)
              ))}
            </div>
          </div>
        );
      })}

      {/* Future Goals */}
      <div id="future" className="mb-20 scroll-mt-20">
        <h2 className="text-3xl font-bold text-slate-800 mb-10 flex items-center">
          <ChevronRight className="mr-3 text-emerald-600" size={32} />
          Looking Ahead: Our Goals for H2 2025
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reportData.futureGoals.map((goal, index) => (
            <div key={index} className="flex items-start bg-gradient-to-br from-emerald-50 to-white p-6 rounded-xl border border-emerald-100">
              <div className="bg-emerald-500 text-white rounded-full h-8 w-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                {index + 1}
              </div>
              <p className="font-medium">{goal}</p>
            </div>
          ))}
        </div>
        
        {/* Future vision image */}
        <div className="mt-12 print:break-inside-avoid">
          <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-xl">
            <Image 
              src="https://images.unsplash.com/photo-1523580494863-6f3031224c94" 
              alt="Future vision"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <p className="text-center text-sm text-gray-600 italic mt-2">
            Vision for the new Library and Computer Lab at Musukwi Secondary
          </p>
        </div>
      </div>

      {/* Closing */}
      <div id="thankyou" className="text-center py-16 border-t border-emerald-100 scroll-mt-20">
        <h3 className="text-3xl font-bold text-slate-800 mb-6">A Heartfelt Thank You</h3>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          {reportData.closing}
        </p>
        
        {/* Team photo */}
        <div className="mt-12 max-w-3xl mx-auto print:break-inside-avoid">
          <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" 
              alt="TTI team and partners"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <p className="text-center text-sm text-gray-600 italic mt-2">
            TTI team members with community partners and donors
          </p>
        </div>
      </div>

      {/* Page Numbering - Only visible in print */}
      <div className="hidden print:block fixed bottom-0 left-0 right-0 text-center text-xs text-gray-500 py-2">
        Page <span className="page-number"></span>
      </div>
    </div>
  );
};

export default ReportViewer;