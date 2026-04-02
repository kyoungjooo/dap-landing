let lastFocused = null;

function openModal(modal, trigger) {
  lastFocused = trigger;
  modal.hidden = false;
  document.body.classList.add("fixed");
  modal.querySelector(".modal__dialog")?.focus();
}

function closeModal(modal) {
  modal.hidden = true;
  document.body.classList.remove("fixed");
  lastFocused?.focus();
}

document.addEventListener("click", (e) => {
  const openBtn = e.target.closest("[data-modal-open]");
  if (openBtn)
    return openModal(
      document.getElementById(openBtn.dataset.modalOpen),
      openBtn,
    );

  const closeBtn = e.target.closest("[data-modal-close]");
  if (closeBtn) return closeModal(closeBtn.closest(".modal"));

  if (e.target.classList.contains("modal")) closeModal(e.target);
});

document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  const modal = document.querySelector(".modal:not([hidden])");
  if (modal) closeModal(modal);
});
