const textarea = document.getElementById("myTextarea");
const charCount = document.getElementById("charCount");

textarea.addEventListener("input", () => {
  const count = textarea.value.length;
  charCount.innerText = `${count}/100 caracteres`;
});
