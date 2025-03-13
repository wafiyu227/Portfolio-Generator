function selectTemplate(templateNumber) {
let selectedTemplate = document.getElementById(`template-${templateNumber}`);
let clone = selectedTemplate.content.cloneNode(true);
document.getElementById("container").appendChild(clone)
}

