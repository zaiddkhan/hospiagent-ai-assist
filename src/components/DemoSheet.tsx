
import { useState } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

// Type for contact form data
export interface ContactFormData {
  name: string;
  email: string;
  specialty: string;
  timestamp: string;
}

interface DemoSheetProps {
  isOpen: boolean;
  onClose: () => void;
  formSubmissions: ContactFormData[];
}

export const DemoSheet = ({ isOpen, onClose, formSubmissions }: DemoSheetProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <SheetContent className="sm:max-w-md md:max-w-lg">
        <SheetHeader>
          <SheetTitle>Contact Form Submissions</SheetTitle>
        </SheetHeader>
        
        <div className="mt-6">
          {formSubmissions.length === 0 ? (
            <div className="text-center py-6 text-gray-500">
              No submissions yet. When users fill out the contact form, their submissions will appear here.
            </div>
          ) : (
            <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
              {formSubmissions.map((submission, index) => (
                <div 
                  key={index}
                  className="border border-gray-200 rounded-lg p-4 shadow-sm"
                >
                  <p><span className="font-medium">Name:</span> {submission.name}</p>
                  <p><span className="font-medium">Email:</span> {submission.email}</p>
                  <p><span className="font-medium">Specialty:</span> {submission.specialty}</p>
                  <p className="text-xs text-gray-500 mt-2">{submission.timestamp}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="mt-6">
          <Button 
            className="w-full"
            variant="outline"
            onClick={onClose}
          >
            Close
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
