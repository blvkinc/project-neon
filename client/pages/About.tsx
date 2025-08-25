import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";

export default function About() {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Co-Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&h=387&q=80",
      description: "Former lead designer at top tech companies with 10+ years building design systems."
    },
    {
      name: "Marcus Rodriguez",
      role: "Co-Founder & CTO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&h=387&q=80",
      description: "Full-stack engineer passionate about creating tools that empower creative teams."
    },
    {
      name: "Emma Thompson",
      role: "Head of Product",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&h=387&q=80",
      description: "Product strategist with expertise in user experience and design workflow optimization."
    },
    {
      name: "David Kim",
      role: "Lead Engineer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&h=387&q=80",
      description: "Senior developer focused on performance and scalability of design collaboration tools."
    }
  ];

  const values = [
    {
      title: "Design-First",
      description: "Every decision we make prioritizes the designer's experience and creative workflow.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v6a2 2 0 002 2h4a2 2 0 002-2V5z" />
        </svg>
      )
    },
    {
      title: "Collaboration",
      description: "We believe the best designs emerge when teams can work together seamlessly.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Innovation",
      description: "We push the boundaries of what's possible in design tooling and user experience.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="px-4 sm:px-6 pt-8 sm:pt-16 pb-12 sm:pb-20 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6 sm:mb-8">
            Building the future of
            <span className="block">design collaboration.</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-brand-600 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
            We're a team of designers and engineers on a mission to create software that amplifies creativity and streamlines the design process for teams worldwide.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-20 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 sm:mb-8">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-brand-600 leading-relaxed">
              <p>
                Founded in 2021, DesignKit emerged from a simple frustration: existing design tools were either too complex for creative workflows or too simple for professional teams.
              </p>
              <p>
                Our founders, having worked at leading design agencies and tech companies, experienced firsthand the challenges of maintaining design consistency, collaborating across teams, and scaling creative processes.
              </p>
              <p>
                Today, we're proud to serve thousands of designers, agencies, and companies worldwide, helping them create better designs faster and more collaboratively than ever before.
              </p>
            </div>
          </div>
          <div className="lg:order-first">
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-brand-100 to-brand-200 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&h=1102&q=80"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-800 rounded-2xl flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-2xl font-bold">50K+</div>
                  <div className="text-sm">Users</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-20 bg-brand-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Values
            </h2>
            <p className="text-lg sm:text-xl text-brand-600 max-w-2xl mx-auto">
              The principles that guide everything we do and every decision we make.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-brand-800 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-brand-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-20 max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet the Team
          </h2>
          <p className="text-lg sm:text-xl text-brand-600 max-w-2xl mx-auto">
            The passionate individuals behind DesignKit, working to revolutionize design collaboration.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {member.name}
              </h3>
              <p className="text-brand-800 font-medium mb-3">
                {member.role}
              </p>
              <p className="text-brand-600 text-sm leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-20 bg-brand-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
            Ready to transform your design process?
          </h2>
          <p className="text-xl text-brand-100 mb-8 sm:mb-12 max-w-2xl mx-auto">
            Join thousands of design teams who are already using DesignKit to create better designs, faster.
          </p>
          <Button 
            size="lg"
            className="bg-white text-brand-900 hover:bg-brand-50 rounded-lg px-8 py-4 text-lg font-medium transition-colors"
            asChild
          >
            <a href="/contact">
              Get Started Today
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
