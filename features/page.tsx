import Link from "next/link"
import { ArrowLeft, BarChart2, Search, Zap, Users, FileText, Brain, Clock, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function FeaturesPage() {
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Comprehensive Features</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Explore the full range of AI-powered tools available in our CV analysis platform.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-12">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Search className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">Smart Keyword Matching</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Our AI identifies relevant skills, experience, and qualifications from CVs and matches them to your
                    job requirements. The system understands context, synonyms, and industry-specific terminology to
                    ensure no qualified candidate is missed.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Zap className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">Sentiment Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Evaluate the tone and language used in resumes to identify confident and qualified candidates. Our
                    AI can detect passive vs. active language, achievement-oriented statements, and other linguistic
                    markers of high-potential applicants.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Users className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">Candidate Ranking</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Automatically rank applicants based on qualifications, experience, and fit for the role. The system
                    provides a percentage match score and detailed breakdown of why each candidate was ranked as they
                    were.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <FileText className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">Document Parsing</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Extract structured data from unstructured CV documents in various formats (PDF, DOCX, TXT). Our
                    system automatically identifies and categorizes education, work experience, skills, certifications,
                    and contact information.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Brain className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">Skills Gap Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Identify missing skills and qualifications in otherwise strong candidates. This feature helps
                    recruiters find candidates who may need minimal training to become perfect fits, expanding your
                    talent pool.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Clock className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">Automated Screening</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Set up custom screening criteria and let our AI handle the initial review process. The system can
                    automatically reject, shortlist, or flag candidates for human review based on your predefined
                    requirements.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Shield className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">Bias Detection</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Our AI is designed to help reduce unconscious bias in the hiring process. The system focuses on
                    skills and qualifications while helping recruiters identify and mitigate potential biases in their
                    selection criteria.
                  </CardDescription>
                </CardContent>
              </Card>
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
                  Our platform leverages cutting-edge AI and machine learning technologies.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">Natural Language Processing</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our system uses advanced NLP techniques to understand the semantic meaning of text in resumes. This
                  allows it to comprehend industry jargon, recognize achievements, and understand the context of a
                  candidate's experience.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">Machine Learning Algorithms</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  ResumeAI is trained on millions of CVs and job descriptions across various industries. Our models
                  continuously learn from recruiter feedback to improve matching accuracy and candidate assessment.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">Data Security</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We prioritize the security and privacy of your data. All documents are encrypted both in transit and
                  at rest. Our platform is compliant with GDPR, CCPA, and other relevant data protection regulations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-12">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-8">
              <div className="space-y-2 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Seamless Integrations</h2>
                <p className="text-gray-500 dark:text-gray-400">ResumeAI works with your existing recruitment stack.</p>
              </div>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                <div className="flex flex-col items-center justify-center rounded-lg border p-4">
                  <div className="text-center">
                    <h3 className="font-medium">ATS Systems</h3>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center rounded-lg border p-4">
                  <div className="text-center">
                    <h3 className="font-medium">HRIS Platforms</h3>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center rounded-lg border p-4">
                  <div className="text-center">
                    <h3 className="font-medium">Job Boards</h3>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center rounded-lg border p-4">
                  <div className="text-center">
                    <h3 className="font-medium">CRM Systems</h3>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button>View All Integrations</Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Experience ResumeAI?</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Start your 14-day free trial today. No credit card required.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary">
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent">
                  Request Demo
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

