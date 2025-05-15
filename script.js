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
  document.getElementById("about-section").scrollIntoView({ behavior: "smooth" });
});


/* Transitions for About Section */
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  const targets = document.querySelectorAll(".about-title h2, .about-text");
  targets.forEach((el) => observer.observe(el));
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


/* Gallery Title Animation */
const h2Element = document.querySelector('#projects-gallery h2');

function checkInView() {
  const rect = h2Element.getBoundingClientRect();
  if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
    h2Element.classList.add('in-view');
  } else {
    h2Element.classList.remove('in-view');
  }
}

window.addEventListener('scroll', checkInView);


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
