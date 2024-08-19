document.addEventListener("DOMContentLoaded", function () {
  const textarea = document.querySelector("textarea");
  const encryptButton = document.querySelector("button:nth-of-type(1)");
  const decryptButton = document.querySelector("button:nth-of-type(2)");
  const resultContainer = document.querySelector(".container2");
  const resultImg = resultContainer.querySelector("img");
  const resultText = resultContainer.querySelector("p");
  const copyButton = document.getElementById("copyButton");

  const encryptText = (text) => {
    return text
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
  };

  const decryptText = (text) => {
    return text
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
  };

  encryptButton.addEventListener("click", () => {
    const text = textarea.value;
    textarea.value = "";
    displayResult(encryptText(text), true);
  });

  decryptButton.addEventListener("click", () => {
    const text = textarea.value;
    textarea.value = "";
    displayResult(decryptText(text), false);
  });

  copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(resultText.textContent).then(() => {
      alert("Texto copiado al portapapeles");
    });
  });

  const displayResult = (message, isEncrypted) => {
    if (message) {
      resultImg.style.display = "none"; // Esconder la imagen
      resultText.textContent = message; // Mostrar el mensaje
      resultContainer.querySelector("h2").style.display = "none";
      copyButton.style.display = "block"; // Mostrar el botón de copiar
    } else {
    
      resultContainer.querySelector("h2").textContent =
        "Ningún mensaje fue encontrado";
      resultText.textContent =
        "Ingresa el texto que desees encriptar o desencriptar.";
      copyButton.style.display = "none"; // Esconder el botón de copiar
    }
  };
});
