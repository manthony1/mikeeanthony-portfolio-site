import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-8">
          <Button variant="ghost" className="mb-4" asChild>
            <a href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </a>
          </Button>
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground">Last updated: July 27, 2025</p>
        </div>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-foreground leading-relaxed mb-6">
            This Privacy Policy describes how information is collected, used, and shared when you visit or interact with services provided through mikeeanthony.com ("Site") and associated applications, including those that use the LinkedIn API.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Information We Collect</h2>
          <p className="text-foreground leading-relaxed mb-4">We may collect the following information:</p>
          <ul className="list-disc pl-6 mb-6 text-foreground">
            <li className="mb-2"><strong>Information you provide:</strong> When using forms or tools on our site or app, we may collect personal information such as your name, email, resume, or job preferences.</li>
            <li className="mb-2"><strong>LinkedIn data:</strong> If you connect your LinkedIn account, we may access data permitted under the LinkedIn API, including but not limited to your name, profile photo, headline, email address, and work history, in accordance with your authorization and LinkedIn's API Terms of Use.</li>
            <li className="mb-2"><strong>Usage data:</strong> We may collect information about your use of the Site or app, such as browser type, IP address, pages visited, and time spent on the Site.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="text-foreground leading-relaxed mb-4">We use the collected data to:</p>
          <ul className="list-disc pl-6 mb-6 text-foreground">
            <li className="mb-2">Operate and improve the functionality of our Site and services</li>
            <li className="mb-2">Personalize your experience</li>
            <li className="mb-2">Deliver features related to job matching, resume analysis, or AI-powered tools</li>
            <li className="mb-2">Provide support and communicate with you about service updates</li>
            <li className="mb-2">Comply with legal obligations and LinkedIn's API terms</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. LinkedIn Data and Compliance</h2>
          <p className="text-foreground leading-relaxed mb-4">
            We only use LinkedIn data as explicitly allowed by you and as permitted under the LinkedIn API Terms of Use. We do not:
          </p>
          <ul className="list-disc pl-6 mb-6 text-foreground">
            <li className="mb-2">Store your LinkedIn login credentials</li>
            <li className="mb-2">Use LinkedIn data for unauthorized advertising or sharing</li>
            <li className="mb-2">Allow third-party access to your LinkedIn data without your explicit consent</li>
          </ul>
          <p className="text-foreground leading-relaxed mb-6">
            We will delete any stored LinkedIn data upon your request or in accordance with LinkedIn's data retention requirements.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Data Sharing</h2>
          <p className="text-foreground leading-relaxed mb-4">We do not sell your personal data. We may share your information:</p>
          <ul className="list-disc pl-6 mb-6 text-foreground">
            <li className="mb-2">With trusted service providers who assist in delivering our services</li>
            <li className="mb-2">As required by law or legal processes</li>
            <li className="mb-2">To protect rights, safety, or prevent fraud or abuse</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Data Security</h2>
          <p className="text-foreground leading-relaxed mb-6">
            We take reasonable technical and organizational measures to protect your data from unauthorized access, alteration, or destruction. However, no method of transmission over the internet is 100% secure.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Your Rights</h2>
          <p className="text-foreground leading-relaxed mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 mb-6 text-foreground">
            <li className="mb-2">Request access to or deletion of your data</li>
            <li className="mb-2">Withdraw consent to LinkedIn access at any time</li>
            <li className="mb-2">Contact us with any questions or concerns</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. Changes to This Policy</h2>
          <p className="text-foreground leading-relaxed mb-6">
            We may update this Privacy Policy from time to time. The latest version will always be available at mikeeanthony.com/privacy.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">8. Contact</h2>
          <p className="text-foreground leading-relaxed mb-4">For privacy-related inquiries, please contact:</p>
          <p className="text-foreground leading-relaxed mb-2">
            <strong>Mike E. Anthony</strong><br />
            📧 <a href="mailto:privacy@mikeeanthony.com" className="text-primary hover:underline">privacy@mikeeanthony.com</a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;