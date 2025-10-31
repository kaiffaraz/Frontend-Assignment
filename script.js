// ===== AUTO SCROLL SLIDER =====
const slider = document.querySelector('.slider');

let scrollAmount = 0;
let slideTimer;

// Function to auto-scroll horizontally every 4 seconds
function autoScrollSlider() {
  const maxScroll = slider.scrollWidth - slider.clientWidth;
  const scrollStep = slider.clientWidth; // move by one image width

  slideTimer = setInterval(() => {
    scrollAmount += scrollStep;

    if (scrollAmount >= maxScroll) {
      // Restart from beginning when it reaches the end
      scrollAmount = 0;
    }

    slider.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  }, 4000); // 4 seconds interval
}

// Start auto-scroll when page loads
window.addEventListener("load", autoScrollSlider);

// Optional: Pause auto-scroll when user interacts
slider.addEventListener("mouseenter", () => clearInterval(slideTimer));
slider.addEventListener("mouseleave", autoScrollSlider);
