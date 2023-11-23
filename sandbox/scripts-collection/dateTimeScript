const styles = `
#dateTime {
    position: absolute;
    top: 100px;
    left: 100px;
    font-weight: bold;
    color: red;
}
`;

const styleElement = document.createElement('style');
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);

function displayDateTime() {
const dateTimeElement = document.getElementById('dateTime');
const now = new Date();
const formattedDateTime = now.toLocaleString();
dateTimeElement.innerText = formattedDateTime;
}

// Вызываем функцию для отображения даты и времени
displayDateTime();

// Обновляем дату и время каждую секунду
setInterval(displayDateTime, 1000);

