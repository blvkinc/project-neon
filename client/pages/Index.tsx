import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Minimal Header - exactly like link-kit.com */}
      <header className="w-full px-6 py-6 flex items-center justify-between max-w-6xl mx-auto">
        <Link to="/" className="text-2xl font-bold text-black">
          designkit.
        </Link>
        <Button 
          variant="secondary" 
          className="bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg px-6 py-2.5 font-medium transition-colors border-0"
          asChild
        >
          <Link to="/contact">
            Get Started Today
          </Link>
        </Button>
      </header>

      {/* Hero Section - matching link-kit.com exactly */}
      <main className="flex flex-col items-center px-6 pt-16 pb-12 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight mb-8 max-w-4xl">
            The software toolkit for design
            <span className="block">conscious teams.</span>
          </h1>
          
          <Button 
            size="lg"
            className="bg-gray-800 hover:bg-gray-900 text-white rounded-lg px-8 py-4 text-lg font-medium transition-colors"
            asChild
          >
            <Link to="/contact">
              Get Started Today
            </Link>
          </Button>
        </div>

        {/* Device Mockup - iPhone like link-kit.com */}
        <div className="w-full max-w-lg mt-16 relative">
          <div className="relative mx-auto" style={{ transform: 'perspective(1000px) rotateX(15deg) rotateY(-15deg)' }}>
            {/* iPhone Frame */}
            <div className="bg-black rounded-[3rem] p-2 shadow-2xl">
              <div className="bg-white rounded-[2.5rem] overflow-hidden aspect-[9/19.5]">
                {/* iPhone Notch */}
                <div className="relative bg-black h-8 rounded-b-2xl mx-auto w-32 mt-2"></div>
                
                {/* App Content */}
                <div className="p-6 bg-gray-900 text-white h-full">
                  <div className="mb-8">
                    <h2 className="text-white font-bold text-xl mb-2">DESIGNKIT</h2>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      CREATIVE TOOLS
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      Professional design software for modern creative teams. 
                      Streamline your workflow with our comprehensive toolkit.
                    </p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
                      Explore Tools
                    </button>
                  </div>
                  
                  {/* Profile Image */}
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&h=980&q=80"
                      alt="Design workspace"
                      className="w-full h-48 object-cover rounded-xl"
                    />
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-sm font-medium">Latest Project</div>
                      <div className="text-xs text-gray-300">Design System 2024</div>
                    </div>
                  </div>
                  
                  {/* Bottom Navigation Icons */}
                  <div className="absolute bottom-8 left-6 right-6 flex justify-between">
                    <div className="w-8 h-8 bg-gray-700 rounded-lg"></div>
                    <div className="w-8 h-8 bg-gray-700 rounded-lg"></div>
                    <div className="w-8 h-8 bg-gray-700 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Value Proposition Section - like link-kit.com's bottom text */}
      <section className="px-6 py-20 max-w-4xl mx-auto text-center">
        <p className="text-2xl md:text-3xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Built by designers, for you. DesignKit is here to elevate your creative process 
          in the most efficient way possible, helping you and your team stand out digitally.
        </p>
      </section>

      {/* Features Gallery Section */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Everything you need to design better
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional tools and workflows that adapt to your team's creative process.
            </p>
          </div>
          
          {/* Feature Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Smart Collaboration",
                description: "Real-time design collaboration with your team, anywhere in the world.",
                image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&h=980&q=80"
              },
              {
                title: "Design Systems",
                description: "Build and maintain consistent design systems that scale with your organization.",
                image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1474&h=980&q=80"
              },
              {
                title: "Workflow Automation",
                description: "Automate repetitive tasks and focus on what matters most - creating.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1415&h=980&q=80"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-black mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scrolling Text Section / Testimonials */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Trusted by creative teams worldwide
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of designers and teams who've transformed their workflow.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "DesignKit transformed how our team collaborates. We're 3x more productive and our designs are more consistent than ever.",
                author: "Sarah Chen",
                role: "Design Director at TechFlow",
                avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&h=387&q=80"
              },
              {
                quote: "The design system features saved us months of work. Our entire component library was built in weeks, not months.",
                author: "Marcus Rodriguez",
                role: "Lead Designer at InnovateCorp",
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&h=387&q=80"
              },
              {
                quote: "Finally, tools that understand how designers actually work. The learning curve was zero and the impact was immediate.",
                author: "Emma Thompson",
                role: "Senior UX Designer at CreativeSpace",
                avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&h=387&q=80"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
                <div className="mb-6">
                  <svg className="w-8 h-8 text-gray-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                  </svg>
                  <p className="text-gray-700 leading-relaxed italic">
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
                    <div className="font-semibold text-black">
                      {testimonial.author}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: "50K+", label: "Active Users", desc: "Worldwide" },
              { number: "1M+", label: "Projects Created", desc: "And counting" },
              { number: "99.9%", label: "Uptime", desc: "Reliable platform" },
              { number: "24/7", label: "Support", desc: "When you need it" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl sm:text-5xl font-bold text-black mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-black mb-2">
                  {stat.label}
                </div>
                <div className="text-gray-600 text-sm">
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
            Ready to transform your
            <span className="block">design process?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Join thousands of design teams who are already using DesignKit to create better designs, faster.
          </p>
          <Button 
            size="lg"
            className="bg-gray-800 hover:bg-gray-900 text-white rounded-lg px-8 py-4 text-lg font-medium transition-colors"
            asChild
          >
            <Link to="/contact">
              Start Your Free Trial
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">designkit.</h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Professional design software built for modern creative teams. 
                Streamline your workflow and create better designs, together.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">tw</span>
                </div>
                <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">in</span>
                </div>
                <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">gh</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link to="/integrations" className="hover:text-white transition-colors">Integrations</Link></li>
                <li><Link to="/changelog" className="hover:text-white transition-colors">Changelog</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link to="/projects" className="hover:text-white transition-colors">Projects</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 DesignKit. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400 mt-4 sm:mt-0">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
