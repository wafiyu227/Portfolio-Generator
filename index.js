document.addEventListener("DOMContentLoaded", function () {
  if (window.location.pathname.includes("main.html")) {
    setupMainPage();
  } else if (window.location.pathname.includes("customize.html")) {
    loadCustomizePage();
  }
});

function setupMainPage() {
  const templateContainer = document.getElementById("container");
  (templateContainer.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.5)"),
    (templateContainer.style.padding = "20px"),
    (templateContainer.style.borderRadius = "10px");

  for (let i = 1; i <= 6; i++) {
    document.getElementById(`card-${i}`).addEventListener("click", function () {
      let template = document
        .getElementById(`template-${i}`)
        .content.cloneNode(true);

      document.getElementById("container").appendChild(template);

      const selectBtn = document.querySelector(".customize-btn");

      selectBtn.addEventListener("click", function () {
        const template = document.getElementById(`template-${i}`)
        selectedTemplate = template;

        if (selectedTemplate) {
          localStorage.setItem("selectedTemplate", selectedTemplate.outerHTML);
          window.open("customize.html", "_blank");
        }
      });
    });
  }
}

function loadCustomizePage() {
  const savedTemplate = localStorage.getItem("selectedTemplate");
  const container = document.getElementById("customizationContainer");

  if (savedTemplate) {
    container.innerHTML = savedTemplate;
  } else {
    container.innerHTML = "<p>No template selected.</p>";
  }

  const selectBtn = document.querySelector(".customize-btn");
  selectBtn.style.display = "none";
}
