let inputText = document.createElement("input");
inputText.type = "text";

document.body.appendChild(inputText);

inputText.addEventListener("keyup", KeyUp);

function KeyUp() {
  let regEx = /^[a-zA-Z]+$/.test(inputText.value);
  if (!regEx) {
    inputText.value = inputText.value.replace(/[0-9]/g, "");
  } else {
    let texte = document.createElement("p");
    texte.innerHTML = inputText.value;
    texte.style.display = "inline-Block";
    document.body.appendChild(texte);
  }
}
