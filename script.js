/* Nav Bar Scroll */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
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


let currentIndex = 0;
const projectCards = document.querySelectorAll('.project-card');
const totalProjects = projectCards.length;
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const container = document.querySelector('.gallery-container');
const galleryWrapper = document.querySelector('.gallery-wrapper'); // <- this was missing

function changeProject(direction) {
  currentIndex = (currentIndex + direction + totalProjects) % totalProjects;
  const currentCard = projectCards[currentIndex];
  const cardOffset = currentCard.offsetLeft;
  const cardWidth = currentCard.offsetWidth;
  const containerWidth = container.offsetWidth;

  const scrollAmount = cardOffset - (containerWidth - cardWidth) / 2;
  galleryWrapper.style.transform = `translateX(-${scrollAmount}px)`;
  updateArrowState();
}

function updateArrowState() {
  leftArrow.classList.toggle('disabled', currentIndex === 0);
  rightArrow.classList.toggle('disabled', currentIndex === totalProjects - 1);
}

leftArrow.addEventListener('click', () => {
  if (currentIndex > 0) {
    changeProject(-1);
  }
});

rightArrow.addEventListener('click', () => {
  if (currentIndex < totalProjects - 1) {
    changeProject(1);
  }
});

window.addEventListener('load', () => {
  const firstCard = projectCards[0];
  const cardOffset = firstCard.offsetLeft;
  const cardWidth = firstCard.offsetWidth;
  const containerWidth = container.offsetWidth;

  const scrollAmount = cardOffset - (containerWidth - cardWidth) / 2;
  galleryWrapper.style.transform = `translateX(-${scrollAmount}px)`;
  updateArrowState();
});

/* Custom Cursor Effect */
const dot = document.querySelector('.cursor-dot');
const outline = document.querySelector('.cursor-outline');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  dot.style.left = `${x}px`;
  dot.style.top = `${y}px`;

  // Add slight delay for smooth following effect
  outline.style.left = `${x}px`;
  outline.style.top = `${y}px`;
});
