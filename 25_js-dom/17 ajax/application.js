const testParseList = () => {
  const items = ["Tom", "Dick", "Harry"];
  parseList("capital", items);
};

const testFetchContent = () =>
  document.getElementById("temp-button").addEventListener("click", () => {
    const url = "https://jsonplaceholder.typicode.com/users";

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        return response.json(); // Преобразуем ответ в JSON
      })
      .then((data) => {
        console.log("Ответ от сервера:", data);
      })
      .catch((error) => {
        console.error("Ошибка запроса:", error);
      });
  });

const handleCapitalInput1 = (autocompleteName) => {
  const capitalInput = document.getElementById(autocompleteName);
  capitalInput.addEventListener("input", (e) => {
    // e.preventDefault();
    const url = generateUrl(
      capitalInput.dataset.autocompleteName,
      e.target.value
    );

    console.log(url);
  });
};

const handleCapitalInput2 = (autocompleteName) => {
  const capitalInput = document.getElementById(autocompleteName);

  capitalInput.addEventListener("input", async function (event) {
    // e.preventDefault();
    const url = generateUrl(
      capitalInput.dataset.autocompleteName,
      e.target.value
    );
    console.log(url);
    const response = await fetch(url, {
      method: "GET",
    });

    const result = await response.json();

    parseList(autocompleteName, result);
  });
};

// ---------------------------------------------------------

const CURRENT_HOSTING = window.location.origin;

const generateUrl = (path, term) => {
  const url = new URL(path, CURRENT_HOSTING);
  url.searchParams.set("search", term);
  return url.toString();
};

const parseList = (autocompleteName, items) => {
  const ul = document.querySelector(
    `ul[data-autocomplete-name='${autocompleteName}']`
  );

  ul.replaceChildren();

  if (items.length === 0) {
    const li = document.createElement("li");
    li.textContent = "Nothing";
    ul.appendChild(li);
    return;
  }

  const liElements = items.map((el) => {
    const li = document.createElement("li");
    li.textContent = el;
    return li;
  });

  ul.replaceChildren(...liElements);
};

const setupAutocomplete = (inputEl) => {
  const autocompletePath = inputEl.dataset.autocomplete;
  const autocompleteName = inputEl.dataset.autocompleteName;

  inputEl.addEventListener("input", async (e) => {
    const term = e.target.value.trim().toLowerCase();
    const url = generateUrl(autocompletePath, term);

    try {
      const response = await fetch(url);
      const result = await response.json();
      parseList(autocompleteName, result);
    } catch (err) {
      console.error("Ошибка при загрузке данных:", err);
    }
  });
};

const app = () => {
  const inputs = document.querySelectorAll("[data-autocomplete]");
  inputs.forEach(setupAutocomplete);
};

export default app;
