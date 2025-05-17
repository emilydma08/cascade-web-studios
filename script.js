/* Nav Bar Scroll Effect */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

/* Nav Bar Link Scrolling */
// Select all nav links that have hashes (#)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetID = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetID);

    if (targetElement) {
      const navHeight = document.querySelector('nav').offsetHeight;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight - 10; // 10px extra offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});


/* Hero Section Down Arrow*/
document.getElementById("down-arrow").addEventListener("click", function () {
  const target = document.getElementById("about-section");
  const offset = -100; // change this value to adjust how far up you want to scroll

  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset + offset;

  window.scrollTo({
    top: targetPosition,
    behavior: "smooth"
  });
});

/* Transitions for About Section */
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('animate-visible');
              observer.unobserve(entry.target); // run once
          }
      });
  }, { threshold: 0.3 });

  const elements = document.querySelectorAll('.animate-h2, .animate-badge, .animate-text');
  elements.forEach(el => observer.observe(el));
});

/* Gallery Transitions */
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-visible');
        observer.unobserve(entry.target); // run once
      }
    });
  }, { threshold: 0.3 });

  const elements = document.querySelectorAll(
    '.animate-h2, .animate-badge, .animate-text, .animate-gallery-h2, .animate-gallery-badge'
  );
  elements.forEach(el => observer.observe(el));
});


/* Gallery Videos */
document.querySelectorAll('.project-card video').forEach(video => {
  const parent = video.closest('.project-card');

  parent.addEventListener('mouseenter', () => {
    video.play();
  });

  parent.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });
});


/* Services Animations */
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-visible');
        observer.unobserve(entry.target); // only run once
      }
    });
  }, { threshold: 0.3 });

  const elements = document.querySelectorAll(
    '.animate-h2, .animate-badge, .animate-text, .animate-gallery-h2, .animate-gallery-badge, .animate-services-h2, .animate-services-badge, .animate-service-1, .animate-service-2'
  );
  elements.forEach(el => observer.observe(el));
});


/* Gallery Video Scrolling */
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const container = document.querySelector('.gallery-container');

const scrollAmount = 200;

function updateArrowState() {
  const maxScrollLeft = container.scrollWidth - container.clientWidth;
  leftArrow.classList.toggle('disabled', container.scrollLeft <= 0);
  rightArrow.classList.toggle('disabled', container.scrollLeft >= maxScrollLeft - 1);
}

updateArrowState();

leftArrow.addEventListener('click', () => {
  container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

rightArrow.addEventListener('click', () => {
  container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

container.addEventListener('scroll', updateArrowState);

container.addEventListener('scrollend', updateArrowState); 


/* Contact Us Animations */
document.addEventListener('DOMContentLoaded', () => {
  const contactElements = document.querySelectorAll(
    '.animate-contact-h2, .animate-contact-badge, .animate-contact-p'
  );

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  contactElements.forEach(el => observer.observe(el));
});

/* Custom Cursor Effect */
const dot = document.querySelector('.cursor-dot');
const outline = document.querySelector('.cursor-outline');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  dot.style.left = `${x}px`;
  dot.style.top = `${y}px`;

  outline.style.left = `${x}px`;
  outline.style.top = `${y}px`;
});
