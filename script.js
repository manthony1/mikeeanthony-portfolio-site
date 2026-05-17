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

  // Dark Mode Toggle
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      
      if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        themeIcon.textContent = 'dark_mode';
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.textContent = 'light_mode';
      }
    });
  }

  // Hooray Confetti Logic
  const hoorayBtn = document.getElementById('hoorayBtn');
  if (hoorayBtn) {
    hoorayBtn.addEventListener('click', () => {
      if (typeof confetti === 'function') {
        confetti({
          particleCount: 150,
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
