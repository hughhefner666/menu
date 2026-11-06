(function () {
  var toggle = document.querySelector("[data-menu-toggle]");
  var menu = document.getElementById("primary-menu");

  if (toggle && menu) {
    var label = toggle.querySelector(".sr-only");
    var setMenuState = function (isOpen) {
      toggle.setAttribute("aria-expanded", String(isOpen));
      menu.classList.toggle("is-open", isOpen);
      document.body.classList.toggle("menu-is-open", isOpen);
      if (label) label.textContent = isOpen ? "Close navigation" : "Open navigation";
      if (!isOpen) toggle.focus();
    };

    toggle.addEventListener("click", function () {
      setMenuState(toggle.getAttribute("aria-expanded") !== "true");
    });
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        if (toggle.getAttribute("aria-expanded") === "true") setMenuState(false);
      });
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") setMenuState(false);
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 1000 && toggle.getAttribute("aria-expanded") === "true") setMenuState(false);
    });
  }

  var form = document.querySelector("[data-contact-form]");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      form.querySelector("[data-form-status]").hidden = false;
    });
  }
}());
