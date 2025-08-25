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
    </div>
  );
}
