// Filter functionality
const filterButtons = document.querySelectorAll(".filterButton");
const subMenus = document.querySelectorAll(".subMenu");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"));

    // Add active class to clicked button
    button.classList.add("active");

    const filterText = button.textContent.trim();

    // Show all menus if "All" is clicked
    if (filterText === "All") {
      subMenus.forEach((menu) => {
        menu.style.display = "block";
        menu.style.animation = "fadeIn 0.5s ease";
      });
    } else {
      // Filter menus based on button text
      subMenus.forEach((menu) => {
        const heading = menu.querySelector(".subMenuHeading").textContent;

        if (heading === filterText) {
          menu.style.display = "block";
          menu.style.animation = "fadeIn 0.5s ease";
        } else {
          menu.style.display = "none";
        }
      });
    }
  });
});

// Smooth scroll for View Menu button
const viewMenuButton = document.querySelector(".viewMenuButton");
const container = document.querySelector(".container");

viewMenuButton.addEventListener("click", () => {
  container.scrollIntoView({ behavior: "smooth" });
});

// Add scroll animation to menu items
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = "slideUp 0.6s ease forwards";
      }
    });
  },
  {
    threshold: 0.1,
  }
);

const menuElements = document.querySelectorAll(".subMenuElement");
menuElements.forEach((element) => {
  observer.observe(element);
});
