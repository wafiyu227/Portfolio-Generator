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
document.getElementById("textColor").addEventListener("input", function () {
  const iframe = document.querySelector("#portfolio-preview iframe");
  if (iframe) {
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    iframeDoc.body.style.color = this.value;
  }
});
document.getElementById("fontSelector").addEventListener("change", function () {
  const iframe = document.querySelector("#portfolio-preview iframe");
  if (iframe) {
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    iframeDoc.body.style.fontFamily = this.value;
  }
});
document.getElementById("theme").addEventListener("change", function () {
  const iframe = document.querySelector("#portfolio-preview iframe");
  if (iframe) {
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    iframeDoc.body.style.backgroundColor = this.value;
  }
  
});
let selectedRange = null;

// Store the selected text range
document.addEventListener("mouseup", () => {
    let selection = window.getSelection();
    if (selection.rangeCount > 0) {
        selectedRange = selection.getRangeAt(0);
    }
});

// Function to apply styles dynamically
function applyStyle(property, value) {
    if (!selectedRange) return;

    let span = document.createElement("span");
    span.style[property] = value;

    // Apply style to the selected text
    selectedRange.surroundContents(span);

    // Clear selection to prevent repeated wrapping
    selectedRange = null;
}

// Listen for sidebar changes and apply styles dynamically
document.getElementById("fontSelector").addEventListener("change", function() {
  applyStyle("font", this.value);
    
});

document.getElementById("textColor").addEventListener("input", function() {
    applyStyle("color", this.value);
});

document.getElementById("theme").addEventListener("input", function() {
    applyStyle("backgroundColor", this.value);
});


