const navMobile = document.querySelector(".mobile-nav");
const navToggle = document.querySelector(".nav-toggle");
const closeNavMobile = document.querySelector(".close-btn");
const monthlyBtn = document.querySelector(".monthly-btn");
const yearlyBtn = document.querySelector(".yearly-btn");
const targetBlocks = document.querySelectorAll(".target-block");
const containers = document.querySelectorAll(".cont");
const planPeriods = document.querySelectorAll(".period");
const romaticBlock = document.querySelector(".romantic-block");
const romaticLeft = document.querySelector(".romantic-left");

navToggle.addEventListener("click", () => {
  navMobile.classList.remove("hidden");
});
closeNavMobile.addEventListener("click", () => {
  navMobile.classList.add("hidden");
});

window.addEventListener("scroll", () => {
  targetBlocks.forEach((targetBlock, index) => {
    const blockPosition = targetBlock.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (blockPosition < screenHeight / 2) {
      containers[index].classList.add("animate");
    } else containers[index].classList.remove("animate");
  });
});

// active subscription switch
if (document.querySelector(".pricing")) {
  monthlyBtn.addEventListener("click", (e) => {
    e.preventDefault();
    monthlyBtn.classList.add("btn-active");
    yearlyBtn.classList.remove("btn-active");
    planPeriods.forEach((planPeriod) => {
      planPeriod.textContent = "monthly";
    });
  });

  yearlyBtn.addEventListener("click", (e) => {
    e.preventDefault();
    yearlyBtn.classList.add("btn-active");
    monthlyBtn.classList.remove("btn-active");
    planPeriods.forEach((planPeriod) => {
      planPeriod.textContent = "yearly";
    });
  });
}

window.addEventListener("scroll", () => {
  const blockPosition = romaticBlock.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;
  if (blockPosition < screenHeight / 2) {
    romaticLeft.classList.add("romantic-animate");
  } else romaticLeft.classList.remove("romantic-animate");
});
