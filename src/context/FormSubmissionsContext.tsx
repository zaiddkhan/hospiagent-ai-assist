
import { createContext, useState, useContext, ReactNode } from 'react';
import { ContactFormData } from '@/components/DemoSheet';

interface FormSubmissionsContextType {
  formSubmissions: ContactFormData[];
  addSubmission: (submission: Omit<ContactFormData, 'timestamp'>) => void;
}

const FormSubmissionsContext = createContext<FormSubmissionsContextType | undefined>(undefined);

export const FormSubmissionsProvider = ({ children }: { children: ReactNode }) => {
  const [formSubmissions, setFormSubmissions] = useState<ContactFormData[]>([]);

  const addSubmission = (submission: Omit<ContactFormData, 'timestamp'>) => {
    const newSubmission = {
      ...submission,
      timestamp: new Date().toLocaleString()
    };
    
    setFormSubmissions(prev => [...prev, newSubmission]);
  };

  return (
    <FormSubmissionsContext.Provider value={{ formSubmissions, addSubmission }}>
      {children}
    </FormSubmissionsContext.Provider>
  );
};

export const useFormSubmissions = () => {
  const context = useContext(FormSubmissionsContext);
  if (context === undefined) {
    throw new Error('useFormSubmissions must be used within a FormSubmissionsProvider');
  }
  return context;
};
