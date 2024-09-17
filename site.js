const hours = new Date().getHours() // get the current hour
const isMorning = hours >= 5 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 5 // is it evening?
const welcome = document.getElementById("welcome");

switch (true) {
    case isMorning:
        welcome.textContent = `Good Morning! Today is ${new Date().toLocaleDateString()}!`;
        break;
    case isAfternoon:
        welcome.textContent = `Good Afternoon! Today is ${new Date().toLocaleDateString()}!`;
        break;
    case isEvening:
        welcome.textContent = `Good Evening! Today is ${new Date().toLocaleDateString()}!`;
        break;
    default:
        break;
}