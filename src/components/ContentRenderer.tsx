'use client'
import React from 'react'
import { ContentItem } from '@/types/report'

const ContentRenderer = ({ content, index }: { content: ContentItem | string; index: number }) => {
  switch (content.type) {
    case 'paragraph':
      return <p key={index} className="mb-4 text-lg leading-relaxed text-gray-700">{content.text}</p>;
    case 'quote':
      return (
        <blockquote key={index} className="pl-6 py-4 my-6 border-l-4 border-emerald-500 bg-emerald-50 rounded-r-lg italic">
          <p className="text-lg">&quot;{content.text}&quot;</p>
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
          <div
            className={`relative overflow-hidden rounded-xl shadow-lg ${content.layout === 'split' ? 'md:w-1/2' : ''}`}
            style={{ height: content.layout === 'split' ? '300px' : '400px' }}
          >
            <img src={content.src} alt={content.alt} className="w-full h-full object-cover" />
          </div>
          {content.caption && (
            <figcaption className={`mt-2 text-sm text-gray-600 italic ${content.layout === 'split' ? 'md:w-1/2 md:mt-0' : ''}`}>{content.caption}</figcaption>
          )}
        </figure>
      );
    default:
      if (typeof content === 'string') {
        return <p key={index} className="text-lg mb-4 text-gray-700">{content}</p>;
      }
      return null;
  }
};

export default ContentRenderer;
