(function () {
  document.querySelectorAll("[data-menu-toggle]").forEach(function (button) {
    var menu = document.getElementById(button.getAttribute("aria-controls"));
    if (!menu) return;

    button.addEventListener("click", function () {
      var isOpen = menu.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("is-open");
        button.setAttribute("aria-expanded", "false");
      });
    });
  });
}());
