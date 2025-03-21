function loadTemplate(templateName) {
  const iframe = document.createElement("iframe");
  iframe.src = `templates/${templateName}.html/${templateName}`; // Load full template
  iframe.style.width = "80%";
  iframe.style.height = "100vh"; // Adjust height as needed
  iframe.style.border = "1px solid";
  iframe.style.display = "inline-block"
  iframe.style.overflow = "hidden"

  const sideBar = document.querySelector(".parent");
  sideBar.style.position = "absolute"
  sideBar.style.top = "40%";
  sideBar.style.right = "60px"
  

  const container = document.getElementById("portfolio-preview");
  container.innerHTML = ""; // Clear previous template
  container.appendChild(iframe);
}
