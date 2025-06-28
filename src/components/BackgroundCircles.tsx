'use client'
import { useMemo } from 'react'

const COLORS = ['#a7f3d0', '#fde68a', '#ddd6fe']

interface Circle {
  top: number
  left: number
  size: number
  color: string
}

interface Props {
  count?: number
}

const BackgroundCircles = ({ count = 5 }: Props) => {
  const circles = useMemo<Circle[]>(() => {
    return Array.from({ length: count }).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 150 + Math.random() * 150,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }))
  }, [count])

  return (
    <div className="absolute inset-0 pointer-events-none -z-10 print:hidden">
      {circles.map((circle, i) => (
        <div
          key={i}
          className="rounded-full"
          style={{
            position: 'absolute',
            top: `${circle.top}%`,
            left: `${circle.left}%`,
            width: circle.size,
            height: circle.size,
            backgroundColor: circle.color,
            opacity: 0.15,
            transform: 'translate(-50%, -50%)',
            filter: 'blur(30px)',
          }}
        />
      ))}
    </div>
  )
}

export default BackgroundCircles
