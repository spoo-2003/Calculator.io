const input = document.querySelector(".form-control");

function addToInput(value) {
  input.value += value;
}

function backspace() {
  input.value = input.value.slice(0, -1);
}

function clearInput() {
  input.value = "";
}

function calculate() {
  const expression = input.value;
  const result = eval(expression);
  input.value = result;
}
