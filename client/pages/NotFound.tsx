import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import MinimalHeader from "@/components/MinimalHeader";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white">
      <MinimalHeader />
      <div className="flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-black mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">Page not found</p>
          <Button
            variant="secondary"
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg px-6 py-2.5 font-medium transition-colors border-0"
            asChild
          >
            <Link to="/">Return Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
