import { ChevronDown } from "lucide-react"
import { Button } from "./ui/button"


interface BouncingArrowProps {
  onClick: () => void
}

export function BouncingArrow({ onClick }: BouncingArrowProps) {
  return (
    <Button
      onClick={onClick}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 backdrop-blur-md bg-[#2f72be]/70 hover:bg-[#2f72be]/80 text-white border border-white/30 rounded-full p-2 animate-bounce"
    >
      <ChevronDown className="h-6 w-6" />
      <span className="sr-only">Scroll to About section</span>
    </Button>
  )
}