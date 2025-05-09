
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="col-span-1">
            <div className="mb-4">
              <a href="/" className="flex items-center">
                <span className="text-2xl font-bold text-white">
                  Hospi<span className="text-teal-400">Agent</span>
                </span>
              </a>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              AI assistants designed specifically for Indian doctors to reduce administrative burden, improve clinical outcomes, and enhance patient care.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#agents" className="text-gray-400 hover:text-white transition-colors">AI Agents</a></li>
              <li><a href="#benefits" className="text-gray-400 hover:text-white transition-colors">Benefits</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-teal-400 mr-2 mt-0.5" />
                <span className="text-gray-400">
                  Kamala Mills<br />
                  Mumbai
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-teal-400 mr-2" />
                <a href="tel:+918428316119" className="text-gray-400 hover:text-white">
                  +91 8428 316119
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-teal-400 mr-2" />
                <a href="mailto:Aayushanand98@gmail.com" className="text-gray-400 hover:text-white">
                  Aayushanand98@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} HospiAgent. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
