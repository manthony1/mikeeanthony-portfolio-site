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

