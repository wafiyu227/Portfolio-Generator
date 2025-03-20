function loadTemplate(templateName) {
  const iframe = document.createElement("iframe");
  iframe.src = `templates/${templateName}.html/${templateName}`; // Load full template
  iframe.style.width = "100%";
  iframe.style.height = "100vh"; // Adjust height as needed
  iframe.style.border = "1px solid";

  const container = document.getElementById("portfolio-preview");
  container.innerHTML = ""; // Clear previous template
  container.appendChild(iframe);
}
