const alertsContainer = document.querySelector(".alerts");
alertsContainer.style.display = "block";
let alertsCounter = 0;

const alertsGenerator = () => {
  const alertButton = document.getElementById("alert-generator");

  alertButton.addEventListener("click", () => {
    alertsCounter += 1;

    const newAlert = document.createElement("div");
    newAlert.textContent = `Alert ${alertsCounter}`;
    newAlert.className = "alert alert-primary";

    alertsContainer.prepend(newAlert);
  });
};

const alertsHider = () => {
  const alertsHideButton = document.getElementById("alert-hider");
  alertsHideButton.addEventListener("click", () => {
    if (alertsContainer.style.display === "none") {
      alertsContainer.style.display = "block";
      alertsHideButton.textContent = "Hide Alerts";
    } else {
      alertsContainer.style.display = "none";
      alertsHideButton.textContent = "Show Alerts";
    }
  });
};

const alertsPopper = () => {
  const alertsPopButton = document.getElementById("alert-popper");
  alertsPopButton.addEventListener("click", () => {
    alertsCounter = Math.max(alertsCounter - 1, 0);
    alertsContainer.firstChild.remove();
  });
};

export default () => {
  alertsGenerator();
  alertsHider();
  alertsPopper();
};

/*
const alertsContainer = document.querySelector(".alerts");
let alertsCounter = 0;

const createAlert = () => {
  alertsCounter += 1;

  const newAlert = document.createElement("div");
  newAlert.textContent = `Alert ${alertsCounter}`;
  newAlert.className = "alert alert-primary";

  alertsContainer.prepend(newAlert);
};

const toggleAlerts = (button) => {
  if (alertsContainer.classList.contains("hidden")) {
    alertsContainer.classList.remove("hidden");
    button.textContent = "Hide Alerts";
  } else {
    alertsContainer.classList.add("hidden");
    button.textContent = "Show Alerts";
  }
};

const popAlert = () => {
  if (alertsContainer.firstChild) {
    alertsContainer.firstChild.remove();
    alertsCounter = Math.max(alertsCounter - 1, 0);
  }
};

export default () => {
  const alertButton = document.getElementById("alert-generator");
  const alertsHideButton = document.getElementById("alert-hider");
  const alertsPopButton = document.getElementById("alert-popper");

  alertButton.addEventListener("click", createAlert);
  alertsHideButton.addEventListener("click", () => toggleAlerts(alertsHideButton));
  alertsPopButton.addEventListener("click", popAlert);
};
*/