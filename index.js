function loadTemplate(templateName) {
  const iframe = document.createElement("iframe");
  iframe.src = `templates/${templateName}.html/${templateName}`; // Load full template
  iframe.style.width = "80%";
  iframe.style.height = "100vh"; // Adjust height as needed
  iframe.style.border = "1px solid";
  document.querySelector(".customization").style.display = "inline-block";

  const container = document.getElementById("portfolio-preview");
  container.innerHTML = ""; // Clear previous template
  container.appendChild(iframe);
}
iframe.onload = function () {
  applyColor(iframe);
};


function applyColor(iframe) {
const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
if (iframeDoc) {
  iframeDoc.body.style.backgroundColor = themes.value; // Apply color
}
}

// color change event listener
const themes = document.getElementById("fonts");
fonts.addEventListener("change", function () {
const iframe = document.querySelector("#portfolio-preview iframe");
if (iframe) {
  applyColor(iframe);
}
});
