
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const ContactSection = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // This is your Google Form submission URL
  // Replace this with your actual Google Form submission URL when you have it
  const googleFormUrl = 'https://docs.google.com/forms/u/0/d/e/YOUR_FORM_ID_HERE/formResponse';

  // You'll need to map your form field names to Google Form entry IDs
  // For example, if your Google Form has fields with entry.1234567890 format
  const nameEntryId = 'entry.1234567890'; // Replace with your actual entry ID
  const emailEntryId = 'entry.0987654321'; // Replace with your actual entry ID
  const specialtyEntryId = 'entry.1122334455'; // Replace with your actual entry ID

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create the form data
      const formData = new FormData();
      formData.append(nameEntryId, name);
      formData.append(emailEntryId, email);
      formData.append(specialtyEntryId, specialty);

      // To handle CORS issues, we use a no-CORS request
      // Note: This will not allow you to read the response
      await fetch(googleFormUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
      });

      toast.success("Thank you for your interest! We'll be in touch soon.", {
        description: "We'll send you information about early access to HospiAgent."
      });
      
      // Clear form fields
      setEmail('');
      setName('');
      setSpecialty('');
    } catch (error) {
      toast.error("Something went wrong", {
        description: "Please try again later or contact us directly."
      });
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
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
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Dr. Rajesh Kumar"
                required
                className="w-full"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="doctor@example.com"
                required
                className="w-full"
              />
            </div>
            
            <div>
              <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 mb-1">
                Medical Specialty
              </label>
              <Input
                id="specialty"
                type="text"
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
                placeholder="General Physician, Cardiology, etc."
                required
                className="w-full"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-hospi-500 hover:bg-hospi-600 h-12 mt-4"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Request Early Access"}
            </Button>
          </form>
          
          <p className="text-center text-xs text-gray-500 mt-6">
            By submitting this form, you agree to our Privacy Policy and Terms of Service.
            We'll only use your information to contact you about HospiAgent.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
