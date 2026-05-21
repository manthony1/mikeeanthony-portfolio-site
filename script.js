document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const timelineItems = document.querySelectorAll('.timeline-item');

  // Skill Filtering Logic
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      // Add active class to clicked button
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      timelineItems.forEach(item => {
        const categories = item.getAttribute('data-categories').split(',');

        if (filterValue === 'all' || categories.includes(filterValue)) {
          // Show item with animation
          item.classList.remove('hidden');
          // Small delay to allow display:block to apply before animating opacity
          setTimeout(() => {
            item.classList.remove('fade-out');
          }, 50);
        } else {
          // Hide item with animation
          item.classList.add('fade-out');
          // Wait for animation to finish before hiding element
          setTimeout(() => {
            if (item.classList.contains('fade-out')) {
              item.classList.add('hidden');
            }
          }, 400); // Matches CSS transition duration
        }
      });
    });
  });

  // Dark Mode Toggle & Cache Initialization
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');

  // Initialize icon to match the theme applied by the inline script
  if (themeIcon) {
    const activeTheme = document.documentElement.getAttribute('data-theme');
    if (activeTheme === 'dark') {
      themeIcon.textContent = 'light_mode';
    } else {
      themeIcon.textContent = 'dark_mode';
    }
  }

  if (themeToggle && themeIcon) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');

      if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        themeIcon.textContent = 'dark_mode';
        localStorage.setItem('theme', 'light');
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.textContent = 'light_mode';
        localStorage.setItem('theme', 'dark');
      }
    });
  }

  // Hooray Confetti Logic
  const hoorayBtn = document.getElementById('hoorayBtn');
  if (hoorayBtn) {
    hoorayBtn.addEventListener('click', () => {
      if (typeof confetti === 'function') {
        confetti({
          particleCount: 150, //150
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    });
  }

  // Smooth Scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 50,
          behavior: 'smooth'
        });
      }
    });
  });
  // Contact Modal Logic
  const contactBtns = [document.getElementById('contactBtn'), document.getElementById('topContactBtn')];
  const contactModal = document.getElementById('contactModal');
  const closeModalBtn = document.getElementById('closeModalBtn');

  if (contactModal && closeModalBtn) {
    // Open modal
    contactBtns.forEach(btn => {
      if (btn) {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          contactModal.classList.add('active');
        });
      }
    });

    // Close modal via button
    closeModalBtn.addEventListener('click', () => {
      contactModal.classList.remove('active');
    });

    // Close modal by clicking outside
    contactModal.addEventListener('click', (e) => {
      if (e.target === contactModal) {
        contactModal.classList.remove('active');
      }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && contactModal.classList.contains('active')) {
        contactModal.classList.remove('active');
      }
    });
  }

  // Download Modal Logic
  const heroDownloadBtn = document.getElementById('heroDownloadBtn');
  const downloadModal = document.getElementById('downloadModal');
  const closeDownloadModalBtn = document.getElementById('closeDownloadModalBtn');
  const directDownloadBtn = document.getElementById('directDownloadBtn');
  let downloadWidgetId = null;

  // Render download CAPTCHA programmatically by extracting the sitekey Netlify generates for the contact form
  const initDownloadRecaptcha = () => {
    let attempts = 0;
    const checkExist = setInterval(() => {
      attempts++;
      const contactRecaptcha = document.querySelector('#contactModal .g-recaptcha') || document.querySelector('#contactModal [data-netlify-recaptcha="true"]');
      
      if (typeof grecaptcha !== 'undefined' && contactRecaptcha && contactRecaptcha.getAttribute('data-sitekey')) {
        clearInterval(checkExist);
        const siteKey = contactRecaptcha.getAttribute('data-sitekey');
        try {
          downloadWidgetId = grecaptcha.render('download-recaptcha-container', {
            'sitekey': siteKey,
            'callback': function(response) {
              if (directDownloadBtn) {
                directDownloadBtn.classList.remove('disabled');
                directDownloadBtn.removeAttribute('aria-disabled');
              }
            },
            'expired-callback': function() {
              if (directDownloadBtn) {
                directDownloadBtn.classList.add('disabled');
                directDownloadBtn.setAttribute('aria-disabled', 'true');
              }
            }
          });
        } catch (e) {
          console.error("Failed to render download reCAPTCHA", e);
        }
      }
      
      if (attempts > 50) {
        clearInterval(checkExist);
        console.log("Download reCAPTCHA initialization timed out (expected on localhost/non-Netlify environments).");
      }
    }, 100);
  };

  if (downloadModal && closeDownloadModalBtn && heroDownloadBtn) {
    initDownloadRecaptcha();

    const resetDownloadModalState = () => {
      downloadModal.classList.remove('active');
      if (downloadWidgetId !== null && typeof grecaptcha !== 'undefined') {
        try {
          grecaptcha.reset(downloadWidgetId);
        } catch (e) {
          console.warn("reCAPTCHA reset failed", e);
        }
      }
      if (directDownloadBtn) {
        directDownloadBtn.classList.add('disabled');
        directDownloadBtn.setAttribute('aria-disabled', 'true');
      }
    };

    // Open download modal
    heroDownloadBtn.addEventListener('click', (e) => {
      e.preventDefault();
      downloadModal.classList.add('active');
    });

    // Close modal via button
    closeDownloadModalBtn.addEventListener('click', () => {
      resetDownloadModalState();
    });

    // Close modal by clicking outside
    downloadModal.addEventListener('click', (e) => {
      if (e.target === downloadModal) {
        resetDownloadModalState();
      }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && downloadModal.classList.contains('active')) {
        resetDownloadModalState();
      }
    });

    // Auto-close modal after download starts (delayed to let browser handle the click/new tab)
    if (directDownloadBtn) {
      directDownloadBtn.addEventListener('click', () => {
        setTimeout(() => {
          resetDownloadModalState();
        }, 1000);
      });
    }
  }

  // Character Counter & Basic Sanitization Logic
  const messageInput = document.getElementById('message');
  const charCount = document.getElementById('charCount');

  if (messageInput && charCount) {
    messageInput.addEventListener('input', () => {
      // Strip common SQL/XSS characters (<, >, ;, =, {, })
      const sanitizedValue = messageInput.value.replace(/[<>;={}]/g, '');
      if (messageInput.value !== sanitizedValue) {
        messageInput.value = sanitizedValue;
      }

      const remaining = 750 - messageInput.value.length;
      charCount.textContent = `${remaining} characters remaining`;

      if (remaining <= 50) {
        charCount.style.color = 'var(--sunset-orange)';
      } else {
        charCount.style.color = 'var(--silver-mist)';
      }
    });
  }

  // ==========================================================================
  // Interactive Compliance Assessment Tool
  // ==========================================================================
  const SCENARIOS = {
    mud: {
      title: "MUD Creation Assessment (30 TAC §293)",
      controls: [
        {
          id: "mud-bond",
          label: "Verify Bond Capacity limit (30 TAC §293)",
          desc: "Check if the proposed district's debt limits do not exceed legal ratio thresholds."
        },
        {
          id: "mud-dev",
          label: "Confirm Developer Financial Contribution (30% rule)",
          desc: "Verify the developer has financed at least 30% of the cost of the district facilities."
        },
        {
          id: "mud-water",
          label: "Validate Water Availability Certification",
          desc: "Ensure an engineering report certifies sufficient water supply capacity exists."
        },
        {
          id: "mud-env",
          label: "Acquire Environmental Site Clearance",
          desc: "Confirm that environmental impact reviews and site assessments are completed."
        },
        {
          id: "mud-board",
          label: "Secure Governing Board Approval",
          desc: "Obtain certified resolution from the County Commissioner's court or City Council."
        }
      ],
      recommendations: [
        {
          min: 0,
          max: 39,
          badge: "Critical Risk",
          class: "risk-level-critical",
          icon: "warning",
          text: "Critical controls missing. The MUD application cannot proceed. Compile engineering reports and secure the developer's 30% contribution agreement."
        },
        {
          min: 40,
          max: 59,
          badge: "High Risk",
          class: "risk-level-high",
          icon: "warning",
          text: "Initial requirements partially met. Ensure water capacity certifications and environmental site assessments are fully documented."
        },
        {
          min: 60,
          max: 79,
          badge: "Medium Risk",
          class: "risk-level-medium",
          icon: "info",
          text: "Most major compliance checks passed. Draft the governing board resolution and review bond capacity limits for final signatures."
        },
        {
          min: 80,
          max: 100,
          badge: "Low Risk",
          class: "risk-level-low",
          icon: "verified",
          text: "All essential SOP controls verified. MUD creation package is audit-ready. Proceed to submit the application to TCEQ."
        }
      ]
    },
    reconcile: {
      title: "Special District Financial Transparency Reconciliation",
      controls: [
        {
          id: "rec-dormancy",
          label: "Verify Dormancy Affidavit status (30 TAC §293.95)",
          desc: "Validate dormancy filing compliance and ensure correct filing forms are registered with TCEQ."
        },
        {
          id: "rec-spdpid",
          label: "Reconcile Financial filings with Comptroller SPDPID database",
          desc: "Cross-reference district financial audits and revenues with the Comptroller's public database."
        },
        {
          id: "rec-debt",
          label: "Audit Outstanding Debt & Reserve account compliance",
          desc: "Verify actual reserve ratios, bond repayment balances, and dedicated interest/sinking fund allocations."
        },
        {
          id: "rec-transparency",
          label: "Assess HB 1378 financial transparency disclosures (LGC §140.008)",
          desc: "Audit annual transparency reports and debt status information posted on the district's public website."
        },
        {
          id: "rec-cpa",
          label: "Review Annual CPA Audit report submission",
          desc: "Ensure standard CPA audit reports or filing exemptions are submitted within statutory timeframes."
        }
      ],
      recommendations: [
        {
          min: 0,
          max: 39,
          badge: "Critical Risk",
          class: "risk-level-critical",
          icon: "warning",
          text: "Critical reporting compliance checks missing. Financial reconciliation shows high risk of reporting variances. Expedite SPDPID database verification."
        },
        {
          min: 40,
          max: 59,
          badge: "High Risk",
          class: "risk-level-high",
          icon: "warning",
          text: "Initial financial checks verified. Resolve outstanding dormancy affidavit questions and verify bond debt service allocations."
        },
        {
          min: 60,
          max: 79,
          badge: "Medium Risk",
          class: "risk-level-medium",
          icon: "info",
          text: "Core reconciliations complete. Prepare final review of HB 1378 website disclosures and annual CPA audit filings."
        },
        {
          min: 80,
          max: 100,
          badge: "Low Risk",
          class: "risk-level-low",
          icon: "verified",
          text: "Financial transparency checks fully aligned with statutory guidelines. The special district reconciliation package is complete and audit-ready."
        }
      ]
    },
    it: {
      title: "IT Controls Audit (TAC 202 / NIST)",
      controls: [
        {
          id: "it-access",
          label: "Perform Access Control Reviews (NIST AC-2)",
          desc: "Verify quarterly privilege reviews and revoke inactive accounts within 24 hours."
        },
        {
          id: "it-encrypt",
          label: "Enforce Database & API Encryption",
          desc: "Verify TLS 1.3 for data in transit and AES-256 for resting data storage."
        },
        {
          id: "it-backup",
          label: "Validate Physically Separated Secure Backups (NIST CP-9)",
          desc: "Check that read-only, immutable backups are stored in a separate cloud region."
        },
        {
          id: "it-scan",
          label: "Run Weekly Vulnerability Scans",
          desc: "Scan infrastructure and container image registries, resolving critical CVEs within 7 days."
        },
        {
          id: "it-ir",
          label: "Conduct Incident Response Playbook Testing",
          desc: "Execute annual tabletop exercise with senior stakeholders and document lessons learned."
        }
      ],
      recommendations: [
        {
          min: 0,
          max: 39,
          badge: "Critical Risk",
          class: "risk-level-critical",
          icon: "warning",
          text: "System is vulnerable. Basic security hygiene controls (encryption, backups) are absent. Restrict API access and run full malware scans."
        },
        {
          min: 40,
          max: 59,
          badge: "High Risk",
          class: "risk-level-high",
          icon: "warning",
          text: "Partial security posture established. Prioritize establishing immutable offline backups and scheduling weekly CVE scans."
        },
        {
          min: 60,
          max: 79,
          badge: "Medium Risk",
          class: "risk-level-medium",
          icon: "info",
          text: "Core security controls verified. Review and update user access rights, and schedule the next incident tabletop test."
        },
        {
          min: 80,
          max: 100,
          badge: "Low Risk",
          class: "risk-level-low",
          icon: "verified",
          text: "IT general controls fully aligned with NIST framework. Maintain weekly monitoring and proceed with annual SOC 2 reporting."
        }
      ]
    }
  };

  const controlsChecklist = document.getElementById('controls-checklist');
  const scenarioTitle = document.getElementById('scenario-title');
  const statusCard = document.getElementById('statusCard');
  const riskBadge = document.getElementById('riskBadge');
  const progressCircle = document.getElementById('progressCircle');
  const progressPercent = document.getElementById('progressPercent');
  const recommendationText = document.getElementById('recommendationText');
  const recIcon = document.getElementById('recIcon');
  const scenarioBtns = document.querySelectorAll('.scenario-btn');

  let currentScenario = 'mud';
  const progressRingCircumference = 427.26;

  function updateComplianceStatus(scenarioId) {
    if (!controlsChecklist) return;
    const checkboxes = controlsChecklist.querySelectorAll('input[type="checkbox"]');
    const total = checkboxes.length;
    if (total === 0) return;
    
    let checkedCount = 0;
    checkboxes.forEach(cb => {
      if (cb.checked) checkedCount++;
    });

    const percent = Math.round((checkedCount / total) * 100);
    
    // Animate percentage count
    animatePercentText(percent);

    // Animate SVG ring
    if (progressCircle) {
      const offset = progressRingCircumference - (percent / 100) * progressRingCircumference;
      progressCircle.style.strokeDashoffset = offset;
    }

    // Determine risk category
    const scenario = SCENARIOS[scenarioId];
    if (scenario && scenario.recommendations) {
      const rec = scenario.recommendations.find(r => percent >= r.min && percent <= r.max);
      if (rec) {
        // Update risk text and badge
        if (riskBadge) riskBadge.textContent = rec.badge;
        if (recommendationText) recommendationText.textContent = rec.text;
        if (recIcon) recIcon.textContent = rec.icon;

        // Swap status card color classes
        if (statusCard) {
          statusCard.className = 'status-card ' + rec.class;
        }
      }
    }
  }

  function animatePercentText(targetValue, duration = 400) {
    if (!progressPercent) return;
    const startValue = parseInt(progressPercent.textContent) || 0;
    if (startValue === targetValue) return;

    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out quad
      const easeProgress = progress * (2 - progress);
      const currentValue = Math.round(startValue + (targetValue - startValue) * easeProgress);

      progressPercent.textContent = `${currentValue}%`;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        progressPercent.textContent = `${targetValue}%`;
      }
    }

    requestAnimationFrame(update);
  }

  function renderScenario(scenarioId) {
    if (!controlsChecklist || !SCENARIOS[scenarioId]) return;
    const scenario = SCENARIOS[scenarioId];
    
    if (scenarioTitle) scenarioTitle.textContent = scenario.title;
    
    controlsChecklist.innerHTML = '';
    
    scenario.controls.forEach(control => {
      const label = document.createElement('label');
      label.className = 'control-item';
      label.setAttribute('for', control.id);
      
      label.innerHTML = `
        <input type="checkbox" id="${control.id}" data-id="${control.id}">
        <div class="custom-checkbox"></div>
        <div class="control-text">
          <span class="control-label">${control.label}</span>
          <span class="control-desc">${control.desc}</span>
        </div>
      `;
      
      // Setup change listener to toggle CSS checked class immediately for better UI response
      const checkbox = label.querySelector('input[type="checkbox"]');
      checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
          label.classList.add('checked');
        } else {
          label.classList.remove('checked');
        }
        updateComplianceStatus(scenarioId);
      });

      controlsChecklist.appendChild(label);
    });

    // Reset score to 0% and initial state
    updateComplianceStatus(scenarioId);
  }

  if (controlsChecklist) {
    // Setup tab buttons
    scenarioBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        scenarioBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const scenario = btn.getAttribute('data-scenario');
        if (scenario) {
          currentScenario = scenario;
          renderScenario(currentScenario);
        }
      });
    });

    // Initial render
    renderScenario(currentScenario);
  }
});

// Scroll logic for profile in top bar
window.addEventListener('scroll', () => {
  const skillsSection = document.getElementById('skills');
  const scrollProfile = document.getElementById('scrollProfile');
  const topBar = document.querySelector('.top-bar');

  if (skillsSection && scrollProfile && topBar) {
    // Calculate how far we've scrolled relative to the skills section
    // Starts fading in shortly after scroll and reaches full opacity when skills section hits top bar
    const startFade = 50;
    const endFade = skillsSection.offsetTop - topBar.offsetHeight;
    
    let opacity = 0;
    if (window.scrollY > startFade) {
       opacity = (window.scrollY - startFade) / (endFade - startFade);
    }
    
    // Clamp between 0 and 1
    opacity = Math.max(0, Math.min(1, opacity));
    
    scrollProfile.style.opacity = opacity.toString();
    
    if (opacity > 0) {
      scrollProfile.style.visibility = 'visible';
    } else {
      scrollProfile.style.visibility = 'hidden';
    }
  }
});

