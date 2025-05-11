
import { Clock, TrendingUp, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: <Clock className="h-10 w-10 text-teal-500" />,
    title: "Save Precious Time",
    description: "Eliminate hours of documentation and administrative work every day with AI-powered automation."
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-teal-500" />,
    title: "Improve Clinical Outcomes",
    description: "Make better-informed decisions with AI that helps analyze data and spotlights critical information."
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-teal-500" />,
    title: "Reduce Medical Errors",
    description: "Minimize documentation errors and oversights with AI assistants designed to catch discrepancies."
  }
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            How HospiAgent Helps
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our AI assistants are designed to address the unique challenges faced by Indian healthcare providers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="inline-flex items-center justify-center rounded-full bg-teal-100 p-3 mb-5">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
