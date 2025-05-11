
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const ContactSection = () => {
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfO4pIwXt8XhDD48YcyOac9bLDv9enCVAnrTVgQ9D1zutrw7g/viewform";
  
  const openGoogleForm = () => {
    window.open(googleFormUrl, '_blank');
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Get Early Access
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join our waiting list to be among the first to experience HospiAgent's AI agents.
          </p>
          
          <Button 
            className="bg-hospi-500 hover:bg-hospi-600 h-12 px-8 text-base"
            onClick={openGoogleForm}
          >
            Get Early Access <ExternalLink className="ml-1" size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
