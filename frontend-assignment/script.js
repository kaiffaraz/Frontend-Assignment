// Tooltip popup
const cards = document.querySelectorAll(".card");
const popup = document.getElementById("popup");

cards.forEach(card => {
  card.addEventListener("mouseenter", e => {
    popup.textContent = card.getAttribute("data-info");
    popup.style.display = "block";
    popup.style.left = e.pageX + "px";
    popup.style.top = e.pageY - 60 + "px";
  });
  card.addEventListener("mousemove", e => {
    popup.style.left = e.pageX + "px";
    popup.style.top = e.pageY - 60 + "px";
  });
  card.addEventListener("mouseleave", () => popup.style.display = "none");
});

// Auto-scroll slider every 4 seconds
const slider = document.querySelector(".slider");
function autoScroll() {
  const width = slider.clientWidth;
  const maxScroll = slider.scrollWidth - width;
  let next = Math.min(slider.scrollLeft + width, maxScroll);
  if (slider.scrollLeft >= maxScroll - 5) next = 0;
  slider.scrollTo({ left: next, behavior: "smooth" });
}
let autoInterval = setInterval(autoScroll, 4000);
slider.addEventListener("wheel", () => clearInterval(autoInterval));
slider.addEventListener("touchstart", () => clearInterval(autoInterval));
