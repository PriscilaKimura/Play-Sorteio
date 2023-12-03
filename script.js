const button = document.querySelector(".buttonResult");
const input = document.getElementById("input-result");

button.addEventListener('click', function () {
  const min = parseInt(document.querySelector(".inputMin").value);
  const max = parseInt(document.querySelector(".inputMax").value);

  if (!isNaN(min) && !isNaN(max)) {
    const result = Math.floor(Math.random() * (max - min + 1)) + min; 
    input.value = result;
  } else {
    input.value = "Insira valores numéricos válidos";
  }
});
