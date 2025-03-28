import Link from "next/link"
import { ArrowLeft, BarChart2, FileText, Brain, Database, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <BarChart2 className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">ResumeAI</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/#features" className="text-sm font-medium hover:underline">
              Features
            </Link>
            <Link href="/#how-it-works" className="text-sm font-medium hover:underline">
              How It Works
            </Link>
            <Link href="/#pricing" className="text-sm font-medium hover:underline">
              Pricing
            </Link>
            <Link href="/#about" className="text-sm font-medium hover:underline">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              Log in
            </Button>
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Link href="/" className="flex items-center gap-2 text-primary hover:underline">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </Link>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How ResumeAI Works</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  A detailed look at our AI-powered CV analysis process.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-12">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <div className="space-y-12">
                <div className="grid gap-6 md:grid-cols-2 md:gap-12 items-center">
                  <div className="space-y-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                      1
                    </div>
                    <h2 className="text-2xl font-bold">Document Upload & Processing</h2>
                    <p className="text-gray-500 dark:text-gray-400">
                      Upload candidate resumes individually or in bulk through our intuitive interface. Our system
                      accepts various file formats including PDF, DOCX, and TXT. The AI engine then processes each
                      document, extracting text and preparing it for analysis.
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <div className="relative w-full max-w-[400px] aspect-video rounded-xl overflow-hidden border bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 p-6 shadow-lg">
                      <div className="relative flex flex-col h-full justify-center items-center gap-4 text-center">
                        <FileText className="h-12 w-12 text-primary" />
                        <p className="text-sm text-gray-500 dark:text-gray-400">Document processing visualization</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 md:gap-12 items-center">
                  <div className="order-2 md:order-1 flex justify-center">
                    <div className="relative w-full max-w-[400px] aspect-video rounded-xl overflow-hidden border bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 p-6 shadow-lg">
                      <div className="relative flex flex-col h-full justify-center items-center gap-4 text-center">
                        <Brain className="h-12 w-12 text-primary" />
                        <p className="text-sm text-gray-500 dark:text-gray-400">AI analysis visualization</p>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 md:order-2 space-y-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                      2
                    </div>
                    <h2 className="text-2xl font-bold">AI Analysis & Data Extraction</h2>
                    <p className="text-gray-500 dark:text-gray-400">
                      Our AI engine uses natural language processing to understand the content of each resume. It
                      identifies and extracts key information such as:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Contact information and personal details</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Education history and qualifications</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Work experience and job responsibilities</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Skills, certifications, and technical competencies</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 md:gap-12 items-center">
                  <div className="space-y-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                      3
                    </div>
                    <h2 className="text-2xl font-bold">Job Matching & Candidate Ranking</h2>
                    <p className="text-gray-500 dark:text-gray-400">
                      The system compares the extracted data against your job requirements. Our AI understands context
                      and semantics, recognizing that "front-end development" and "UI programming" represent similar
                      skills. Candidates are then ranked based on:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Skills match percentage</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Experience relevance and duration</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Education and certification alignment</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Achievement indicators and language sentiment</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex justify-center">
                    <div className="relative w-full max-w-[400px] aspect-video rounded-xl overflow-hidden border bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 p-6 shadow-lg">
                      <div className="relative flex flex-col h-full justify-center items-center gap-4 text-center">
                        <Database className="h-12 w-12 text-primary" />
                        <p className="text-sm text-gray-500 dark:text-gray-400">Matching and ranking visualization</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 md:gap-12 items-center">
                  <div className="order-2 md:order-1 flex justify-center">
                    <div className="relative w-full max-w-[400px] aspect-video rounded-xl overflow-hidden border bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 p-6 shadow-lg">
                      <div className="relative flex flex-col h-full justify-center items-center gap-4 text-center">
                        <BarChart2 className="h-12 w-12 text-primary" />
                        <p className="text-sm text-gray-500 dark:text-gray-400">Results dashboard visualization</p>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 md:order-2 space-y-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                      4
                    </div>
                    <h2 className="text-2xl font-bold">Results & Insights</h2>
                    <p className="text-gray-500 dark:text-gray-400">
                      Access detailed reports and insights through our intuitive dashboard. Recruiters can:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>View ranked candidate lists with match percentages</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Explore detailed candidate profiles with extracted data</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Compare multiple candidates side-by-side</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Export reports and share with team members</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Details */}
        <section className="py-12 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-8">
              <div className="space-y-2 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">The Technology Behind ResumeAI</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  A closer look at our AI and machine learning infrastructure.
                </p>
              </div>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">Natural Language Processing</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Our NLP engine is built on transformer-based models similar to BERT and GPT, but specifically
                    fine-tuned on millions of resumes and job descriptions. This specialized training allows our system
                    to understand industry-specific terminology and the context of professional experiences.
                  </p>

                  <h3 className="text-xl font-bold">Machine Learning Pipeline</h3>
                  <p className="text-gray-500 dark:text-gray-400">ResumeAI uses a multi-stage ML pipeline:</p>
                  <ol className="space-y-2 list-decimal list-inside">
                    <li className="text-gray-500 dark:text-gray-400">Document parsing and text extraction</li>
                    <li className="text-gray-500 dark:text-gray-400">
                      Entity recognition for identifying key information
                    </li>
                    <li className="text-gray-500 dark:text-gray-400">Semantic analysis for understanding context</li>
                    <li className="text-gray-500 dark:text-gray-400">
                      Matching algorithms for comparing to job requirements
                    </li>
                    <li className="text-gray-500 dark:text-gray-400">Ranking models for scoring candidates</li>
                  </ol>

                  <h3 className="text-xl font-bold">Continuous Learning</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Our system improves over time through feedback loops. When recruiters select candidates that weren't
                    initially ranked highest, the system learns from these decisions to improve future recommendations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Ready to Transform Your Hiring Process?
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Start your 14-day free trial today and experience the power of AI-driven recruitment.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg">Start Free Trial</Button>
                <Button size="lg" variant="outline">
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <BarChart2 className="h-5 w-5 text-primary" />
            <span className="text-lg font-bold">ResumeAI</span>
          </div>
          <p className="text-center text-sm leading-loose text-gray-500 md:text-left dark:text-gray-400">
            © 2025 ResumeAI. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm font-medium hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

