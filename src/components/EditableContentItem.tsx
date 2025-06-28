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
        <textarea
          className="w-full border rounded p-2"
          value={item.text}
          onChange={(e) => onChange({ ...item, text: e.target.value })}
        />
      )
    case 'quote':
      return (
        <div className="space-y-2">
          <textarea
            className="w-full border rounded p-2"
            value={item.text}
            onChange={(e) => onChange({ ...item, text: e.target.value })}
          />
          <input
            className="w-full border rounded p-2"
            value={item.author}
            onChange={(e) => onChange({ ...item, author: e.target.value })}
          />
        </div>
      )
    case 'list':
      return (
        <textarea
          className="w-full border rounded p-2"
          value={item.items.join('\n')}
          onChange={(e) => onChange({ ...item, items: e.target.value.split('\n') })}
        />
      )
    case 'subheading':
    case 'bold':
      return (
        <input
          className="w-full border rounded p-2"
          value={item.text}
          onChange={(e) => onChange({ ...item, text: e.target.value })}
        />
      )
    case 'image':
      return (
        <div className="space-y-2">
          <input
            className="w-full border rounded p-2"
            placeholder="src"
            value={item.src}
            onChange={(e) => onChange({ ...item, src: e.target.value })}
          />
          <input
            className="w-full border rounded p-2"
            placeholder="alt"
            value={item.alt}
            onChange={(e) => onChange({ ...item, alt: e.target.value })}
          />
          <input
            className="w-full border rounded p-2"
            placeholder="caption"
            value={item.caption}
            onChange={(e) => onChange({ ...item, caption: e.target.value })}
          />
        </div>
      )
    default:
      return null
  }
}

export default EditableContentItem
