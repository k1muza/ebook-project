'use client'
import React from 'react'
import { ContentItem } from '@/types/report'

interface Props {
  content: ContentItem | string
  index: number
  onChange: (value: ContentItem | string) => void
  subheadingNumber?: string
}

const EditableContentRenderer = ({ content, index, onChange, subheadingNumber }: Props) => {
  if (typeof content === 'string') {
    return (
      <p
        key={index}
        className="mb-4 text-lg leading-relaxed text-gray-700 border rounded p-1"
        contentEditable
        suppressContentEditableWarning
        onInput={(e) => onChange(e.currentTarget.textContent || '')}
      >
        {content}
      </p>
    )
  }

  switch (content.type) {
    case 'paragraph':
      return (
        <p
          key={index}
          className="mb-4 text-lg leading-relaxed text-gray-700 border rounded p-1"
          contentEditable
          suppressContentEditableWarning
          onInput={(e) =>
            onChange({ ...content, text: e.currentTarget.textContent || '' })
          }
        >
          {content.text}
        </p>
      )
    case 'quote':
      return (
        <blockquote
          key={index}
          className="pl-6 py-4 my-6 border-l-4 border-emerald-500 bg-emerald-50 rounded-r-lg italic"
        >
          <p
            contentEditable
            suppressContentEditableWarning
            onInput={(e) =>
              onChange({ ...content, text: e.currentTarget.textContent || '' })
            }
            className="mb-2"
          >
            {content.text}
          </p>
          <p
            className="font-medium text-emerald-700"
            contentEditable
            suppressContentEditableWarning
            onInput={(e) =>
              onChange({ ...content, author: e.currentTarget.textContent || '' })
            }
          >
            {content.author}
          </p>
        </blockquote>
      )
    case 'list':
      const handleListItemChange = (idx: number, text: string) => {
        const items = [...content.items]
        items[idx] = text
        onChange({ ...content, items })
      }
      return (
        <ul key={index} className="list-disc pl-6 mb-6 space-y-2">
          {content.items.map((item, i) => (
            <li key={i} className="text-lg">
              <div
                contentEditable
                suppressContentEditableWarning
                onInput={(e) =>
                  handleListItemChange(i, e.currentTarget.textContent || '')
                }
              >
                {item}
              </div>
            </li>
          ))}
        </ul>
      )
    case 'subheading':
      return (
        <h3 key={index} className="text-2xl font-bold text-slate-800 mt-8 mb-4">
          {subheadingNumber && <span className="mr-2">{subheadingNumber}</span>}
          <span
            contentEditable
            suppressContentEditableWarning
            className="border rounded p-1"
            onInput={(e) =>
              onChange({ ...content, text: e.currentTarget.textContent || '' })
            }
          >
            {content.text}
          </span>
        </h3>
      )
    case 'bold':
      return (
        <strong
          key={index}
          className="font-semibold text-emerald-700 border rounded p-1"
          contentEditable
          suppressContentEditableWarning
          onInput={(e) =>
            onChange({ ...content, text: e.currentTarget.textContent || '' })
          }
        >
          {content.text}
        </strong>
      )
    case 'image':
      return (
        <figure
          key={index}
          className={`my-8 print:break-inside-avoid ${
            content.layout === 'split' ? 'flex flex-col gap-8 items-center' : ''
          }`}
        >
          <div
            className={`relative overflow-hidden rounded-xl shadow-lg ${
              content.layout === 'split' ? 'md:w-1/2' : ''
            }`}
            style={{ height: content.layout === 'split' ? '300px' : '400px' }}
          >
            <img
              src={content.src}
              alt={content.alt}
              className="w-full h-full object-cover"
            />
          </div>
          {content.caption && (
            <figcaption
              className={`mt-2 text-sm text-gray-600 italic ${
                content.layout === 'split' ? 'md:w-1/2' : ''
              }`}
              contentEditable
              suppressContentEditableWarning
              onInput={(e) =>
                onChange({ ...content, caption: e.currentTarget.textContent || '' })
              }
            >
              {content.caption}
            </figcaption>
          )}
        </figure>
      )
    default:
      return null
  }
}

export default EditableContentRenderer
