import React from 'react'

function Card({ children, className, id }: { children: React.ReactNode, className?: string, id?: string }) {
  return (
    <div id={id} className={`backdrop-blur-md bg-white/10 border border-white/30 rounded-sm p-8 ${className}`}>
      {children}
    </div>
  )
}

export default Card
