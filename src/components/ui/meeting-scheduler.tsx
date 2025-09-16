import { Button } from "@/components/ui/button"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import { 
  IconBrandWhatsapp, 
  IconBrandGoogle, 
  IconBrandApple,
  IconMail,
  IconChevronDown
} from "@tabler/icons-react"

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
  
  const meetingDetails = {
    title: `Investment Meeting - ${ventureNames[ventureType]}`,
    description: `Discussion about investment opportunity in the papain ${ventureNames[ventureType].toLowerCase()}`,
    duration: "60 minutes",
    location: "Video Conference (link to be provided)"
  }

  const handleWhatsApp = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage)
    window.open(`https://wa.me/12462443721?text=${encodedMessage}`, '_blank')
  }

  const handleGoogleCalendar = () => {
    const startDate = new Date()
    startDate.setDate(startDate.getDate() + 7) // Default to next week
    const endDate = new Date(startDate.getTime() + 60 * 60 * 1000) // 1 hour later
    
    const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(meetingDetails.title)}&dates=${startDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z/${endDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z&details=${encodeURIComponent(meetingDetails.description)}&location=${encodeURIComponent(meetingDetails.location)}`
    
    window.open(googleUrl, '_blank')
  }

  const handleOutlookCalendar = () => {
    const startDate = new Date()
    startDate.setDate(startDate.getDate() + 7)
    const endDate = new Date(startDate.getTime() + 60 * 60 * 1000)
    
    const outlookUrl = `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(meetingDetails.title)}&startdt=${startDate.toISOString()}&enddt=${endDate.toISOString()}&body=${encodeURIComponent(meetingDetails.description)}&location=${encodeURIComponent(meetingDetails.location)}`
    
    window.open(outlookUrl, '_blank')
  }

  const handleAppleCalendar = () => {
    const startDate = new Date()
    startDate.setDate(startDate.getDate() + 7)
    const endDate = new Date(startDate.getTime() + 60 * 60 * 1000)
    
    // Create .ics file content
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Papain Investment Platform//EN
BEGIN:VEVENT
UID:${Date.now()}@papain-investment.com
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTSTART:${startDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTEND:${endDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z
SUMMARY:${meetingDetails.title}
DESCRIPTION:${meetingDetails.description}
LOCATION:${meetingDetails.location}
END:VEVENT
END:VCALENDAR`

    const blob = new Blob([icsContent], { type: 'text/calendar' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${ventureType}-investment-meeting.ics`
    link.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {/* Primary WhatsApp Button */}
      <Button 
        onClick={handleWhatsApp}
        className="bg-green-500 hover:bg-green-600 text-white rounded-r-none border-r border-green-400"
      >
        <IconBrandWhatsapp className="h-4 w-4 mr-2" />
        Schedule Investment Meeting
      </Button>

      {/* Dropdown for Calendar Options */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="default"
            size="sm"
            className="bg-green-500 hover:bg-green-600 text-white rounded-l-none px-2 border-l border-green-400"
          >
            <IconChevronDown className="h-4 w-4" />
            <span className="sr-only">More scheduling options</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuItem onClick={handleWhatsApp}>
            <IconBrandWhatsapp className="h-4 w-4 mr-2 text-green-600" />
            WhatsApp Message
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleGoogleCalendar}>
            <IconBrandGoogle className="h-4 w-4 mr-2 text-blue-600" />
            Google Calendar
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleOutlookCalendar}>
            <IconMail className="h-4 w-4 mr-2 text-blue-800" />
            Outlook Calendar
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleAppleCalendar}>
            <IconBrandApple className="h-4 w-4 mr-2 text-gray-800" />
            Apple Calendar (.ics)
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
