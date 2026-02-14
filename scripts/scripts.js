const menu = document.getElementById("menu");
const menuItems = document.querySelector(".menu-items");
const menuToggle = document.querySelector(".menu-toggle");
const toggle = document.getElementById("themeToggle");
const icon = document.getElementById("icon");
const header = document.querySelector("header");
const body = document.body;

menuToggle.addEventListener("click", toggleMenu);

function toggleMenu() {
  const isOpen = menuItems.classList.toggle("active");

  menuToggle.classList.toggle("open", isOpen);

  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Fechar menu" : "Abrir menu"
  );
}

function closeMenu() {
  menuItems.classList.remove("active");
  menuToggle.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");
}

document.addEventListener("click", (event) => {
  if (!menuItems.contains(event.target) && !menuToggle.contains(event.target)) {
    closeMenu();
  }
});


menuItems.querySelectorAll("a, button").forEach((item) => {
  item.addEventListener("click", closeMenu);
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 2) {
    menu.classList.add("scrolled");
    header.style.borderBottom = "none";
  } else {
    menu.classList.remove("scrolled");
    header.style.borderBottom = "1px solid var(--border)";
  }
});

function updateIcon() {
  if (body.classList.contains("light")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
}

if (localStorage.getItem("theme") === "light") {
  body.classList.add("light");
}

updateIcon();

toggle.addEventListener("click", () => {
  body.classList.toggle("light");

  updateIcon();

  icon.classList.add("clicked");
  setTimeout(() => icon.classList.remove("clicked"), 400);

  localStorage.setItem(
    "theme",
    body.classList.contains("light") ? "light" : "dark"
  );
});

document.querySelectorAll(".project").forEach((p) => {
  let lastX = 0;
  let lastY = 0;

  p.addEventListener("mousemove", (e) => {
    lastX = e.offsetX;
    lastY = e.offsetY;

    p.style.background = `
      radial-gradient(
        circle at ${lastX}px ${lastY}px,
        rgba(203,184,157,.25),
        var(--bg-soft) 60%
      )
    `;
  });

  p.addEventListener("mouseleave", () => {
    p.style.background = `
      radial-gradient(
        120% 120% at 100% 0%,
        rgba(203,184,157,.25),
        transparent 60%
      ),
      linear-gradient(
        to left,
        var(--bg-soft),
        var(--bg)
      )
    `;
  });
});

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".menu-items a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

const fadeUpItems = document.querySelectorAll('.fade-up');
const visibilityThreshold = 0.4;

function handleScroll() {
  fadeUpItems.forEach((item) => {

    if (item.classList.contains('fixed') && item.classList.contains('in-view')) {
      return;
    }

    const rect = item.getBoundingClientRect();
    const itemHeight = rect.height;

    const visibleHeight = Math.max(
      0,
      Math.min(window.innerHeight, rect.bottom) - Math.max(0, rect.top)
    );

    const isVisible = visibleHeight / itemHeight >= visibilityThreshold;

    if (isVisible) {
      item.classList.add('in-view');
      item.classList.remove('out-of-view');
    } else {

      if (!item.classList.contains('fixed')) {
        item.classList.remove('in-view');
        item.classList.add('out-of-view');
      }
    }
  });
}
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', () => {
  window.scrollTo(0, 1);
  setTimeout(() => {
    window.scrollTo(0, 1);
  }, 50); 
});

