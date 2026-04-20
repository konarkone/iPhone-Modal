const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");
const demoBtns = document.querySelectorAll(".demoBtn");

// ===== Open =====
demoBtns.forEach((btn) => {
  btn.addEventListener("click", openModal);
});

function openModal() {
  modal.classList.add("show");

  setTimeout(() => {
    modal.classList.add("active");
  }, 10);

  document.body.style.overflow = "hidden";
}

// ===== Close =====
closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

function closeModal() {
  modal.classList.remove("active");

  setTimeout(() => {
    modal.classList.remove("show");
    document.body.style.overflow = "";
  }, 200);
}

// ===== ESC Support =====
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
