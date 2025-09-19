export const extractData = (element) =>
  Array.from(element.getElementsByTagName("p")).map((e) =>
    e.textContent.trim()
  );
