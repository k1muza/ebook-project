'use client'
import React from 'react'
import { ContentItem } from '@/types/report'

interface Props {
  item: ContentItem
  onChange: (item: ContentItem) => void
}

const EditableContentItem = ({ item, onChange }: Props) => {
  switch (item.type) {
    case 'paragraph':
      return (
        <p
          className="mb-4 text-lg leading-relaxed text-gray-700"
          contentEditable
          suppressContentEditableWarning
          onInput={(e) =>
            onChange({ ...item, text: e.currentTarget.textContent || '' })
          }
        >
          {item.text}
        </p>
      )
    case 'quote':
      return (
        <blockquote className="pl-6 py-4 my-6 border-l-4 border-emerald-500 bg-emerald-50 rounded-r-lg italic">
          <p className="text-lg">
            &quot;
            <span
              contentEditable
              suppressContentEditableWarning
              onInput={(e) =>
                onChange({ ...item, text: e.currentTarget.textContent || '' })
              }
            >
              {item.text}
            </span>
            &quot;
          </p>
          <p className="mt-2 font-medium text-emerald-700">
            —{' '}
            <span
              contentEditable
              suppressContentEditableWarning
              onInput={(e) =>
                onChange({ ...item, author: e.currentTarget.textContent || '' })
              }
            >
              {item.author}
            </span>
          </p>
        </blockquote>
      )
    case 'list':
      return (
        <ul className="list-disc pl-6 mb-6 space-y-2">
          {item.items.map((li, idx) => (
            <li
              key={idx}
              className="text-lg"
              contentEditable
              suppressContentEditableWarning
              onInput={(e) => {
                const newItems = [...item.items]
                newItems[idx] = e.currentTarget.textContent || ''
                onChange({ ...item, items: newItems })
              }}
            >
              {li}
            </li>
          ))}
        </ul>
      )
    case 'subheading':
      return (
        <h3
          className="text-2xl font-bold text-slate-800 mt-8 mb-4"
          contentEditable
          suppressContentEditableWarning
          onInput={(e) =>
            onChange({ ...item, text: e.currentTarget.textContent || '' })
          }
        >
          {item.text}
        </h3>
      )
    case 'bold':
      return (
        <strong
          className="font-semibold text-emerald-700"
          contentEditable
          suppressContentEditableWarning
          onInput={(e) =>
            onChange({ ...item, text: e.currentTarget.textContent || '' })
          }
        >
          {item.text}
        </strong>
      )
    case 'image':
      return (
        <figure
          className={`my-8 print:break-inside-avoid ${
            item.layout === 'split' ? 'flex flex-col gap-8 items-center' : ''
          }`}
        >
          <div
            className={`relative overflow-hidden rounded-xl shadow-lg ${
              item.layout === 'split' ? 'md:w-1/2' : ''
            }`}
            style={{ height: item.layout === 'split' ? '300px' : '400px' }}
          >
            <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
          </div>
          <figcaption
            className={`mt-2 text-sm text-gray-600 italic ${
              item.layout === 'split' ? 'md:w-1/2' : ''
            }`}
            contentEditable
            suppressContentEditableWarning
            onInput={(e) =>
              onChange({ ...item, caption: e.currentTarget.textContent || '' })
            }
          >
            {item.caption}
          </figcaption>
          <p className="text-sm text-gray-500">
            Src:{' '}
            <span
              contentEditable
              suppressContentEditableWarning
              onInput={(e) =>
                onChange({ ...item, src: e.currentTarget.textContent || '' })
              }
            >
              {item.src}
            </span>
          </p>
          <p className="text-sm text-gray-500">
            Alt:{' '}
            <span
              contentEditable
              suppressContentEditableWarning
              onInput={(e) =>
                onChange({ ...item, alt: e.currentTarget.textContent || '' })
              }
            >
              {item.alt}
            </span>
          </p>
        </figure>
      )
    default:
      return null
  }
}

export default EditableContentItem
