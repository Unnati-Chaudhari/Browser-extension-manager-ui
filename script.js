const allBtn = document.querySelector(".all_btn");
const activeBtn = document.querySelector(".active_btn");
const inactiveBtn = document.querySelector(".inactive_btn");
const toggleBtn = document.querySelectorAll(".toggle_btn");
const toggleCircle = document.querySelectorAll(".toggle_circle");
const card = document.querySelectorAll(".card");
const stateButtons = document.querySelectorAll(".state_btn button");
const modeBtn = document.querySelector(".mode_btn");
const removeBtn = document.querySelectorAll(".remove");

modeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light_mode");
});

toggleBtn.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
  });
});

function selectButton(button) {
  stateButtons.forEach((btn) => {
    btn.classList.remove("selected");
  });

  button.classList.add("selected");
}

// ALL
allBtn.addEventListener("click", () => {
  selectButton(allBtn);

  card.forEach((card) => {
    card.style.display = "flex";
  });
});

// ACTIVE
activeBtn.addEventListener("click", () => {
  selectButton(activeBtn);

  card.forEach((card) => {
    const toggle = card.querySelector(".toggle_btn");

    if (toggle.classList.contains("active")) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
});

// INACTIVE
inactiveBtn.addEventListener("click", () => {
  selectButton(inactiveBtn);

  card.forEach((card) => {
    const toggle = card.querySelector(".toggle_btn");

    if (toggle.classList.contains("active")) {
      card.style.display = "none";
    } else {
      card.style.display = "flex";
    }
  });
});

// REMOVE
removeBtn.forEach((remove) => {
  remove.addEventListener("click", () => {
    const card = remove.closest(".card");

    card.style.display = "none";
    card.remove();
  });
});
