import { Button } from "@/components/ui/button"
import { IconBrandWhatsapp } from "@tabler/icons-react"

interface MeetingSchedulerProps {
  ventureType: "grower" | "processor" | "distributor"
  className?: string
}

export function MeetingScheduler({ ventureType, className }: MeetingSchedulerProps) {
  const ventureNames = {
    grower: "Grower Operations",
    processor: "Processing Facility", 
    distributor: "Distribution Network"
  }

  const whatsappMessage = `Hi! I'm interested in scheduling an investment meeting for the ${ventureNames[ventureType]} venture. When would be a good time to discuss this opportunity?`
  

  const handleWhatsApp = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage)
    window.open(`https://wa.me/12462443721?text=${encodedMessage}`, '_blank')
  }


  return (
    <div className={`mt-6 ${className || ''}`}>
      {/* WhatsApp Only Button */}
      <Button 
        onClick={handleWhatsApp}
        className="bg-green-500 hover:bg-green-600 text-white"
      >
        <IconBrandWhatsapp className="h-4 w-4 mr-2" />
        Schedule Investment Meeting
      </Button>
    </div>
  )
}
