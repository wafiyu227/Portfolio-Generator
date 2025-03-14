document.addEventListener("DOMContentLoaded", function () {
  // Detect which page the script is running on
  if (window.location.pathname.includes("main.html")) {
    setupMainPage();
  } else if (window.location.pathname.includes("customize.html")) {
    loadCustomizePage();
  }
});

// Function to handle template selection on main.html
function setupMainPage() {
  const templateContainer = document.getElementById("container");

  templateContainer.addEventListener("click", function (event) {
    let selectedTemplate = event.target.closest(".template"); // Get the clicked template

    if (selectedTemplate) {
      localStorage.setItem("selectedTemplate", selectedTemplate.outerHTML); // Save selected template
      window.open("customize.html", "_blank"); // Redirect to customization page
    }
  });
}

// Function to load the selected template on customizable.html
function loadCustomizePage() {
  const savedTemplate = localStorage.getItem("selectedTemplate");
  const container = document.getElementById("customizationContainer");

  if (savedTemplate) {
    container.innerHTML = savedTemplate; // Insert the saved template
    localStorage.removeItem("selectedTemplate"); // Clear storage after loading
  } else {
    container.innerHTML = "<p>No template selected.</p>"; // Fallback if no template is chosen
  }
}
