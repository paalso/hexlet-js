const capitalize = (string) => {
  if (typeof string !== "string" || string.length === 0) return string;
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const normalizeClassName = (className) => {
  const [firstToken, ...rest] = className.split("-");
  return [firstToken, ...rest.map(capitalize)].join("");
};

const normalizeElement = (element) => {
  const classListCopy = [...element.classList];
  element.className = "";
  classListCopy.forEach((name) =>
    element.classList.add(normalizeClassName(name))
  );
};

export default () => {
  const allElements = document.querySelectorAll("*");
  allElements.forEach((element) => normalizeElement(element));
};
