'use client'
import React, { useState, useEffect } from 'react'

interface Props {
  src: string
  alt: string
  caption?: string
  width?: number
  height?: number
  layout?: 'full' | 'split'
  editable?: boolean
  onChange?: (
    val: { src?: string; caption?: string; width?: number; height?: number }
  ) => void
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
  const [isEditing, setIsEditing] = useState(false)
  const w = width ?? (layout === 'split' ? 400 : 600)
  const h = height ?? (layout === 'split' ? 300 : 400)

  useEffect(() => {
    setLocalSrc(src)
  }, [src])

  const handleUpload = (file: File) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const result = e.target?.result as string
      if (result) {
        setLocalSrc(result)
        onChange?.({ src: result, caption, width: w, height: h })
      }
    }
    reader.readAsDataURL(file)
  }

  const updateDims = (nw: number, nh: number) => {
    onChange?.({ src: localSrc, caption, width: nw, height: nh })
  }

  const editableProps = (cb: (val: string) => void) =>
    editable
      ? {
          contentEditable: true,
          suppressContentEditableWarning: true,
          onInput: (e: React.FormEvent<HTMLElement>) =>
            cb((e.currentTarget.textContent as string) || ''),
        }
      : {}

  return (
    <figure
      className={`my-8 print:break-inside-avoid ${
        layout === 'split' ? 'flex flex-col gap-8 items-center' : ''
      } ${containerClassName ?? ''}`}
    >
      <div
        className={`relative overflow-hidden rounded-xl shadow-lg ${
          layout === 'split' ? 'md:w-1/2' : ''
        } group`}
        style={{ width: w, height: h }}
      >
        <img
          src={localSrc}
          alt={alt}
          className={`w-full h-full object-cover ${imgClassName ?? ''}`}
        />
        {editable && (
          <button
            type="button"
            onClick={() => setIsEditing((prev) => !prev)}
            className="absolute top-2 right-2 bg-white/80 text-xs px-2 py-1 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition"
          >
            {isEditing ? 'Done' : 'Edit'}
          </button>
        )}
      </div>
      {(caption || editable) && (
        <figcaption
          className={`mt-2 text-sm text-gray-600 italic ${
            layout === 'split' ? 'md:w-1/2' : ''
          }`}
          {...editableProps((val) =>
            onChange?.({ src: localSrc, caption: val, width: w, height: h })
          )}
        >
          {caption}
        </figcaption>
      )}
      {editable && isEditing && (
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
