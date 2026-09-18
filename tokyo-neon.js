(function () {
  var toggle = document.querySelector("[data-neon-toggle]");
  var links = document.querySelector("[data-neon-links]");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.textContent = open ? "Close menu" : "Menu";
    });
    links.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "Menu";
      });
    });
  }

  var gate = document.querySelector("[data-age-gate]");
  if (gate) {
    var accepted = window.sessionStorage.getItem("tokyo-directory-age-confirmed");
    if (accepted !== "yes") document.body.classList.add("age-locked");
    gate.hidden = accepted === "yes";
    gate.querySelector("[data-age-yes]").addEventListener("click", function () {
      window.sessionStorage.setItem("tokyo-directory-age-confirmed", "yes");
      gate.hidden = true;
      document.body.classList.remove("age-locked");
      document.querySelector("#directory-title").focus();
    });
    gate.querySelector("[data-age-no]").addEventListener("click", function () {
      gate.querySelector("[data-age-message]").textContent = "Access is limited to people aged 18 or older.";
    });
  }

  var form = document.querySelector("[data-production-form]");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      form.querySelector("[data-form-status]").hidden = false;
    });
  }
}());
