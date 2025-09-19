const extractLines = (element) =>
  element.innerHTML
    .split("\n")
    .map((e) => e.trim())
    .filter((e) => e.length > 0);

const reformatBody = () => {
  const body = document.body;
  const lines = extractLines(body);
  const reformattedContent = lines.map((e) => `<p>${e}</p>`).join("\n");
  body.innerHTML = reformattedContent;
};

reformatBody();
