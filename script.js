// Custom Cursor
const cursor = document.querySelector('.cursor');
if (cursor) {
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });
}

// Scroll Progress Bar
const scrollProgress = document.querySelector('.scroll-progress');
if (scrollProgress) {
  window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
    scrollProgress.style.width = scrolled + '%';
  });
}

// Typing Effect
const subtitle = document.querySelector('.subtitle');
if (subtitle) {
  const text = 'Diploma Teknologi Maklumat | CompTIA | MFLS | MPP';
  let i = 0;
  subtitle.textContent = '';
  const typeWriter = () => {
    if (i < text.length) {
      subtitle.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 45);
    }
  };
  typeWriter();
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) {
      target.scrollIntoView({ behavior:'smooth', block: 'start' });
    }
  });
});

// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('theme-light');
    themeToggle.textContent = isLight ? 'Dark' : 'Light';
  });
}

// Motion Toggle
const motionToggle = document.querySelector('.motion-toggle');
if (motionToggle) {
  motionToggle.addEventListener('click', () => {
    const isOff = document.body.classList.toggle('motion-off');
    motionToggle.textContent = isOff ? 'Motion Off' : 'Motion On';
  });
}

// Intersection Observer for reveal and skill bars
const observerOptions = {
  threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      if (entry.target.classList.contains('skill-card')) {
        const level = entry.target.getAttribute('data-level');
        const fill = entry.target.querySelector('.skill-fill');
        if (fill && level) {
          fill.style.width = level + '%';
        }
      }
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
document.querySelectorAll('.skill-card').forEach(el => observer.observe(el));

// Form Submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('button');
    const originalText = btn.textContent;
    btn.textContent = 'Menghantar...';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = 'Berjaya!';
      setTimeout(() => {
        alert('Terima kasih! Saya akan hubungi anda segera.');
        this.reset();
        btn.textContent = originalText;
        btn.disabled = false;
      }, 1000);
    }, 1200);
  });
}

// Background parallax for blade image (scroll only)
const rootStyle = document.documentElement.style;
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  window.addEventListener('scroll', () => {
    const y = window.scrollY * 0.04;
    rootStyle.setProperty('--bg-y', `${y}px`);
  }, { passive: true });
}
