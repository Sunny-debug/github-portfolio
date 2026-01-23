(function () {
    const yearEl = document.getElementById("year");
    yearEl.textContent = new Date().getFullYear();
  
    // Mobile nav toggle
    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("navMenu");
  
    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  
    // Close mobile nav when clicking a link
    navMenu.addEventListener("click", (e) => {
      if (e.target.classList.contains("nav__link")) {
        navMenu.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  
    // Active nav link on scroll (IntersectionObserver)
    const sections = ["about", "skills", "experience", "education", "contact"]
      .map(id => document.getElementById(id))
      .filter(Boolean);
  
    const navLinks = Array.from(document.querySelectorAll(".nav__link"));
  
    const setActive = (id) => {
      navLinks.forEach(a => {
        a.classList.toggle("active", a.getAttribute("href") === `#${id}`);
      });
    };
  
    const observer = new IntersectionObserver((entries) => {
      // Pick the most visible intersecting section
      const visible = entries
        .filter(en => en.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  
      if (visible?.target?.id) setActive(visible.target.id);
    }, { root: null, threshold: [0.15, 0.3, 0.5, 0.75] });
  
    sections.forEach(sec => observer.observe(sec));
  
    // Scroll progress bar
    const scrollBar = document.getElementById("scrollBar");
    const onScroll = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      const progress = total > 0 ? (doc.scrollTop / total) * 100 : 0;
      scrollBar.style.width = `${progress}%`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  
    // Copy email button
    const copyBtn = document.getElementById("copyBtn");
    const emailToCopy = document.getElementById("emailToCopy");
    const copyStatus = document.getElementById("copyStatus");
  
    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(emailToCopy.value);
        copyStatus.textContent = "Copied to clipboard.";
        setTimeout(() => (copyStatus.textContent = ""), 1800);
      } catch (err) {
        copyStatus.textContent = "Copy failed — please copy manually.";
        setTimeout(() => (copyStatus.textContent = ""), 2200);
      }
    });
  
    // Theme toggle with persistence
    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");
  
    const applyTheme = (theme) => {
      if (theme === "light") {
        document.documentElement.setAttribute("data-theme", "light");
        themeIcon.textContent = "☀";
      } else {
        document.documentElement.removeAttribute("data-theme");
        themeIcon.textContent = "☾";
      }
    };
  
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) applyTheme(savedTheme);
  
    themeToggle.addEventListener("click", () => {
      const isLight = document.documentElement.getAttribute("data-theme") === "light";
      const next = isLight ? "dark" : "light";
      localStorage.setItem("theme", next);
      applyTheme(next);
    });
  })();
  