
import { Award, TrendingUp, Hospital, Shield, Stethoscope, Clock, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutUsSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="section-padding bg-accent relative">
      {/* Top Button */}
      <div className="absolute top-0 left-0 right-0 flex justify-center -mt-6">
        <Button 
          onClick={scrollToContact}
          className="bg-hospi-500 hover:bg-hospi-600 shadow-lg text-white px-8 py-6 h-auto rounded-full text-lg font-medium"
        >
          Join Our Mission
        </Button>
      </div>
      
      <div className="container-custom pt-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            About Us: HospiAgent
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Liberating Indian Doctors from Burnout Through Intelligent AI Companions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              HospiAgent is revolutionizing healthcare delivery across India by developing AI assistants that tackle the critical challenges facing our doctors. In a country with just 64 doctors per 100,000 people (compared to the global average of 150), where physicians routinely see 100+ patients daily and spend over two additional hours on paperwork, burnout has reached crisis levels affecting 60% of medical professionals.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We understand that doctors should be doctors, not administrators. Our suite of 10 intelligently prioritized AI agents works seamlessly across the physician workflow, starting with our flagship Clinical Scribe that converts patient conversations into structured documentation, and our Practice Manager that handles appointments, billing, and inventory without human intervention.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-hospi-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
              <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
              <div className="relative">
                <img
                  src="https://img.freepik.com/free-vector/doctors-concept-illustration_114360-1515.jpg"
                  alt="Indian Doctors with AI Assistant"
                  className="rounded-xl shadow-lg object-cover border-4 border-white"
                />
                <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-full shadow-lg">
                  <Star className="h-10 w-10 text-hospi-500" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-md transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="bg-accent rounded-lg p-3 mr-4">
                <Hospital className="h-6 w-6 text-hospi-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">India's Healthcare Reality</h3>
            </div>
            <p className="text-gray-700">
              Built specifically for India's healthcare challenges, from urban hospital chaos to rural care gaps, where specialist shortages reach 80% in community health centers.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="bg-accent rounded-lg p-3 mr-4">
                <Stethoscope className="h-6 w-6 text-hospi-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Immediate Impact</h3>
            </div>
            <p className="text-gray-700">
              Our solutions can reduce diagnostic errors by up to 30%, dramatically decrease documentation burden, and create more time for what matters most: patient care.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="bg-accent rounded-lg p-3 mr-4">
                <TrendingUp className="h-6 w-6 text-hospi-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Market Ready</h3>
            </div>
            <p className="text-gray-700">
              97% of Indian doctors are eager to adopt AI solutions, driving a projected 40% CAGR in healthcare AI to reach $1.6 billion by 2025.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-hospi-50 to-teal-50 p-8 rounded-xl shadow-md border border-hospi-100">
          <div className="flex items-center mb-6">
            <div className="bg-white rounded-lg p-3 mr-4 shadow-sm">
              <Award className="h-8 w-8 text-hospi-500" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900">Our Mission</h3>
          </div>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            HospiAgent isn't just creating software; we're building the essential companions that will help India's doctors practice at their best. By reducing administrative burden, enhancing clinical decision-making, and optimizing practice efficiency, we're transforming healthcare delivery across the nation.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Join us in our mission to empower every Indian doctor with AI assistants that save time, reduce errors, and ultimately improve patient outcomes from metropolitan centers to the most remote villages. Together, we're creating a healthcare system where technology handles the routine so doctors can focus on healing.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Core Values</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-hospi-50 rounded-full p-2 mr-3 mt-1">
                  <Users className="h-5 w-5 text-hospi-500" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Doctor-Centered Design</h4>
                  <p className="text-gray-600">Every feature we build starts with understanding the real challenges Indian doctors face daily.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-hospi-50 rounded-full p-2 mr-3 mt-1">
                  <Shield className="h-5 w-5 text-hospi-500" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Data Privacy & Security</h4>
                  <p className="text-gray-600">We implement the highest standards of data protection to maintain doctor and patient confidentiality.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-hospi-50 rounded-full p-2 mr-3 mt-1">
                  <Clock className="h-5 w-5 text-hospi-500" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Time-Saving Innovation</h4>
                  <p className="text-gray-600">Every minute saved through our AI solutions is a minute returned to patient care.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <img 
              src="https://img.freepik.com/free-vector/doctors-concept-illustration_114360-1465.jpg" 
              alt="Healthcare professionals" 
              className="rounded-lg shadow-md max-h-80 object-cover" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
