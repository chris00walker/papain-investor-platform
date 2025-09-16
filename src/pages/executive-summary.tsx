import React, { useState, useEffect, useCallback } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { FileText, Clock, Factory, Globe, TrendingUp, Users } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { PrimaryNav } from '@/components/navigation/primary-nav'
import { BreadcrumbNav } from '@/components/navigation/breadcrumb-nav'

interface ExecutiveSummaryFile {
  id: string
  title: string
  description: string
  venture: 'grower' | 'processor' | 'distributor' | 'consolidated'
  filePath: string
  readTime: string
  icon: React.ReactNode
}

const executiveSummaryFiles: ExecutiveSummaryFile[] = [
  {
    id: 'consolidated',
    title: 'Consolidated Executive Summary',
    description: 'Complete overview of the vertically integrated papain value chain',
    venture: 'consolidated',
    filePath: '/documents/consolidated-executive-summary.md',
    readTime: '12 min read',
    icon: <Globe className="h-5 w-5" />
  },
  {
    id: 'grower',
    title: 'Grower Venture Summary',
    description: 'Barbados papaya farming operations and market positioning',
    venture: 'grower',
    filePath: '/documents/grower-executive-summary.md',
    readTime: '8 min read',
    icon: <TrendingUp className="h-5 w-5" />
  },
  {
    id: 'processor',
    title: 'Processor Venture Summary',
    description: 'Pharmaceutical-grade papain extraction and processing',
    venture: 'processor',
    filePath: '/documents/processor-executive-summary.md',
    readTime: '10 min read',
    icon: <Factory className="h-5 w-5" />
  },
  {
    id: 'distributor',
    title: 'Distributor Venture Summary',
    description: 'Western Hemisphere distribution network and market penetration',
    venture: 'distributor',
    filePath: '/documents/distributor-executive-summary.md',
    readTime: '9 min read',
    icon: <Users className="h-5 w-5" />
  }
]

const ventureColors = {
  consolidated: 'bg-gradient-to-r from-blue-600 to-purple-600',
  grower: 'bg-gradient-to-r from-green-600 to-emerald-600',
  processor: 'bg-gradient-to-r from-orange-600 to-red-600',
  distributor: 'bg-gradient-to-r from-indigo-600 to-blue-600'
}

