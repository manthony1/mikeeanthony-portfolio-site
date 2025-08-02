import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle } from "lucide-react";

interface ContactFormDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  showSuccess: boolean;
  onFormSubmit: (e: React.FormEvent) => void;
}

const ContactFormDialog = ({
  isOpen,
  onOpenChange,
  showSuccess,
  onFormSubmit
}: ContactFormDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Get in Touch</DialogTitle>
          <DialogDescription>
            Send me a message and I'll get back to you soon.
          </DialogDescription>
        </DialogHeader>
        
        {!showSuccess ? (
          <form 
            name="contact"
            data-netlify="true"
            onSubmit={onFormSubmit}
            className="space-y-4"
          >
            <input type="hidden" name="form-name" value="contact" />
            
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input 
                id="name" 
                name="name" 
                type="text" 
                placeholder="Your full name"
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                placeholder="your.email@example.com"
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea 
                id="message" 
                name="message" 
                placeholder="Tell me about your project or inquiry (optional)"
                className="min-h-[100px]"
              />
            </div>
            
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        ) : (
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <CheckCircle className="h-12 w-12 text-green-500" />
            </div>
            <p className="text-muted-foreground">Thank you! Your message has been sent successfully.</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ContactFormDialog;