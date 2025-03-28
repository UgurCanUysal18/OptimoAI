import Link from "next/link"
import { ArrowRight, CheckCircle, BarChart2, Search, Zap, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <BarChart2 className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">ResumeAI</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:underline">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:underline">
              How It Works
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:underline">
              Pricing
            </Link>
            <Link href="#about" className="text-sm font-medium hover:underline">
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
        <section className="py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    AI-Powered CV Analysis
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Our advanced AI technology analyzes resumes and CVs to help recruiters find the perfect candidates
                    faster and more accurately.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1">
                    Start Free Trial <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Watch Demo
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>14-day free trial</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden border bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 p-6 shadow-lg">
                  <div className="absolute inset-0 bg-grid-gray-400/20 [mask-image:linear-gradient(to_bottom,white,transparent)]" />
                  <div className="relative flex flex-col h-full justify-center items-center gap-4 text-center">
                    <BarChart2 className="h-12 w-12 text-primary" />
                    <h3 className="text-xl font-bold">Resume Analysis Dashboard</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Visualize candidate data, skills matching, and hiring recommendations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Powerful Features</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our AI-powered platform offers a comprehensive set of tools to streamline your recruitment process.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Search className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">Smart Keyword Matching</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Automatically identifies relevant skills and experience from CVs, matching them to your job
                    requirements.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Zap className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">Sentiment Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Evaluates the tone and language used in resumes to identify confident and qualified candidates.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Users className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">Candidate Ranking</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Ranks applicants based on qualifications, experience, and fit for the role, saving you hours of
                    manual screening.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our AI-powered CV analysis follows a sophisticated process to deliver accurate results.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 mt-12">
              <div className="grid gap-8 md:grid-cols-3">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">1</div>
                  <h3 className="mt-4 text-xl font-bold">Upload CVs</h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Upload candidate resumes individually or in bulk through our intuitive interface.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">2</div>
                  <h3 className="mt-4 text-xl font-bold">AI Analysis</h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Our AI engine extracts key information, skills, and experience from each document.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">3</div>
                  <h3 className="mt-4 text-xl font-bold">Review Results</h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Access detailed reports and rankings to make informed hiring decisions.
                  </p>
                </div>
              </div>
              <div className="relative mt-8 rounded-xl border bg-gray-100 p-6 dark:bg-gray-800">
                <div className="space-y-4">
                  <h4 className="text-lg font-bold">The Technology Behind ResumeAI</h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    Our platform uses natural language processing (NLP) and machine learning algorithms to understand
                    the content and context of resumes. The system is trained on millions of CVs and job descriptions to
                    accurately match candidates to positions.
                  </p>
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Advanced text analysis and entity recognition</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Contextual understanding of industry-specific terminology</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Continuous learning from recruiter feedback</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Pricing Plans</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Choose the plan that fits your recruitment needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-12">
              <Card>
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                  <div className="text-3xl font-bold">
                    $49<span className="text-sm font-normal text-gray-500">/month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Up to 50 CVs per month</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Basic keyword matching</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Email support</span>
                      </li>
                    </ul>
                    <Button className="w-full">Get Started</Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-primary">
                <CardHeader>
                  <CardTitle>Professional</CardTitle>
                  <div className="text-3xl font-bold">
                    $99<span className="text-sm font-normal text-gray-500">/month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Up to 200 CVs per month</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Advanced AI matching</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Candidate ranking</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Priority support</span>
                      </li>
                    </ul>
                    <Button className="w-full">Get Started</Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <div className="text-3xl font-bold">Custom</div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Unlimited CVs</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Full AI feature suite</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>API access</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Dedicated account manager</span>
                      </li>
                    </ul>
                    <Button variant="outline" className="w-full">
                      Contact Sales
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About ResumeAI</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  ResumeAI was founded in 2022 by a team of HR professionals and AI engineers who recognized the
                  challenges of modern recruitment. Our mission is to transform the hiring process by leveraging
                  artificial intelligence to find the best talent efficiently.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Today, our platform is used by hundreds of companies worldwide, from startups to Fortune 500
                  corporations, helping them save time and make better hiring decisions.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden border bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 p-6 shadow-lg">
                  <div className="absolute inset-0 bg-grid-gray-400/20 [mask-image:linear-gradient(to_bottom,white,transparent)]" />
                  <div className="relative flex flex-col h-full justify-center items-center gap-4 text-center">
                    <Users className="h-12 w-12 text-primary" />
                    <h3 className="text-xl font-bold">Our Team</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      A diverse group of experts in AI, machine learning, HR, and recruitment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Transform Your Hiring Process?
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join hundreds of companies already using ResumeAI to find the best talent.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" className="gap-1">
                  Start Free Trial <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent">
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

