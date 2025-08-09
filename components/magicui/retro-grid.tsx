"use client"

import React from "react"

export type RetroGridProps = {
  className?: string
  angle?: number // rotation around X axis
  cellSize?: number
  opacity?: number
  lightLineColor?: string
  darkLineColor?: string
  useMask?: boolean
  lineWidth?: number
  offsetY?: string // CSS length/percentage for bottom offset (e.g., "-25%" or "-120px")
  fieldScale?: number // multiplier for plane size; 2.2 => 220%
}

export function RetroGrid({
  className,
  angle = 65,
  cellSize = 60,
  opacity = 0.5,
  lightLineColor = "#7dd3fc",
  darkLineColor = "#7dd3fc",
  useMask = true,
  lineWidth = 1,
  offsetY = "-30%",
  fieldScale = 2.2,
}: RetroGridProps) {
  const lineColor = darkLineColor

  const lw = Math.max(1, Math.floor(lineWidth))

  const backgroundImage = `
    repeating-linear-gradient(
      0deg,
      transparent 0px,
      transparent ${cellSize - lw}px,
      ${lineColor} ${cellSize - lw}px,
      ${lineColor} ${cellSize}px
    ),
    repeating-linear-gradient(
      90deg,
      transparent 0px,
      transparent ${cellSize - lw}px,
      ${lineColor} ${cellSize - lw}px,
      ${lineColor} ${cellSize}px
    )
  `

  const mask = useMask
    ? {
        maskImage:
          "linear-gradient(to top, transparent 0%, black 25%, black 65%, transparent 95%)",
        WebkitMaskImage:
          "linear-gradient(to top, transparent 0%, black 25%, black 65%, transparent 95%)",
      }
    : {}

  const planeSizePercent = Math.max(1, fieldScale) * 100

  return (
    <div className={`pointer-events-none absolute inset-0 ${className ?? ""}`}>
      <div
        className="absolute left-1/2 -translate-x-1/2 will-change-transform"
        style={{
          bottom: offsetY,
          width: `${planeSizePercent}%`,
          height: `${planeSizePercent}%`,
          transformOrigin: "50% 100%",
          transform: `perspective(1000px) rotateX(${angle}deg)`,
          backgroundImage,
          backgroundSize: `${cellSize}px ${cellSize}px, ${cellSize}px ${cellSize}px`,
          backgroundRepeat: "repeat",
          opacity,
          ...mask,
          animation: "rg-scroll 18s linear infinite",
        }}
      />

      {/* Soft horizon glow */}
      <div
        className="absolute inset-x-0 top-1/2 h-16"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(125,211,252,0.35) 0%, rgba(125,211,252,0.15) 35%, rgba(125,211,252,0.08) 55%, transparent 70%)",
          filter: "blur(8px)",
        }}
      />

      <style jsx>{`
        @keyframes rg-scroll {
          0% {
            background-position: 0px 0px, 0px 0px;
          }
          100% {
            background-position: 0px 1000px, 1000px 0px;
          }
        }
      `}</style>
    </div>
  )
}
