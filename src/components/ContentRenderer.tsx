'use client'
import React from 'react'
import { ContentItem } from '@/types/report'
import HeadingNumber from './HeadingNumber'

interface Props {
  content: ContentItem | string
  index?: number
  subheadingNumber?: string
  editable?: boolean
  onChange?: (content: ContentItem | string) => void
}

const ContentRenderer = ({ content, index, subheadingNumber, editable, onChange }: Props) => {
  const editableProps = (cb: (val: string) => void) =>
    editable
      ? {
          contentEditable: true,
          suppressContentEditableWarning: true,
          onBlur: (e: React.FocusEvent<HTMLElement>) =>
            cb((e.currentTarget.textContent as string) || ''),
        }
      : {}

  if (typeof content === 'string') {
    return (
      <p key={index} className="text-lg mb-4 text-gray-700" {...editableProps((val) => onChange?.(val))}>
        {content}
      </p>
    )
  }

  switch (content.type) {
    case 'paragraph':
      return (
        <p key={index} className="mb-4 text-lg leading-relaxed text-gray-700" {...editableProps((val) => onChange?.({ ...content, text: val }))}>
          {content.text}
        </p>
      )
    case 'quote':
      return (
        <blockquote
          key={index}
          className="pl-6 py-4 my-6 border-l-4 border-emerald-500 bg-emerald-50 rounded-r-lg italic"
        >
          <p className="text-lg">
            &quot;
            <span {...editableProps((val) => onChange?.({ ...content, text: val }))}>{content.text}</span>
            &quot;
          </p>
          <p className="mt-2 font-medium text-emerald-700">
            —{' '}
            <span {...editableProps((val) => onChange?.({ ...content, author: val }))}>{content.author}</span>
          </p>
        </blockquote>
      )
    case 'list':
      return (
        <ul key={index} className="list-disc pl-6 mb-6 space-y-2">
          {content.items.map((item: string, i: number) => (
            <li
              key={i}
              className="text-lg"
              {...editableProps((val) => {
                const newItems = [...content.items]
                newItems[i] = val
                onChange?.({ ...content, items: newItems })
              })}
            >
              {item}
            </li>
          ))}
        </ul>
      )
    case 'subheading':
      return (
        <h3 key={index} className="text-2xl font-bold text-slate-800 mt-8 mb-4 flex items-baseline">
          {subheadingNumber && <HeadingNumber number={subheadingNumber} />}
          <span {...editableProps((val) => onChange?.({ ...content, text: val }))}>{content.text}</span>
        </h3>
      )
    case 'bold':
      return (
        <strong key={index} className="font-semibold text-emerald-700" {...editableProps((val) => onChange?.({ ...content, text: val }))}>
          {content.text}
        </strong>
      )
    case 'image':
      return (
        <figure
          key={index}
          className={`my-8 print:break-inside-avoid ${content.layout === 'split' ? 'flex flex-col gap-8 items-center' : ''}`}
        >
          <div
            className={`relative overflow-hidden rounded-xl shadow-lg ${content.layout === 'split' ? 'md:w-1/2' : ''}`}
            style={{ height: content.layout === 'split' ? '300px' : '400px' }}
          >
            <img src={content.src} alt={content.alt} className="w-full h-full object-cover" />
          </div>
          {editable ? (
            <>
              <figcaption
                className={`mt-2 text-sm text-gray-600 italic ${content.layout === 'split' ? 'md:w-1/2' : ''}`}
                {...editableProps((val) => onChange?.({ ...content, caption: val }))}
              >
                {content.caption}
              </figcaption>
              <p className="text-sm text-gray-500">
                Src:{' '}
                <span {...editableProps((val) => onChange?.({ ...content, src: val }))}>{content.src}</span>
              </p>
              <p className="text-sm text-gray-500">
                Alt:{' '}
                <span {...editableProps((val) => onChange?.({ ...content, alt: val }))}>{content.alt}</span>
              </p>
            </>
          ) : (
            content.caption && (
              <figcaption className={`mt-2 text-sm text-gray-600 italic ${content.layout === 'split' ? 'md:w-1/2' : ''}`}>{content.caption}</figcaption>
            )
          )}
        </figure>
      )
    default:
      return null
  }
};

export default ContentRenderer;
