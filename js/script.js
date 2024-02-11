function clearScreen() {
  document.getElementById('screen').value = '';
}

function appendValue(value) {
  document.getElementById('screen').value += value;
}

function calculate() {
  let result;
  try {
      result = eval(document.getElementById('screen').value);
  } catch (error) {
      result = 'Error';
  }
  document.getElementById('screen').value = result;
}
