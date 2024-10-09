// Assignment 4
localStorage.setItem("It's a secret to everybody.", "Hey, what's up! I know that's a classic Zelda reference, but unfortunately I have not played any of them other than BoTW and ToTK. One day I'll get around to at least OoT and MM. Anyway, have a good one!")

// Assignment 3
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

// Assignment 5 (Carousel)
const urls = [
    'img/hina1.jpg',
    'img/hina2.jpg',
    'img/hina3.jpg'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()

setInterval(() => {
    currentImage = currentImage + 1
    showImages()
}, 5000)

const prev = document.querySelector('#prev')
prev.addEventListener('click', () => {
    currentImage = currentImage - 1
    showImages()
})

const next = document.querySelector('#next')
next.addEventListener('click', () => {
    currentImage = currentImage + 1
    showImages()
})
