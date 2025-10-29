// Tooltip / popup on hover
const cards = document.querySelectorAll(".card");
const popup = document.getElementById("popup");

cards.forEach(card => {
  card.addEventListener("mouseenter", (e) => {
    popup.textContent = card.getAttribute("data-info");
    popup.style.display = "block";
    popup.style.left = e.pageX + "px";
    popup.style.top = e.pageY - 60 + "px";
  });
  
  card.addEventListener("mousemove", (e) => {
    popup.style.left = e.pageX + "px";
    popup.style.top = e.pageY - 60 + "px";
  });

  card.addEventListener("mouseleave", () => {
    popup.style.display = "none";
  });
});
