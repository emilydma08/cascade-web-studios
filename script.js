document.getElementById("down-arrow").addEventListener("click", function () {
  document.getElementById("about-section").scrollIntoView({ behavior: "smooth" });
});

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

  const title = document.querySelector(".about-title h2");
  if (title) {
    observer.observe(title);
  }
});

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

/* Gallery Arrows */

let galleryWrapper = document.querySelector('.gallery-wrapper');
let leftArrow = document.querySelector('#left-arrow');
let rightArrow = document.querySelector('#right-arrow');
let totalCards = document.querySelectorAll('.project-card').length;
let cardWidth = document.querySelector('.project-card').offsetWidth + 2; // account for the gap between cards
let galleryWidth = galleryWrapper.offsetWidth; // Gallery container width
let currentPosition = 0; // Keep track of the current position

function updateArrows() {
    // If at the beginning, disable left arrow
    if (currentPosition <= 0) {
        leftArrow.disabled = true;
    } else {
        leftArrow.disabled = false;
    }

    // If at the end, disable right arrow
    if (currentPosition >= totalCards - 2) { // Since we want to show 2 cards
        rightArrow.disabled = true;
    } else {
        rightArrow.disabled = false;
    }
}

// Scroll to the left
leftArrow.addEventListener('click', () => {
    if (currentPosition > 0) {
        currentPosition--;
        galleryWrapper.style.transform = `translateX(-${currentPosition * cardWidth}px)`;
        updateArrows();
    }
});

// Scroll to the right
rightArrow.addEventListener('click', () => {
    if (currentPosition < totalCards - 2) { // Allow only if there are more than 2 cards
        currentPosition++;
        galleryWrapper.style.transform = `translateX(-${currentPosition * cardWidth}px)`;
        updateArrows();
    }
});

// Initial arrow state update
updateArrows();


