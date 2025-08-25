import { Button } from "@/components/ui/button";

interface PlaceholderProps {
  title: string;
  description?: string;
}

export default function Placeholder({ title, description }: PlaceholderProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="w-full px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-foreground hover:opacity-80 transition-opacity">
            designkit.
          </a>
        </div>
        <Button 
          variant="default" 
          className="bg-brand-800 hover:bg-brand-900 text-white rounded-lg px-6 py-2.5 font-medium transition-colors"
        >
          Get Started Today
        </Button>
      </header>

      {/* Placeholder Content */}
      <main className="flex flex-col items-center justify-center px-6 pt-16 pb-8 max-w-4xl mx-auto text-center">
        <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          {title}
        </h1>
        
        <p className="text-xl text-brand-600 mb-8 max-w-2xl">
          {description || "This page is coming soon. Continue the conversation to have me build out this section of your website."}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            variant="default"
            className="bg-brand-800 hover:bg-brand-900 text-white rounded-lg px-6 py-3 font-medium transition-colors"
            onClick={() => window.history.back()}
          >
            Go Back
          </Button>
          <Button 
            variant="outline"
            className="border-brand-200 text-brand-700 hover:bg-brand-50 rounded-lg px-6 py-3 font-medium transition-colors"
            onClick={() => window.location.href = '/'}
          >
            Return Home
          </Button>
        </div>
      </main>
    </div>
  );
}
