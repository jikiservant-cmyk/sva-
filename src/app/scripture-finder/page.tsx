"use client"

import * as React from "react"
import { BookOpen, Send, Sparkles, RefreshCw, Bookmark, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { aiScriptureFinder, type AiScriptureFinderOutput } from "@/ai/flows/ai-scripture-finder-flow"
import { useToast } from "@/hooks/use-toast"
import { Skeleton } from "@/components/ui/skeleton"

export default function ScriptureFinderPage() {
  const [question, setQuestion] = React.useState("")
  const [result, setResult] = React.useState<AiScriptureFinderOutput | null>(null)
  const [loading, setLoading] = React.useState(false)
  const { toast } = useToast()

  const handleSearch = async () => {
    if (!question.trim()) return

    setLoading(true)
    setResult(null)
    try {
      const output = await aiScriptureFinder({ question })
      setResult(output)
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong while searching. Please try again.",
        variant: "destructive"
      })
    } finally {
      setLoading(false)
    }
  }

  const handleExample = (q: string) => {
    setQuestion(q)
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12 fade-in">
        <div className="inline-flex p-3 rounded-full bg-secondary mb-6 shadow-md">
          <BookOpen className="h-10 w-10 text-secondary-foreground" />
        </div>
        <h1 className="font-headline text-5xl font-bold text-primary mb-4">Scripture AI Finder</h1>
        <p className="text-muted-foreground text-lg font-body max-w-2xl mx-auto">
          Explore the wisdom of the Bible. Ask questions about life, faith, or specific topics and receive guided biblical insights.
        </p>
      </div>

      <div className="space-y-8 fade-in">
        <Card className="shadow-lg border-primary/10 overflow-hidden">
          <CardHeader className="bg-primary text-primary-foreground pb-8">
            <CardTitle className="font-headline text-2xl flex items-center">
              <Sparkles className="h-5 w-5 mr-2 text-secondary" />
              How can we help your study today?
            </CardTitle>
            <CardDescription className="text-primary-foreground/70">
              Type your question below and our AI will search the scriptures for you.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="relative">
              <Textarea
                placeholder="Example: How can I find peace during difficult times? or What does the Bible say about forgiveness?"
                className="min-h-[120px] text-lg resize-none pr-12 pt-4 border-2 focus-visible:ring-primary/20"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && e.ctrlKey) handleSearch()
                }}
              />
              <Button
                size="icon"
                className="absolute right-2 bottom-2 bg-primary hover:bg-primary/90 h-10 w-10 shadow-md"
                onClick={handleSearch}
                disabled={loading || !question.trim()}
              >
                {loading ? <RefreshCw className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
              </Button>
            </div>

            <div className="mt-6">
              <p className="text-sm font-bold text-muted-foreground mb-3 flex items-center">
                Try asking:
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "What are some verses about hope?",
                  "How do I deal with anxiety?",
                  "Bible's perspective on loving neighbors",
                  "Finding purpose in my work"
                ].map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleExample(q)}
                    className="text-xs font-bold py-1.5 px-3 rounded-full border border-border bg-muted/50 hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {loading && (
          <div className="space-y-6 fade-in">
            <Skeleton className="h-[200px] w-full rounded-2xl" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Skeleton className="h-[150px] w-full rounded-xl" />
              <Skeleton className="h-[150px] w-full rounded-xl" />
            </div>
          </div>
        )}

        {result && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Explanation */}
            <Card className="border-l-4 border-l-secondary shadow-md overflow-hidden">
              <CardContent className="p-8">
                <h3 className="font-headline text-2xl font-bold text-primary mb-4">Understanding the Word</h3>
                <div className="prose prose-blue max-w-none text-muted-foreground font-body leading-relaxed text-lg italic">
                  "{result.explanation}"
                </div>
              </CardContent>
            </Card>

            {/* Verses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {result.verses.map((verse, i) => (
                <Card key={i} className="hover:shadow-md transition-all group border-primary/5">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <span className="font-headline font-bold text-secondary-foreground bg-secondary/20 px-3 py-1 rounded-md">
                        {verse.reference}
                      </span>
                      <div className="flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button variant="ghost" size="icon" className="h-8 w-8"><Bookmark className="h-4 w-4" /></Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8"><Share2 className="h-4 w-4" /></Button>
                      </div>
                    </div>
                    <p className="text-muted-foreground font-body leading-relaxed">
                      "{verse.text}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center pt-8">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white font-bold"
                onClick={() => {
                  setResult(null)
                  setQuestion("")
                }}
              >
                Clear Results & Ask Another
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
