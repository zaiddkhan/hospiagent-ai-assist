
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const HeroSection = () => {
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfO4pIwXt8XhDD48YcyOac9bLDv9enCVAnrTVgQ9D1zutrw7g/viewform";

  return (
    <div className="bg-gradient-to-br from-white to-accent py-16 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              AI Agents for <span className="text-hospi-600">New Age Doctors and Healthcare Professionals</span>
            </h1>
            <p className="text-xl text-teal-600 font-medium italic">
              Using AI agents to make Indian healthcare more consumer friendly
            </p>
            <p className="text-xl text-gray-700">
              Reduce your administrative burden, improve clinical workflows, and spend more quality time with patients using our specialized AI agents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                className="bg-hospi-500 hover:bg-hospi-600 h-12 px-8 text-base"
                onClick={() => window.open(googleFormUrl, '_blank')}
              >
                Get Early Access <ExternalLink className="ml-1" size={16} />
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative w-full max-w-lg">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
              <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-hospi-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
              <div className="relative">
                <img
                  src="https://img.freepik.com/free-vector/doctors-concept-illustration_114360-1515.jpg"
                  alt="New Age Indian Doctor with AI Agent"
                  className="rounded-xl shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
