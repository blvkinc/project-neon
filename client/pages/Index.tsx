import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

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
              <div className="p-4 sm:p-8 bg-gradient-to-br from-brand-50 to-white min-h-[300px] sm:min-h-[400px]">
                <div className="flex items-center justify-between mb-6 sm:mb-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-900">Dashboard</h2>
                  <div className="flex gap-2">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-brand-200 rounded-lg"></div>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-brand-300 rounded-lg"></div>
                  </div>
                </div>
                
                {/* Stats Cards */}
                <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-6 sm:mb-8">
                  <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-6 border border-brand-100 shadow-sm">
                    <div className="text-xl sm:text-3xl font-bold text-brand-800 mb-1 sm:mb-2">127</div>
                    <div className="text-brand-600 text-xs sm:text-sm">Active Projects</div>
                  </div>
                  <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-6 border border-brand-100 shadow-sm">
                    <div className="text-xl sm:text-3xl font-bold text-brand-800 mb-1 sm:mb-2">24</div>
                    <div className="text-brand-600 text-xs sm:text-sm">Team Members</div>
                  </div>
                  <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-6 border border-brand-100 shadow-sm">
                    <div className="text-xl sm:text-3xl font-bold text-brand-800 mb-1 sm:mb-2">98%</div>
                    <div className="text-brand-600 text-xs sm:text-sm">Efficiency Rate</div>
                  </div>
                </div>
                
                {/* Project List */}
                <div className="bg-white rounded-lg sm:rounded-xl border border-brand-100 shadow-sm">
                  <div className="p-4 sm:p-6 border-b border-brand-100">
                    <h3 className="font-semibold text-brand-900 text-sm sm:text-base">Recent Projects</h3>
                  </div>
                  <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center justify-between py-2 sm:py-3">
                        <div className="flex items-center gap-3 sm:gap-4">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-brand-400 to-brand-600 rounded-lg"></div>
                          <div>
                            <div className="font-medium text-brand-900 text-sm sm:text-base">Design System v2.{i}</div>
                            <div className="text-xs sm:text-sm text-brand-600">Updated 2 hours ago</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-2">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-brand-100 rounded-full"></div>
                          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-brand-200 rounded-full"></div>
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

      {/* Features Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-20 bg-brand-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Built for modern design teams
            </h2>
            <p className="text-lg sm:text-xl text-brand-600 max-w-2xl mx-auto">
              Everything you need to streamline your design process and collaborate more effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
            {[
              {
                title: "Smart Collaboration",
                description: "Real-time collaboration tools that keep your team in sync, no matter where they are.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              },
              {
                title: "Design Systems",
                description: "Powerful tools for creating and maintaining consistent design systems at scale.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                )
              },
              {
                title: "Workflow Automation",
                description: "Automate repetitive tasks and focus on what matters most - creating great designs.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-brand-800 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-brand-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-20 max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Trusted by design teams worldwide
          </h2>
          <p className="text-lg sm:text-xl text-brand-600 max-w-2xl mx-auto">
            See what our clients are saying about their experience with DesignKit.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
          {[
            {
              quote: "DesignKit transformed our design process. We've reduced our design-to-development time by 60% and our team collaboration has never been better.",
              author: "Sarah Johnson",
              role: "Design Director",
              company: "TechFlow Inc.",
              avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&h=387&q=80"
            },
            {
              quote: "The design system capabilities are incredible. We built a comprehensive component library in weeks, not months.",
              author: "Marcus Chen",
              role: "Lead Product Designer",
              company: "InnovateCorp",
              avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&h=387&q=80"
            },
            {
              quote: "Finally, a tool that understands how designers actually work. The learning curve was minimal and the impact was immediate.",
              author: "Emma Rodriguez",
              role: "Senior UX Designer",
              company: "CreativeSpace",
              avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&h=387&q=80"
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl border border-brand-200 p-6 sm:p-8 shadow-sm">
              <div className="mb-6">
                <svg className="w-8 h-8 text-brand-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
                <p className="text-brand-700 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-brand-600 text-sm">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-20 bg-brand-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
            Built by designers, for designers.
          </h2>
          <p className="text-xl text-brand-100 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
            DesignKit is here to elevate your creative process in the most intuitive way possible, helping you and your team create exceptional designs that stand out.
          </p>
          <Button
            size="lg"
            className="bg-white text-brand-900 hover:bg-brand-50 rounded-lg px-8 py-4 text-lg font-medium transition-colors"
            asChild
          >
            <a href="/contact">
              Start Your Free Trial
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
