import { useState } from 'react';

export const useContactForm = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    // Convert FormData to URLSearchParams for Netlify
    const params = new URLSearchParams();
    for (const [key, value] of formData.entries()) {
      params.append(key, value.toString());
    }
    
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      });
      
      if (response.ok) {
        setShowSuccess(true);
        
        // Reset form and close dialog after 3 seconds
        setTimeout(() => {
          setShowSuccess(false);
          setIsDialogOpen(false);
          form.reset();
        }, 3000);
      } else {
        console.error('Form submission failed:', response.status);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return {
    isDialogOpen,
    setIsDialogOpen,
    showSuccess,
    handleFormSubmit
  };
};