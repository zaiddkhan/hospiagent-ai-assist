
import { Award, TrendingUp, Hospital, Doctor, Shield } from "lucide-react";

const AboutUsSection = () => {
  return (
    <section id="about" className="section-padding bg-accent">
      <div className="container-custom">
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
            <p className="text-gray-700">
              HospiAgent is revolutionizing healthcare delivery across India by developing AI assistants that tackle the critical challenges facing our doctors. In a country with just 64 doctors per 100,000 people (compared to the global average of 150), where physicians routinely see 100+ patients daily and spend over two additional hours on paperwork, burnout has reached crisis levels affecting 60% of medical professionals.
            </p>
            <p className="text-gray-700">
              We understand that doctors should be doctors, not administrators. Our suite of 10 intelligently prioritized AI agents works seamlessly across the physician workflow, starting with our flagship Clinical Scribe that converts patient conversations into structured documentation, and our Practice Manager that handles appointments, billing, and inventory without human intervention.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-hospi-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
              <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
              <div className="relative">
                <img
                  src="https://img.freepik.com/free-vector/doctors-concept-illustration_114360-1515.jpg"
                  alt="Indian Doctors with AI Assistant"
                  className="rounded-xl shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-md">
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
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-accent rounded-lg p-3 mr-4">
                <Doctor className="h-6 w-6 text-hospi-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Immediate Impact</h3>
            </div>
            <p className="text-gray-700">
              Our solutions can reduce diagnostic errors by up to 30%, dramatically decrease documentation burden, and create more time for what matters most: patient care.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
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

        <div className="bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-center mb-6">
            <div className="bg-accent rounded-lg p-3 mr-4">
              <Award className="h-8 w-8 text-hospi-500" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900">Our Mission</h3>
          </div>
          <p className="text-gray-700 mb-6">
            HospiAgent isn't just creating software; we're building the essential companions that will help India's doctors practice at their best. By reducing administrative burden, enhancing clinical decision-making, and optimizing practice efficiency, we're transforming healthcare delivery across the nation.
          </p>
          <p className="text-gray-700">
            Join us in our mission to empower every Indian doctor with AI assistants that save time, reduce errors, and ultimately improve patient outcomes from metropolitan centers to the most remote villages. Together, we're creating a healthcare system where technology handles the routine so doctors can focus on healing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