export function ExecutiveSummaryPage() {
  const [selectedTab, setSelectedTab] = useState('consolidated')
  const [markdownContent, setMarkdownContent] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState<Record<string, boolean>>({})

  const loadMarkdownContent = useCallback(async (filePath: string, ventureId: string) => {
    if (markdownContent[ventureId]) return // Already loaded

    setLoading(prev => ({ ...prev, [ventureId]: true }))
    try {
      const response = await fetch(filePath)
      const content = await response.text()
      setMarkdownContent(prev => ({ ...prev, [ventureId]: content }))
    } catch (error) {
      console.error(`Failed to load ${filePath}:`, error)
      setMarkdownContent(prev => ({ ...prev, [ventureId]: 'Failed to load content.' }))
    } finally {
      setLoading(prev => ({ ...prev, [ventureId]: false }))
    }
  }, [markdownContent])

  useEffect(() => {
    // Load the selected tab's content
    const selectedFile = executiveSummaryFiles.find(file => file.id === selectedTab)
    if (selectedFile) {
      loadMarkdownContent(selectedFile.filePath, selectedFile.id)
    }
  }, [selectedTab, loadMarkdownContent])

  const handleTabChange = (value: string) => {
    setSelectedTab(value)
  }

  return (
    <div className="min-h-screen" style={{backgroundColor: '#f8f8f8'}}>
      <PrimaryNav />
      <BreadcrumbNav />
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Executive Summaries</h1>
                <p className="text-gray-600">Comprehensive overview of the papain value chain investment opportunity</p>
              </div>
            </div>
            
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              {executiveSummaryFiles.map((file) => (
                <Card key={file.id} className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => handleTabChange(file.id)}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className={`p-2 rounded-lg text-white ${ventureColors[file.venture]}`}>
                        {file.icon}
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        <Clock className="h-3 w-3 mr-1" />
                        {file.readTime}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h3 className="font-semibold text-sm mb-1">{file.title}</h3>
                    <p className="text-xs text-gray-600 line-clamp-2">{file.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

        {/* Tabbed Content */}
        <Card className="shadow-lg">
          <Tabs value={selectedTab} onValueChange={handleTabChange} className="w-full">

            {executiveSummaryFiles.map((file) => (
              <TabsContent key={file.id} value={file.id} className="mt-0">
                <CardHeader className={`${ventureColors[file.venture]} text-white`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {file.icon}
                      <div>
                        <CardTitle className="text-xl">{file.title}</CardTitle>
                        <CardDescription className="text-white/90">{file.description}</CardDescription>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      <Clock className="h-3 w-3 mr-1" />
                      {file.readTime}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="p-12">
                  {loading[file.id] ? (
                    <div className="flex items-center justify-center py-16">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                      <span className="ml-3 text-gray-600">Loading content...</span>
                    </div>
                  ) : markdownContent[file.id] ? (
                    <div className="prose prose-lg max-w-none space-y-6">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          h1: ({ children }) => <h1 className="text-3xl font-bold text-gray-900 mb-12 pb-6 border-b border-gray-200 leading-tight">{children}</h1>,
                          h2: ({ children }) => <h2 className="text-2xl font-semibold text-gray-800 mt-16 mb-8">{children}</h2>,
                          h3: ({ children }) => <h3 className="text-xl font-semibold text-gray-800 mt-12 mb-6">{children}</h3>,
                          h4: ({ children }) => <h4 className="text-lg font-semibold text-gray-800 mt-10 mb-5">{children}</h4>,
                          p: ({ children }) => <p className="text-gray-700 leading-relaxed mb-8">{children}</p>,
                          ul: ({ children }) => <ul className="list-disc list-inside space-y-3 mb-6 text-gray-700">{children}</ul>,
                          ol: ({ children }) => <ol className="list-decimal list-inside space-y-3 mb-6 text-gray-700">{children}</ol>,
                          li: ({ children }) => <li className="leading-relaxed">{children}</li>,
                          table: ({ children }) => (
                            <div className="overflow-x-auto mb-10 mt-6">
                              <table className="min-w-full divide-y divide-gray-200 border border-gray-300 rounded-lg">{children}</table>
                            </div>
                          ),
                          thead: ({ children }) => <thead className="bg-gray-50">{children}</thead>,
                          tbody: ({ children }) => <tbody className="bg-white divide-y divide-gray-200">{children}</tbody>,
                          tr: ({ children }) => <tr>{children}</tr>,
                          th: ({ children }) => <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{children}</th>,
                          td: ({ children }) => <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{children}</td>,
                          blockquote: ({ children }) => (
                            <blockquote className="border-l-4 border-blue-500 pl-4 py-2 mb-4 bg-blue-50 text-gray-700 italic">{children}</blockquote>
                          ),
                          code: ({ children }) => <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">{children}</code>,
                          pre: ({ children }) => <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">{children}</pre>,
                          strong: ({ children }) => <strong className="font-semibold text-gray-900">{children}</strong>,
                          em: ({ children }) => <em className="italic text-gray-800">{children}</em>,
                        }}
                      >
                        {markdownContent[file.id]}
                      </ReactMarkdown>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center py-12">
                      <div className="text-center">
                        <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600">Click to load content</p>
                        <Button 
                          variant="outline" 
                          className="mt-3"
                          onClick={() => loadMarkdownContent(file.filePath, file.id)}
                        >
                          Load {file.title}
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </TabsContent>
            ))}
          </Tabs>
        </Card>
        </div>
      </div>
    </div>
  )
}
