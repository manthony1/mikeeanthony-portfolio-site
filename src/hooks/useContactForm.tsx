import { useState } from 'react';

export const useContactForm = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });
      
      setShowSuccess(true);
      
      // Reset form and close dialog after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
        setIsDialogOpen(false);
        form.reset();
      }, 3000);
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