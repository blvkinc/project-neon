import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function MinimalHeader() {
  return (
    <header className="w-full px-6 py-6 flex items-center justify-between max-w-6xl mx-auto">
      <Link
        to="/"
        className="text-2xl font-bold text-black hover:opacity-80 transition-opacity"
      >
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
  );
}
