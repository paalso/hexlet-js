const wrapWithParagraph = (element) => {
  const text = element.textContent;
  if (!text.trim()) return;
  const p = document.createElement("p");
  p.textContent = text;
  element.replaceWith(p);
};

export default (element) =>
  Array.from(element.getElementsByTagName("div")).forEach((div) => {
    const textChildNodes = Array.from(div.childNodes).filter(
      (e) => e instanceof Text
    );
    textChildNodes.forEach((node) => wrapWithParagraph(node));
  });
