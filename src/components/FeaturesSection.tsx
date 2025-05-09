
import { Clock, ShieldCheck, MessageSquare, User } from "lucide-react";

const features = [
  {
    icon: <Clock className="h-6 w-6 text-hospi-500" />,
    title: "Save Hours Daily",
    description: "AI assistants automate documentation and admin tasks, saving doctors 2-3 hours every day."
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-hospi-500" />,
    title: "Indian Healthcare Context",
    description: "Purpose-built for Indian medical practices, workflows, and healthcare systems."
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-hospi-500" />,
    title: "Multilingual Support",
    description: "Communicate with patients in their local language for better understanding and adherence."
  },
  {
    icon: <User className="h-6 w-6 text-hospi-500" />,
    title: "Patient-Centric Design",
    description: "Enhance the patient experience with smoother visits and better follow-up care."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Designed Specifically for Indian Doctors
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              HospiAgent's AI assistants understand the unique challenges of Indian healthcare - high patient volumes, multilingual needs, and limited resources.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex">
                  <div className="mr-4 mt-1">
                    <div className="p-2 bg-accent rounded-lg">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -z-10 top-1/4 left-1/4 w-1/2 h-1/2 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
            <div className="absolute -z-10 bottom-1/4 right-1/4 w-1/2 h-1/2 bg-hospi-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
            <img 
              src="https://img.freepik.com/free-vector/hospital-reception-concept-illustration_114360-8554.jpg" 
              alt="Indian doctor using AI assistant"
              className="rounded-xl shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
