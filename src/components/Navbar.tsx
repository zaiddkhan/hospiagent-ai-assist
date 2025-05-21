
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ExternalLink } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfO4pIwXt8XhDD48YcyOac9bLDv9enCVAnrTVgQ9D1zutrw7g/viewform";
  const demoUrl = "https://demohospiagent.minusonetoten.com/login";
  const newDemoUrl = "https://hospiagentscribe.minusonetoten.com"

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openEarlyAccess = () => {
    window.open(googleFormUrl, '_blank');
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const openDemo = () => {
    window.open(demoUrl, '_blank');
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const openNewDemo = () => {
     window.open(newDemoUrl, '_blank');
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="py-4 bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold text-hospi-600">
              Hospi<span className="text-teal-500">Agent</span>
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          
          <a href="#features" className="text-gray-700 hover:text-hospi-500 font-medium">Features</a>
          <a href="#agents" className="text-gray-700 hover:text-hospi-500 font-medium">AI Agents</a>
          <a href="#about" className="text-gray-700 hover:text-hospi-500 font-medium">About Us</a>
          <a href="#benefits" className="text-gray-700 hover:text-hospi-500 font-medium">Benefits</a>
          <Button 
            variant="outline"
            className="border-hospi-500 text-hospi-600 hover:bg-hospi-50" 
            onClick={openDemo}
          >
            Demo <ExternalLink className="ml-1" size={16} />
          </Button>
          <Button 
            variant="outline"
            className="border-hospi-500 text-hospi-600 hover:bg-hospi-50" 
            onClick={openNewDemo}
          >
            New Demo of Scribe Agent<ExternalLink className="ml-1" size={16} />
          </Button>
          <Button 
            className="bg-hospi-500 hover:bg-hospi-600"
            onClick={openEarlyAccess}
          >
            Get Early Access <ExternalLink className="ml-1" size={16} />
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="text-gray-700 hover:text-hospi-500 focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-5 shadow-md animate-fade-in">
          <div className="flex flex-col space-y-4">
            <div className="text-xs font-medium bg-teal-100 text-teal-800 px-2 py-1 rounded-full inline-block mb-2 self-start">For New Age Doctors of India</div>
            <a href="#features" className="text-gray-700 hover:text-hospi-500 font-medium py-2" onClick={toggleMenu}>Features</a>
            <a href="#agents" className="text-gray-700 hover:text-hospi-500 font-medium py-2" onClick={toggleMenu}>AI Agents</a>
            <a href="#about" className="text-gray-700 hover:text-hospi-500 font-medium py-2" onClick={toggleMenu}>About Us</a>
            <a href="#benefits" className="text-gray-700 hover:text-hospi-500 font-medium py-2" onClick={toggleMenu}>Benefits</a>
            <Button 
              variant="outline"
              className="border-hospi-500 text-hospi-600 hover:bg-hospi-50 w-full mb-2" 
              onClick={openDemo}
            >
              Demo <ExternalLink className="ml-1" size={16} />
            </Button>
            <Button 
              className="bg-hospi-500 hover:bg-hospi-600 w-full"
              onClick={openEarlyAccess}
            >
              Get Early Access <ExternalLink className="ml-1" size={16} />
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
