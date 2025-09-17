import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { IconPlayerPlay, IconHeadphones, IconFileText, IconChevronDown, IconChevronRight, IconX } from "@tabler/icons-react"
import { useState } from "react"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface MediaFile {
  id: string
  title: string
  duration: string
  venture: 'grower' | 'processor' | 'distributor'
  filePath: string
}

interface ExecutiveSummaryFile {
  id: string
  title: string
  description: string
  venture: 'grower' | 'processor' | 'distributor' | 'consolidated'
  filePath: string
  readTime: string
}

interface ContentSection {
  type: 'presentations' | 'podcasts' | 'executive-summary'
  title: string
  description: string
  icon: React.ReactNode
  color: string
  files?: MediaFile[]
  summaryFiles?: ExecutiveSummaryFile[]
  actionLabel: string
  onClick?: () => void
}

export function MultiModalContent() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const [selectedVideo, setSelectedVideo] = useState<MediaFile | null>(null)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [selectedSummary, setSelectedSummary] = useState<ExecutiveSummaryFile | null>(null)
  const [isSummaryModalOpen, setIsSummaryModalOpen] = useState(false)
  const [summaryContent, setSummaryContent] = useState<string>('')

  const videoFiles: MediaFile[] = [
    {
      id: 'grower-video',
      title: 'Grower Venture Presentation',
      duration: '8 min',
      venture: 'grower',
      filePath: '/video/grower.mp4'
    },
    {
      id: 'processor-video',
      title: 'Processor Venture Presentation', 
      duration: '9 min',
      venture: 'processor',
      filePath: '/video/processor.mp4'
    },
    {
      id: 'distributor-video',
      title: 'Distributor Venture Presentation',
      duration: '8 min', // Update with actual duration if known
      venture: 'distributor',
      filePath: '/video/distributor.mp4'
    }
  ]

  const audioFiles: MediaFile[] = [
    {
      id: 'grower-audio',
      title: 'Grower Venture Executive Podcast',
      duration: '12 min',
      venture: 'grower',
      filePath: '/audio/grower-audio.mp4'
    },
    {
      id: 'processor-audio',
      title: 'Processor Venture Executive Podcast',
      duration: '10 min',
      venture: 'processor',
      filePath: '/audio/processor-audio.mp4'
    },
    {
      id: 'distributor-audio',
      title: 'Distributor Venture Executive Podcast',
      duration: '15 min',
      venture: 'distributor',
      filePath: '/audio/distributor-audio.mp4'
    }
  ]

  const executiveSummaryFiles: ExecutiveSummaryFile[] = [
    {
      id: 'consolidated-summary',
      title: 'Consolidated Executive Summary',
      description: 'Comprehensive overview of the entire vertically integrated papain value chain',
      venture: 'consolidated',
      filePath: '/documents/consolidated-executive-summary.md',
      readTime: '8-10 min read'
    },
    {
      id: 'grower-summary',
      title: 'Grower Venture Executive Summary',
      description: 'Detailed analysis of papaya farming operations in Barbados',
      venture: 'grower',
      filePath: '/documents/grower-executive-summary.md',
      readTime: '6-8 min read'
    },
    {
      id: 'processor-summary',
      title: 'Processor Venture Executive Summary',
      description: 'Papain extraction and pharmaceutical-grade processing facility',
      venture: 'processor',
      filePath: '/documents/processor-executive-summary.md',
      readTime: '7-9 min read'
    },
    {
      id: 'distributor-summary',
      title: 'Distributor Venture Executive Summary',
      description: 'Western Hemisphere distribution network and market penetration',
      venture: 'distributor',
      filePath: '/documents/distributor-executive-summary.md',
      readTime: '7-9 min read'
    }
  ]

  const contentSections: ContentSection[] = [
    {
      type: 'presentations',
      title: 'Video Presentations',
      description: 'Visual overviews of each venture with key metrics and projections',
      icon: <IconPlayerPlay className="h-6 w-6" />,
      color: 'border-l-primary text-primary',
      files: videoFiles,
      actionLabel: 'View All Videos'
    },
    {
      type: 'podcasts',
      title: 'Executive Podcasts',
      description: 'In-depth audio discussions on market opportunity and investment strategy',
      icon: <IconHeadphones className="h-6 w-6" />,
      color: 'border-l-secondary text-secondary',
      files: audioFiles,
      actionLabel: 'Listen to All Episodes'
    },
    {
      type: 'executive-summary',
      title: 'Executive Summary',
      description: 'Comprehensive written analysis and documentation across all ventures',
      icon: <IconFileText className="h-6 w-6" />,
      color: 'border-l-accent text-accent',
      summaryFiles: executiveSummaryFiles,
      actionLabel: 'View All Summaries'
    }
  ]

  const getVentureColor = (venture: string) => {
    switch (venture) {
      case 'grower':
        return 'bg-primary/10 text-primary border-primary/20'
      case 'processor':
        return 'bg-secondary/10 text-secondary border-secondary/20'
      case 'distributor':
        return 'bg-accent/10 text-accent border-accent/20'
      case 'consolidated':
        return 'bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 text-foreground border-muted/30'
      default:
        return 'bg-muted/10 text-muted-foreground border-muted/20'
    }
  }

  const playVideo = (file: MediaFile) => {
    setSelectedVideo(file)
    setIsVideoModalOpen(true)
  }

  const closeVideoModal = () => {
    setIsVideoModalOpen(false)
    setSelectedVideo(null)
  }

  const [selectedAudio, setSelectedAudio] = useState<MediaFile | null>(null)
  const [isAudioModalOpen, setIsAudioModalOpen] = useState(false)

  const playAudio = (file: MediaFile) => {
    setSelectedAudio(file)
    setIsAudioModalOpen(true)
  }

  const closeAudioModal = () => {
    setIsAudioModalOpen(false)
    setSelectedAudio(null)
  }

  const openSummary = async (file: ExecutiveSummaryFile) => {
    try {
      const response = await fetch(file.filePath)
      const content = await response.text()
      setSummaryContent(content)
      setSelectedSummary(file)
      setIsSummaryModalOpen(true)
    } catch (error) {
      console.error('Failed to load executive summary:', error)
    }
  }

  const closeSummaryModal = () => {
    setIsSummaryModalOpen(false)
    setSelectedSummary(null)
    setSummaryContent('')
  }

  const toggleSection = (sectionType: string) => {
    setExpandedSection(expandedSection === sectionType ? null : sectionType)
  }

  return (
    <div className="space-y-4">
      <div className="space-y-4">
        {contentSections.map((section, index) => (
          <Card key={index} className={`border-l-4 ${section.color.split(' ')[0]}`}>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className={section.color.split(' ')[1]}>
                  {section.icon}
                </div>
                <div className="flex-1">
                  <CardTitle className="text-lg">{section.title}</CardTitle>
                  <CardDescription>{section.description}</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  {((section.files && section.files.length > 0) || (section.summaryFiles && section.summaryFiles.length > 0)) && (
                    <Badge variant="outline">
                      {(section.files?.length || section.summaryFiles?.length || 0)} {(section.files?.length || section.summaryFiles?.length || 0) === 1 ? 'file' : 'files'}
                    </Badge>
                  )}
                  {((section.files && section.files.length > 0) || (section.summaryFiles && section.summaryFiles.length > 0)) && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleSection(section.type)}
                    >
                      {expandedSection === section.type ? (
                        <IconChevronDown className="h-4 w-4" />
                      ) : (
                        <IconChevronRight className="h-4 w-4" />
                      )}
                    </Button>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {/* Expanded file list - Media Files */}
              {expandedSection === section.type && section.files && section.files.length > 0 && (
                <div className="mb-4 space-y-2">
                  {section.files.map((file) => (
                    <div key={file.id} className={`p-3 rounded-lg border ${getVentureColor(file.venture)}`}>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-sm">{file.title}</h4>
                          <p className="text-xs opacity-75 capitalize">{file.venture} venture • {file.duration}</p>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            if (section.type === 'presentations') {
                              playVideo(file)
                            } else if (section.type === 'podcasts') {
                              playAudio(file)
                            }
                          }}
                        >
                          {section.icon}
                          <span className="ml-1">Play</span>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Expanded file list - Executive Summary Files */}
              {expandedSection === section.type && section.summaryFiles && section.summaryFiles.length > 0 && (
                <div className="mb-4 space-y-2">
                  {section.summaryFiles.map((file) => (
                    <div key={file.id} className={`p-3 rounded-lg border ${getVentureColor(file.venture)}`}>
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">{file.title}</h4>
                          <p className="text-xs opacity-75 mb-1">{file.description}</p>
                          <div className="flex items-center gap-2 text-xs opacity-60">
                            <span className="capitalize">{file.venture === 'consolidated' ? 'All ventures' : `${file.venture} venture`}</span>
                            <span>•</span>
                            <span>{file.readTime}</span>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => openSummary(file)}
                        >
                          <IconFileText className="h-4 w-4" />
                          <span className="ml-1">Read</span>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Main action button */}
              <div className="flex justify-end pt-2">
                <Button 
                  onClick={() => {
                    if (section.onClick) {
                      section.onClick()
                    } else {
                      toggleSection(section.type)
                    }
                  }}
                  variant={section.type === 'executive-summary' ? 'outline' : 'default'}
                  size="sm"
                >
                  {section.icon}
                  <span className="ml-2">{section.actionLabel}</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>


      {/* Video Player Modal */}
      <Dialog open={isVideoModalOpen} onOpenChange={setIsVideoModalOpen}>
        <DialogContent className="max-w-4xl w-full">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              <span>{selectedVideo?.title}</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={closeVideoModal}
                className="text-white hover:bg-white/10"
              >
                <IconX className="h-4 w-4 text-white" />
              </Button>
            </DialogTitle>
          </DialogHeader>
          {selectedVideo && (
            <div className="space-y-4">
              <div className="aspect-video bg-black rounded-lg overflow-hidden">
                <video
                  controls
                  className="w-full h-full"
                  preload="metadata"
                  onError={(e) => {
                    console.error('Video failed to load:', selectedVideo.filePath)
                    console.error('Error details:', e)
                  }}
                >
                  <source src={selectedVideo.filePath} type="video/mp4" />
                  <source src={`/video/${selectedVideo.venture}.mp4`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Badge className={getVentureColor(selectedVideo.venture) + ' text-white'}>
                    {selectedVideo.venture} venture
                  </Badge>
                  <span>Duration: {selectedVideo.duration}</span>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Audio Player Modal */}
      <Dialog open={isAudioModalOpen} onOpenChange={setIsAudioModalOpen}>
        <DialogContent className="max-w-2xl w-full">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              <span>{selectedAudio?.title}</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={closeAudioModal}
                className="text-white hover:bg-white/10"
              >
                <IconX className="h-4 w-4 text-white" />
              </Button>
            </DialogTitle>
          </DialogHeader>
          {selectedAudio && (
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-secondary/20 to-accent/20 rounded-lg p-8">
                <div className="flex items-center justify-center mb-4">
                  <div className={`p-4 rounded-full ${getVentureColor(selectedAudio.venture)}`}>
                    <IconHeadphones className="h-12 w-12" />
                  </div>
                </div>
                <audio
                  controls
                  className="w-full"
                  preload="metadata"
                  onError={(e) => {
                    console.error('Audio failed to load:', selectedAudio.filePath)
                    console.error('Error details:', e)
                  }}
                >
                  <source src={selectedAudio.filePath} type="audio/mp4" />
                  <source src={selectedAudio.filePath} type="audio/mpeg" />
                  Your browser does not support the audio tag.
                </audio>
              </div>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Badge className={getVentureColor(selectedAudio.venture) + ' text-white'}>
                    {selectedAudio.venture} venture
                  </Badge>
                  <span>Duration: {selectedAudio.duration}</span>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Executive Summary Modal */}
      <Dialog open={isSummaryModalOpen} onOpenChange={setIsSummaryModalOpen}>
        <DialogContent className="max-w-6xl w-full max-h-[90vh] overflow-hidden bg-white dark:bg-gray-900 shadow-2xl border-0">
          <div className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 border-b border-gray-200 dark:border-gray-700">
            <DialogHeader>
              <DialogTitle className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl shadow-md ${selectedSummary ? getVentureColor(selectedSummary.venture) + ' text-white' : 'bg-gray-100 dark:bg-gray-800 text-white'}`}>
                    <IconFileText className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedSummary?.title}</h2>
                    <p className="text-base text-gray-600 dark:text-gray-300 mt-1">{selectedSummary?.description}</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={closeSummaryModal}
                  className="text-white hover:bg-white/10 rounded-full p-2"
                >
                  <IconX className="h-5 w-5 text-white" />
                </Button>
              </DialogTitle>
            </DialogHeader>
          </div>
          {selectedSummary && (
            <div className="bg-white dark:bg-gray-900 p-6">
              <div className="flex items-center justify-between py-4 bg-gray-50 dark:bg-gray-800 rounded-lg px-4 mb-6">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{selectedSummary.readTime}</span>
                </div>
              </div>
              <div className="overflow-y-auto max-h-[60vh] prose prose-xl max-w-none bg-white dark:bg-gray-900 p-12 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    table: ({children}) => (
                      <table className="w-full border-collapse my-8 text-base text-left text-gray-900 dark:text-gray-100">
                        {children}
                      </table>
                    ),
                    thead: ({children}) => (
                      <thead className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                        {children}
                      </thead>
                    ),
                    tbody: ({children}) => (
                      <tbody className="text-gray-900 dark:text-gray-100">
                        {children}
                      </tbody>
                    ),
                    tr: ({children}) => (
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        {children}
                      </tr>
                    ),
                    th: ({children}) => (
                      <th className="px-4 py-3 font-semibold bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700">
                        {children}
                      </th>
                    ),
                    td: ({children}) => (
                      <td className="px-4 py-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700">
                        {children}
                      </td>
                    ),
                    h1: ({children}) => (
                      <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-3">{children}</h1>
                        <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-6"></div>
                      </div>
                    ),
                    h2: ({children}) => (
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-10 mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">{children}</h2>
                    ),
                    h3: ({children}) => (
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">{children}</h3>
                    ),
                    h4: ({children}) => (
                      <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100 mt-6 mb-3">{children}</h4>
                    ),
                    p: ({children}) => (
                      <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed text-lg tracking-wide">{children}</p>
                    ),
                    ul: ({children}) => (
                      <ul className="mb-6 space-y-3 text-gray-700 dark:text-gray-300">{children}</ul>
                    ),
                    ol: ({children}) => (
                      <ol className="mb-6 space-y-3 text-gray-700 dark:text-gray-300">{children}</ol>
                    ),
                    li: ({children}) => (
                      <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                        <span className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></span>
                        <span>{children}</span>
                      </li>
                    ),
                    strong: ({children}) => (
                      <strong className="font-bold text-gray-900 dark:text-gray-100 bg-yellow-50 dark:bg-yellow-900/20 px-1 rounded">{children}</strong>
                    ),
                    em: ({children}) => (
                      <em className="italic text-primary font-medium">{children}</em>
                    ),
                    blockquote: ({children}) => (
                      <blockquote className="border-l-4 border-primary bg-gradient-to-r from-primary/5 to-transparent pl-8 py-6 my-8 text-gray-700 dark:text-gray-300 rounded-r-xl shadow-sm">
                        <div className="text-lg leading-relaxed">{children}</div>
                      </blockquote>
                    ),
                    code: ({children}) => (
                      <code className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-md text-sm font-mono text-primary border">{children}</code>
                    ),
                    pre: ({children}) => (
                      <pre className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl overflow-x-auto text-sm font-mono mb-8 border border-gray-200 dark:border-gray-700 shadow-inner">{children}</pre>
                    ),
                    hr: () => (
                      <div className="my-12 flex items-center justify-center">
                        <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                      </div>
                    )
                  }}
                >
                  {summaryContent}
                </ReactMarkdown>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
