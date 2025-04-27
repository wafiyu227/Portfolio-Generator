document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("home").addEventListener("click", () => {
    window.location.href = "main.html";
  });
  document.getElementById("templates").addEventListener("click", () => {
    document.querySelector(".template-grid").style.display = "grid";
    
  });
  document.getElementById("contacts").addEventListener("click", () => {
    window.location.href = "contacts.html";
  });
  document.getElementById("pricing").addEventListener("click", () => {
    window.location.href = "pricing.html";
  });
});


function loadTemplate(templateName) {
  const iframe = document.createElement("iframe");
  iframe.src = `templates/${templateName}.html/${templateName}`;
  iframe.style.width = "80%";
  iframe.style.height = "100vh";
  iframe.style.border = "1px solid";
  document.querySelector(".customization").style.display = "inline-block";

  const container = document.getElementById("portfolio-preview");
  container.innerHTML = "";
  container.appendChild(iframe);

  document.querySelector(".template-grid").style.display = "none"
  document.querySelector(".description").style.display = "none"
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

