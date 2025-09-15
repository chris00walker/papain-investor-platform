import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { IconMail, IconPhone, IconDownload } from "@tabler/icons-react"
import { useState } from "react"

export function FloatingCTA() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isExpanded && (
        <Card className="mb-4 w-80 shadow-lg border-primary/20">
          <CardContent className="p-4 space-y-3">
            <div className="text-sm font-semibold text-primary">Investment Inquiry</div>
            <div className="text-xs text-muted-foreground">
              Ready to learn more about the papain value chain opportunity?
            </div>
            <div className="space-y-2">
              <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                <IconMail className="h-4 w-4 mr-2" />
                Schedule Meeting
              </Button>
              <Button variant="outline" size="sm" className="w-full">
                <IconPhone className="h-4 w-4 mr-2" />
                Request Call Back
              </Button>
              <Button variant="ghost" size="sm" className="w-full">
                <IconDownload className="h-4 w-4 mr-2" />
                Download Pitch Deck
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
      
      <Button
        size="lg"
        className="rounded-full shadow-lg bg-primary hover:bg-primary/90 h-14 w-14 p-0"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? (
          <span className="text-lg">×</span>
        ) : (
          <IconMail className="h-6 w-6" />
        )}
      </Button>
    </div>
  )
}
