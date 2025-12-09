(function () {
  "use strict";

  /**
   * Safe initializer — called after page load + after include-html loads components
   */
  function initComponents() {
    console.log("Initializing components after include load...");

    /**
     * HEADER TOGGLE
     */
    const headerToggleBtn = document.querySelector(".header-toggle");
    if (headerToggleBtn) {
      headerToggleBtn.addEventListener("click", function () {
        const header = document.querySelector("#header");
        header.classList.toggle("header-show");
        headerToggleBtn.classList.toggle("bi-list");
        headerToggleBtn.classList.toggle("bi-x");
      });
    }

    /**
     * NAVMENU CLICK TO CLOSE
     */
    document.querySelectorAll("#navmenu a").forEach((navmenu) => {
      navmenu.addEventListener("click", () => {
        const header = document.querySelector("#header");
        if (header && header.classList.contains("header-show")) {
          header.classList.remove("header-show");
          if (headerToggleBtn) {
            headerToggleBtn.classList.add("bi-list");
            headerToggleBtn.classList.remove("bi-x");
          }
        }
      });
    });

    /**
     * MOBILE NAV DROPDOWNS
     */
    document
      .querySelectorAll(".navmenu .toggle-dropdown")
      .forEach((dropdown) => {
        dropdown.addEventListener("click", function (e) {
          e.preventDefault();
          this.parentNode.classList.toggle("active");
          this.parentNode.nextElementSibling.classList.toggle(
            "dropdown-active"
          );
          e.stopImmediatePropagation();
        });
      });

    /**
     * SCROLL TOP BUTTON
     */
    let scrollTop = document.querySelector(".scroll-top");
    if (scrollTop) {
      scrollTop.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    function toggleScrollTop() {
      if (scrollTop) {
        window.scrollY > 100
          ? scrollTop.classList.add("active")
          : scrollTop.classList.remove("active");
      }
    }
    window.addEventListener("scroll", toggleScrollTop);
    window.addEventListener("load", toggleScrollTop);

    /**
     * Init glightbox (SAFE)
     */
    if (window.GLightbox) {
      GLightbox({ selector: ".glightbox" });
    }

    /**
     * Init AOS safely
     */
    if (window.AOS) {
      AOS.init({
        duration: 600,
        easing: "ease-in-out",
        once: true,
        mirror: false,
      });
    }

    /**
     * Pure Counters
     */
    if (window.PureCounter) new PureCounter();
  }

  /**
   * Run initComponents AFTER include.js loads components
   */
  document.addEventListener("include-loaded", initComponents);

  /**
   * Also run once after DOM is ready
   */
  window.addEventListener("DOMContentLoaded", initComponents);
})();
