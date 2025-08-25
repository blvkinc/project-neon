import { Button } from "@/components/ui/button";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="w-full px-4 sm:px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center">
          <h1 className="text-xl sm:text-2xl font-bold text-foreground">designkit.</h1>
        </div>
        <Button
          variant="default"
          className="bg-brand-800 hover:bg-brand-900 text-white rounded-lg px-4 sm:px-6 py-2.5 text-sm sm:text-base font-medium transition-colors"
        >
          <span className="hidden sm:inline">Get Started Today</span>
          <span className="sm:hidden">Get Started</span>
        </Button>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center px-4 sm:px-6 pt-8 sm:pt-16 pb-8 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 sm:mb-8">
            Software that elevates your
            <span className="block">design process.</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-brand-600 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Streamline your workflow with tools built for modern design teams and creative professionals.
          </p>

          <Button
            size="lg"
            className="bg-brand-800 hover:bg-brand-900 text-white rounded-lg px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium transition-colors mb-8 sm:mb-16"
          >
            Get Started Today
          </Button>
        </div>

        {/* Visual Element - Software Mockup */}
        <div className="w-full max-w-4xl mt-4 sm:mt-8 relative px-4 sm:px-0">
          <div className="relative mx-auto max-w-3xl">
            {/* Browser Window Mockup */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl border border-brand-200 overflow-hidden">
              {/* Browser Top Bar */}
              <div className="bg-brand-50 px-4 py-3 border-b border-brand-200 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="ml-4 bg-white rounded-md px-3 py-1 text-sm text-brand-600 border border-brand-200 flex-1 max-w-md">
                  https://designkit.app/dashboard
                </div>
              </div>
              
              {/* Dashboard Content */}
              <div className="p-8 bg-gradient-to-br from-brand-50 to-white min-h-[400px]">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-brand-900">Dashboard</h2>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 bg-brand-200 rounded-lg"></div>
                    <div className="w-8 h-8 bg-brand-300 rounded-lg"></div>
                  </div>
                </div>
                
                {/* Stats Cards */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="bg-white rounded-xl p-6 border border-brand-100 shadow-sm">
                    <div className="text-3xl font-bold text-brand-800 mb-2">127</div>
                    <div className="text-brand-600 text-sm">Active Projects</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 border border-brand-100 shadow-sm">
                    <div className="text-3xl font-bold text-brand-800 mb-2">24</div>
                    <div className="text-brand-600 text-sm">Team Members</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 border border-brand-100 shadow-sm">
                    <div className="text-3xl font-bold text-brand-800 mb-2">98%</div>
                    <div className="text-brand-600 text-sm">Efficiency Rate</div>
                  </div>
                </div>
                
                {/* Project List */}
                <div className="bg-white rounded-xl border border-brand-100 shadow-sm">
                  <div className="p-6 border-b border-brand-100">
                    <h3 className="font-semibold text-brand-900">Recent Projects</h3>
                  </div>
                  <div className="p-6 space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center justify-between py-3">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-brand-400 to-brand-600 rounded-lg"></div>
                          <div>
                            <div className="font-medium text-brand-900">Design System v2.{i}</div>
                            <div className="text-sm text-brand-600">Updated 2 hours ago</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-brand-100 rounded-full"></div>
                          <div className="w-6 h-6 bg-brand-200 rounded-full"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
