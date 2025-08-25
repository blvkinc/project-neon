import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import BeautifulDesignsCarousel from "@/components/BeautifulDesignsCarousel";

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
          <Link to="/contact">Get Started Today</Link>
        </Button>
      </header>

      {/* Hero Section */}
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
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>

        {/* Device Mockup */}
        <div className="w-full max-w-lg mt-16 relative">
          <div
            className="relative mx-auto"
            style={{
              transform: "perspective(1000px) rotateX(15deg) rotateY(-15deg)",
            }}
          >
            <div className="bg-black rounded-[3rem] p-2 shadow-medium">
              <div className="bg-white rounded-[2.5rem] overflow-hidden aspect-[9/19.5]">
                <div className="relative bg-black h-8 rounded-b-2xl mx-auto w-32 mt-2"></div>
                <div className="p-6 bg-gray-900 text-white h-full">
                  <div className="mb-8">
                    <h2 className="text-white font-bold text-xl mb-2">
                      DESIGNKIT
                    </h2>
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
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&h=980&q=80"
                      alt="Design workspace"
                      className="w-full h-48 object-cover rounded-xl"
                    />
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-sm font-medium">Latest Project</div>
                      <div className="text-xs text-gray-300">
                        Design System 2024
                      </div>
                    </div>
                  </div>
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

      {/* Built by designers section */}
      <section className="px-6 py-20 max-w-4xl mx-auto text-center">
        <p className="text-2xl md:text-3xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Built by designers, for you. DesignKit is here to elevate your
          creative process in the most efficient way possible, helping you and
          your team stand out digitally.
        </p>
      </section>

      {/* Beautiful Designed Carousel */}
      <BeautifulDesignsCarousel />

      {/* Intuitive designs section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Intuitive designs.
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple, elegant, & beautiful. We've designed your link bio for the
              digital age.
            </p>
          </div>

          {/* Design showcase grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Minimal Portfolio",
                image:
                  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=928&h=1236&q=80",
                category: "Portfolio",
              },
              {
                title: "Creative Agency",
                image:
                  "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=928&h=1236&q=80",
                category: "Business",
              },
              {
                title: "Personal Brand",
                image:
                  "https://images.unsplash.com/photo-1618556400923-80c7cd2fb9fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=928&h=1236&q=80",
                category: "Personal",
              },
            ].map((design, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={design.image}
                      alt={design.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-2">
                      {design.category}
                    </div>
                    <h3 className="text-lg font-semibold text-black">
                      {design.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join our community section */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Join our community.
          </h2>
          <p className="text-xl text-gray-600">Make it yours.</p>
        </div>

        {/* Community showcase */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              image:
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&h=980&q=80",
              title: "COMMUNITY",
            },
            {
              image:
                "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&h=980&q=80",
              title: "COLLABORATION",
            },
            {
              image:
                "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&h=980&q=80",
              title: "CREATIVITY",
            },
          ].map((item, index) => (
            <div key={index} className="relative group cursor-pointer">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Frequently
              <span className="block">asked questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "What is DesignKit?",
                answer:
                  "DesignKit is a comprehensive software toolkit designed for modern creative teams to streamline their design process and enhance collaboration.",
              },
              {
                question: "How does the collaboration feature work?",
                answer:
                  "Our real-time collaboration tools allow team members to work together on projects simultaneously, with live updates and seamless communication features.",
              },
              {
                question: "Can I customize my design templates?",
                answer:
                  "Yes, all templates are fully customizable to match your brand and creative vision. You have complete control over colors, fonts, layouts, and content.",
              },
              {
                question: "Is there a free trial available?",
                answer:
                  "We offer a 14-day free trial with full access to all features so you can experience the power of DesignKit before committing.",
              },
              {
                question: "What kind of support do you provide?",
                answer:
                  "We provide 24/7 customer support through chat, email, and phone, plus comprehensive documentation and video tutorials.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-100 p-6 shadow-soft"
              >
                <h3 className="text-lg font-semibold text-black mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Sign up today &<span className="block">claim your Link Kit.</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Start building your perfect design toolkit and join thousands of
            creative professionals.
          </p>
          <Button
            size="lg"
            className="bg-white text-gray-900 hover:bg-gray-100 rounded-lg px-8 py-4 text-lg font-medium transition-colors"
            asChild
          >
            <Link to="/contact">Claim your kit</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-gray-900 text-white border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">designkit.</h3>
              <p className="text-gray-400 mb-6 max-w-md">
                Professional design software built for modern creative teams.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-300">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link
                    to="/features"
                    className="hover:text-white transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pricing"
                    className="hover:text-white transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/templates"
                    className="hover:text-white transition-colors"
                  >
                    Templates
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-300">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link
                    to="/about"
                    className="hover:text-white transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/careers"
                    className="hover:text-white transition-colors"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 DesignKit. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400 mt-4 sm:mt-0">
              <Link
                to="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
