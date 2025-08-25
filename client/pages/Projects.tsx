import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  const projects = [
    {
      title: "TechFlow Design System",
      client: "TechFlow Inc.",
      category: "Design System",
      description: "Complete design system overhaul for a fintech startup, including component library, design tokens, and documentation.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1474&h=842&q=80",
      tags: ["Design System", "Component Library", "Documentation"],
      results: ["40% faster development", "95% design consistency", "8 teams onboarded"]
    },
    {
      title: "StreamlineUX Platform",
      client: "StreamlineUX",
      category: "SaaS Platform",
      description: "End-to-end redesign of a collaboration platform used by over 100,000 designers worldwide.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1415&h=842&q=80",
      tags: ["UX Design", "SaaS", "User Research"],
      results: ["25% increase in user engagement", "50% reduction in support tickets", "4.8/5 user satisfaction"]
    },
    {
      title: "CreativeSpace Mobile App",
      client: "CreativeSpace",
      category: "Mobile App",
      description: "Native mobile app design for creative professionals to manage projects and collaborate on the go.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&h=842&q=80",
      tags: ["Mobile Design", "iOS", "Android"],
      results: ["200K+ downloads in 6 months", "4.7 App Store rating", "30% daily active users"]
    },
    {
      title: "InnovateCorp Branding",
      client: "InnovateCorp",
      category: "Brand Identity",
      description: "Complete brand identity and digital presence for a growing technology consultancy.",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=1364&h=842&q=80",
      tags: ["Brand Identity", "Logo Design", "Website"],
      results: ["300% increase in brand recognition", "150% more qualified leads", "Award-winning design"]
    },
    {
      title: "DataViz Dashboard Suite",
      client: "DataViz Pro",
      category: "Data Visualization",
      description: "Advanced dashboard interfaces for complex data visualization and analytics platform.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&h=842&q=80",
      tags: ["Data Visualization", "Dashboard", "Analytics"],
      results: ["60% faster data insights", "85% user adoption rate", "Reduced training time by 50%"]
    },
    {
      title: "EcoCommerce Platform",
      client: "EcoCommerce",
      category: "E-commerce",
      description: "Sustainable e-commerce platform design focused on environmental impact and user experience.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&h=842&q=80",
      tags: ["E-commerce", "Sustainability", "UX/UI"],
      results: ["35% conversion rate increase", "2M+ products sold", "Carbon-neutral certification"]
    }
  ];

  const categories = ["All", "Design System", "SaaS Platform", "Mobile App", "Brand Identity", "Data Visualization", "E-commerce"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="px-4 sm:px-6 pt-8 sm:pt-16 pb-12 sm:pb-20 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6 sm:mb-8">
            Projects that drive
            <span className="block">real results.</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-brand-600 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successful design projects that have transformed businesses and delighted users across industries.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant={category === "All" ? "default" : "secondary"}
                className={`px-4 py-2 cursor-pointer transition-colors ${
                  category === "All" 
                    ? "bg-brand-800 text-white hover:bg-brand-900" 
                    : "bg-brand-100 text-brand-700 hover:bg-brand-200"
                }`}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 sm:px-6 pb-12 sm:pb-20 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-brand-100 hover:shadow-xl transition-all duration-300">
                {/* Project Image */}
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Project Content */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="bg-brand-100 text-brand-700">
                      {project.category}
                    </Badge>
                    <span className="text-sm text-brand-500">{project.client}</span>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-brand-800 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-brand-600 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 bg-brand-50 text-brand-600 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Results */}
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide">
                      Key Results
                    </h4>
                    <ul className="space-y-1">
                      {project.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="text-brand-600 text-sm flex items-center">
                          <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-brand-200 text-brand-700 hover:bg-brand-50 group-hover:bg-brand-800 group-hover:text-white group-hover:border-brand-800 transition-all"
                  >
                    View Case Study
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-20 bg-brand-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Proven Impact
            </h2>
            <p className="text-lg sm:text-xl text-brand-600 max-w-2xl mx-auto">
              Our work speaks for itself through measurable results and client success.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {[
              { number: "150+", label: "Projects Completed", desc: "Across various industries" },
              { number: "98%", label: "Client Satisfaction", desc: "Based on project reviews" },
              { number: "2.5M+", label: "Users Impacted", desc: "Through our design work" },
              { number: "45%", label: "Avg. Performance Increase", desc: "In key metrics post-launch" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-brand-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-foreground mb-2">
                  {stat.label}
                </div>
                <div className="text-brand-600 text-sm">
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-20 bg-brand-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
            Ready to start your next project?
          </h2>
          <p className="text-xl text-brand-100 mb-8 sm:mb-12 max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life and achieve your business goals.
          </p>
          <Button 
            size="lg"
            className="bg-white text-brand-900 hover:bg-brand-50 rounded-lg px-8 py-4 text-lg font-medium transition-colors"
            asChild
          >
            <a href="/contact">
              Start a Project
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
