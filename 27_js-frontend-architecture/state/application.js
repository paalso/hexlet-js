// https://ru.hexlet.io/code_reviews/1928851

export default () => {
  let currentValue = 0;

  const result = document.getElementById("result");
  const input = document.querySelector('input[type="number"]');
  const plusButton = document.querySelector('input[value="plus"]');
  const resetButton = document.querySelector('button[type="reset"]');
  input.focus();

  const addNumber = (event) => {
    event.preventDefault();

    const number = parseInt(input.value);
    currentValue += number;

    refresh();
  };

  const reset = () => {
    currentValue = 0;

    refresh();
  };

  const refresh = () => {
    result.textContent = currentValue;
    input.focus();
    input.value = "";
  };

  plusButton.addEventListener("click", addNumber);
  resetButton.addEventListener("click", reset);
};
