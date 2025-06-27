// components/ReportViewer.tsx
import { reportData } from '@/data/report';

import { BookOpen, ChevronRight, GraduationCap, Handshake } from 'lucide-react';
import Image from 'next/image';

const ReportViewer = () => {
  const renderContent = (content: any) => {
    switch (content.type) {
      case 'paragraph':
        return <p className="mb-4 text-lg">{content.text}</p>;
      case 'quote':
        return (
          <blockquote className="pl-6 py-4 my-6 border-l-4 border-emerald-500 bg-emerald-50 rounded-r-lg italic">
            <p className="text-lg">"{content.text}"</p>
            <p className="mt-2 font-medium text-emerald-700">— {content.author}</p>
          </blockquote>
        );
      case 'list':
        return (
          <ul className="list-disc pl-6 mb-6 space-y-2">
            {content.items.map((item: string, index: number) => (
              <li key={index} className="text-lg">{item}</li>
            ))}
          </ul>
        );
      case 'subheading':
        return <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">{content.text}</h3>;
      case 'bold':
        return <strong className="font-semibold text-emerald-700">{content.text}</strong>;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white font-serif text-gray-700">
      {/* Cover Page */}
      <div className="min-h-screen flex flex-col justify-center items-center text-center py-20 border-b-8 border-emerald-600 mb-16">
        <div className="bg-emerald-100 p-2 px-4 rounded-full mb-8">
          <p className="text-emerald-700 font-sans font-bold">Progress Report • {reportData.period}</p>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 max-w-3xl leading-tight">
          {reportData.reportTitle}
        </h1>
        <div className="w-32 h-1 bg-amber-500 my-8"></div>
        <p className="text-2xl text-slate-600 mb-12 max-w-2xl">
          {reportData.organization}<br />
          {reportData.period}
        </p>
        <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl">
          <Image 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1" 
            alt="African students learning"
            layout="fill"
            objectFit="cover"
            className="opacity-90"
          />
        </div>
      </div>

      {/* Guiding Principle and Mission */}
      <div className="mb-16 text-center">
        <p className="text-xl italic text-emerald-700 mb-6">“{reportData.guidingPrinciple}”</p>
        <p className="text-lg text-slate-700">{reportData.mission}</p>
      </div>

      {/* Message */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-slate-800 mb-6">{reportData.message.title}</h2>
        {reportData.message.content.map((paragraph, index) => (
          <p key={index} className="text-lg mb-4">{paragraph}</p>
        ))}
      </div>

      {/* Impact at a Glance */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-slate-800 mb-10 flex items-center">
          <BookOpen className="mr-3 text-emerald-600" size={32} />
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
      <div className="mb-20">
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
      {reportData.sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-20">
          <h2 className="text-3xl font-bold text-slate-800 mb-10">
            {sectionIndex + 1}. {section.title}
          </h2>
          
          <div className="space-y-6">
            {section.content.map((content, contentIndex) => (
              <div key={contentIndex}>
                {renderContent(content)}
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Future Goals */}
      <div className="mb-20">
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
      </div>

      {/* Closing */}
      <div className="text-center py-16 border-t border-emerald-100">
        <h3 className="text-3xl font-bold text-slate-800 mb-6">A Heartfelt Thank You</h3>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          {reportData.closing}
        </p>
      </div>
    </div>
  );
};

export default ReportViewer;