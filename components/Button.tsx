import React from 'react'

function Button({children, className}: {children: React.ReactNode, className: string}) {
  return (
    <button className={`mx-auto ApexMk2-Bold bg-white py-3 px-2 rounded-sm mt-20 hover:bg-white/90 text-[#2f72be] border-2 border-[#2f72be]/30 font-light shadow-lg ${className}`}>
      {children}
    </button>
  )
}

export default Button
