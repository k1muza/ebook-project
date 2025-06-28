'use client'
import React, { useState } from 'react'

interface Props {
  src: string
  alt: string
  caption?: string
  width?: number
  height?: number
  layout?: 'full' | 'split'
  editable?: boolean
  onChange?: (val: { src: string; width?: number; height?: number }) => void
  containerClassName?: string
  imgClassName?: string
}

const EditableImage = ({
  src,
  alt,
  caption,
  width,
  height,
  layout,
  editable,
  onChange,
  containerClassName,
  imgClassName
}: Props) => {
  const [localSrc, setLocalSrc] = useState(src)
  const w = width ?? (layout === 'split' ? 400 : 600)
  const h = height ?? (layout === 'split' ? 300 : 400)

  const handleUpload = (file: File) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const result = e.target?.result as string
      if (result) {
        setLocalSrc(result)
        onChange?.({ src: result, width: w, height: h })
      }
    }
    reader.readAsDataURL(file)
  }

  const updateDims = (nw: number, nh: number) => {
    onChange?.({ src: localSrc, width: nw, height: nh })
  }

  return (
    <figure
      className={`my-8 print:break-inside-avoid ${
        layout === 'split' ? 'flex flex-col gap-8 items-center' : ''
      } ${containerClassName ?? ''}`}
    >
      <div
        className={`relative overflow-hidden rounded-xl shadow-lg ${
          layout === 'split' ? 'md:w-1/2' : ''
        }`}
        style={{ width: w, height: h }}
      >
        <img
          src={localSrc}
          alt={alt}
          className={`w-full h-full object-cover ${imgClassName ?? ''}`}
        />
      </div>
      {caption && (
        <figcaption
          className={`mt-2 text-sm text-gray-600 italic ${
            layout === 'split' ? 'md:w-1/2' : ''
          }`}
        >
          {caption}
        </figcaption>
      )}
      {editable && (
        <div className="mt-2 space-x-2 text-sm flex items-center">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => e.target.files && handleUpload(e.target.files[0])}
          />
          <label>
            W:
            <input
              type="number"
              value={w}
              onChange={(e) => updateDims(Number(e.target.value), h)}
              className="border px-1 w-20 ml-1"
            />
          </label>
          <label>
            H:
            <input
              type="number"
              value={h}
              onChange={(e) => updateDims(w, Number(e.target.value))}
              className="border px-1 w-20 ml-1"
            />
          </label>
        </div>
      )}
    </figure>
  )
}

export default EditableImage
