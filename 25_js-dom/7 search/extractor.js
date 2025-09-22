export default (element) => {
  const title = element.querySelector("h1").textContent;
  const description = element.querySelector(".description").textContent;
  const items = Array.from(element.querySelectorAll(".links > div")).map(
    (e) => {
      const title = e.querySelector("h2").textContent;
      const description = e.querySelector("p").textContent;
      return { title, description };
    }
  );
  return { title, description, items };
};
