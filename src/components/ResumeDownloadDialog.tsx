import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Download } from "lucide-react";

interface ResumeDownloadDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  showDownload: boolean;
  onFormSubmit: (e: React.FormEvent) => void;
  onDownload: () => void;
}

const ResumeDownloadDialog = ({
  isOpen,
  onOpenChange,
  showDownload,
  onFormSubmit,
  onDownload
}: ResumeDownloadDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Download Resume</DialogTitle>
          <DialogDescription>
            Please provide your information to download the resume.
          </DialogDescription>
        </DialogHeader>
        
        {!showDownload ? (
          <form 
            name="resume-download"
            id="resume-download"
            data-netlify="true"
            onSubmit={onFormSubmit}
            className="space-y-4"
          >
            <input type="hidden" name="form-name" value="resume-download" />
            
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
              <Label htmlFor="company">Company</Label>
              <Input 
                id="company" 
                name="company" 
                type="text" 
                placeholder="Your company (optional)"
              />
            </div>
            
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        ) : (
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">Thank you! Click below to download the resume.</p>
            <Button onClick={onDownload} className="w-full">
              <Download className="h-4 w-4 mr-2" />
              Download Resume
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ResumeDownloadDialog;