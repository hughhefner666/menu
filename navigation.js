(function () {
  document.querySelectorAll("[data-menu-toggle]").forEach(function (button) {
    var menu = document.getElementById(button.getAttribute("aria-controls"));
    if (!menu) return;
    var overlay = document.querySelector("[data-menu-overlay]");
    var closeButtons = menu.querySelectorAll("[data-menu-close]");
    var setMenuState = function (isOpen) {
      menu.classList.toggle("is-open", isOpen);
      button.setAttribute("aria-expanded", String(isOpen));
      button.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
      if (overlay) {
        overlay.hidden = !isOpen;
        requestAnimationFrame(function () { overlay.classList.toggle("is-visible", isOpen); });
      }
      document.body.classList.toggle("menu-is-open", isOpen);
      if (isOpen) {
        var closeButton = menu.querySelector("[data-menu-close]");
        if (closeButton) closeButton.focus();
      } else {
        button.focus();
      }
    };

    button.addEventListener("click", function () {
      setMenuState(!menu.classList.contains("is-open"));
      var label = button.querySelector(".sr-only");
      if (label) label.textContent = menu.classList.contains("is-open") ? "Close navigation" : "Open navigation";
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () { setMenuState(false); });
    });
    closeButtons.forEach(function (closeButton) { closeButton.addEventListener("click", function () { setMenuState(false); }); });
    if (overlay) overlay.addEventListener("click", function () { setMenuState(false); });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && menu.classList.contains("is-open")) setMenuState(false);
    });
  });
}());
