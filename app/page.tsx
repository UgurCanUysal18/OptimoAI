import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">ResumeAI</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:underline">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:underline">
              How It Works
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
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                AI-Powered CV Analysis
              </h1>
              <p className="mt-4 text-gray-500 md:text-xl">
                Our advanced AI technology analyzes resumes and CVs to help recruiters find the perfect candidates.
              </p>
              <div className="mt-8">
                <Button size="lg" className="mx-2">
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline" className="mx-2">
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6">
        <div className="container flex justify-between">
          <span className="text-sm text-gray-500">© 2025 ResumeAI</span>
        </div>
      </footer>
    </div>
  );
}