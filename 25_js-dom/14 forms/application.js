// import { htmlEscape } from "escape-goat";

function htmlEscape(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export default () => {
  const createFormDataElement = (...formValues) => {
    const [email, name, comment] = formValues.map(htmlEscape);

    const formDataElement = document.createElement("div");
    formDataElement.innerHTML = `
  <p>Feedback has been sent</p>
  <div>Email: ${email}</div>
  <div>Name: ${name}</div>
  <div>Comment: ${comment}</div>`;

    return formDataElement;
  };

  const form = document.querySelector(".feedback-form");

  const readForm = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const name = formData.get("name");
    const comment = formData.get("comment");

    form.replaceWith(createFormDataElement(email, name, comment));
  };

  form.addEventListener("submit", readForm);
};
