import { useState } from "react";

export const useResumeDownload = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [showDownload, setShowDownload] = useState(false);

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
        setShowDownload(true);
      } else {
        console.error('Form submission failed:', response.status);
        // Still show download on error for user experience
        setShowDownload(true);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Still show download on error for user experience
      setShowDownload(true);
    }
  };

  const downloadResume = () => {
    const resumeContent = `Michael Anthony
Austin, TX | mikeeanthony@gmail.com
PMP | MBA | Project & Program Management | ServiceNow | Workflow Automation | KPI Dashboards

CERTIFICATIONS
Project Management Professional (PMP), 2024
Lean Six Sigma Green Belt, 2024
ServiceNow Certified System Administrator (CSA), 2025
Associate ServiceNow Implementer (Badge), 2025
CompTIA Network+, Security+ (renewing 2025)

EXPERIENCE
US Dept. of the Treasury, Internal Revenue Service — Tax Examiner
Austin, TX | Dec 2024 – Present
- Processed 460+ tax forms monthly, meeting strict federal standards for accuracy and audit-readiness.
- Maintained system records in line with IRS regulations and privacy standards.
- Applied project-level tracking to streamline intake and throughput.

Stage 4 Solutions @ VMware — Operations Manager
Remote | Apr 2023 – Nov 2023
- Led 3 large-scale platform integrations; improved efficiency by 25%, saving $100K.
- Coordinated cross-functional plans across 50+ stakeholders using ClickUp and Airtable.
- Managed vendor deliverables and contracts, ensuring SLA compliance.
- Created and maintained KPI dashboards for performance visibility.

Thales Group — Global Marketing Operations Manager
Austin, TX | Jan 2022 – Jan 2023
- Managed agile-based improvements to global reporting process, cutting delays by 30%.
- Integrated PowerBI dashboards with BigQuery to monitor campaign operations.
- Conducted cross-team requirements gathering and implementation.

Sphere Consulting — Marketing Ops & Digital Transformation
Remote | Sep 2020 – Dec 2021
- Delivered lead gen process and platform migration within $100K budget.
- Managed SEO, analytics, and content operations using Jira and Google Workspace.
- Served as project lead on podcast production and reporting framework.

EDUCATION
Georgia Tech — M.S. Data Analytics (Coursework)
University of Redlands — M.B.A. Business Administration
Virginia Tech — B.A. English`;
    
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Michael_Anthony_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    setIsDialogOpen(false);
    setShowDownload(false);
  };

  return {
    isDialogOpen,
    setIsDialogOpen,
    showDownload,
    handleFormSubmit,
    downloadResume
  };
};