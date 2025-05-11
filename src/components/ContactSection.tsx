
import { useState } from 'react';

const ContactSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Get Early Access
          </h2>
          <p className="text-lg text-gray-600">
            Join our waiting list to be among the first to experience HospiAgent's AI assistants.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
          {isLoading && (
            <div className="flex justify-center items-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-hospi-500"></div>
            </div>
          )}
          
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfO4pIwXt8XhDD48YcyOac9bLDv9enCVAnrTVgQ9D1zutrw7g/viewform?embedded=true"
            width="100%"
            height="720"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            onLoad={handleIframeLoad}
            style={{ display: isLoading ? 'none' : 'block' }}
            title="HospiAgent Early Access Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
