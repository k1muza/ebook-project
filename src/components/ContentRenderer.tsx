'use client'
import React from 'react'
import { ContentItem } from '@/types/report'
import HeadingNumber from './HeadingNumber'
import EditableImage from './EditableImage'

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
          onInput: (e: React.FormEvent<HTMLElement>) =>
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
        <EditableImage
          key={index}
          src={content.src}
          alt={content.alt}
          caption={content.caption}
          width={content.width}
          height={content.height}
          layout={content.layout}
          editable={editable}
          onChange={(val) => onChange?.({ ...content, ...val })}
        />
      )
    default:
      return null
  }
};

export default ContentRenderer;
