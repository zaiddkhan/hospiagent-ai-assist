
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { useFormSubmissions } from '@/context/FormSubmissionsContext';

// Form schema for validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  specialty: z.string().min(2, { message: "Please enter your medical specialty" }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { addSubmission } = useFormSubmissions();

  // Initialize form with react-hook-form and zod validation
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      specialty: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Store the submission in our context
      addSubmission(values);
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("Thank you for your interest!", {
        description: "We'll be in touch soon about early access to HospiAgent."
      });
      
      // Reset the form after successful submission
      form.reset();
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
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">Full Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Dr. Rajesh Kumar" 
                        {...field} 
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">Email Address</FormLabel>
                    <FormControl>
                      <Input 
                        type="email"
                        placeholder="doctor@example.com" 
                        {...field}
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="specialty"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">Medical Specialty</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="General Physician, Cardiology, etc." 
                        {...field}
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full bg-hospi-500 hover:bg-hospi-600 h-12 mt-4"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processing..." : "Request Early Access"}
              </Button>
            </form>
          </Form>
          
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
