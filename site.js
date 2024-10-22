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

// Added try/catch to these event listeners because it was interfering with my to do list event listener
try {
    const prev = document.querySelector('#prev')
    prev.addEventListener('click', () => {
        currentImage = currentImage - 1
        showImages()
    })
}
catch {
    console.log("Prev button does not exist on this page.")
}

try {
    const next = document.querySelector('#next')
    next.addEventListener('click', () => {
        currentImage = currentImage + 1
        showImages()
    })
}
catch {
    console.log("Next button does not exist on this page.")
}

// Assignment 6 (To-Do List)
try {
    const toDoList = document.querySelector('.todo-list') // ul element
    const addToDo = document.querySelector('button') // "add" button
    const newToDo = document.querySelector('#new-todo') // text input element

    // Get the list from local storage
    const toDos = JSON.parse(localStorage.getItem('todo-list')) || []

    // function
    const renderToDos = () => {
        // Clear the li's before we recreate them
        toDoList.innerHTML = ''

        // loop
        toDos.forEach(toDo => {
            // Create and add new list items to the DOM
            const li = document.createElement('li')
            li.textContent = toDo.text
            toDoList.append(li)
        })
    }

    // render initial list
    renderToDos();

    // event listener
    addToDo.addEventListener('click', () => {

        // Add a new item to the list
        toDos.push({ text: newToDo.value, completed: false })

        // Save the list to local storage
        localStorage.setItem('todo-list', JSON.stringify(toDos))

        // render updated list
        renderToDos();

        // clean out text box
        newToDo.value = ''
    })
} catch {
    console.log("To-do list does not exist on this page.")
}

// Assignment 7 (Pokemon API)
try {
    // fetch random pokemon data, return a pokemon object
    const getRandomPokemon = async () => {
        const url = 'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 1025)
        const response = await fetch(url)
        const data = await response.json()
        return data
    }
    
    // create/assign img and add it to div element
    const renderPokemon = pokemon => {
        const img = document.createElement('img')
        img.src = pokemon.sprites.front_default
        img.alt = pokemon.name
    
        const pokemonDiv = document.getElementById('pokemon')
        pokemonDiv.append(img)
    }
    
    // use the returned pokemon data to render the image
    const displayPokemon = async () => {
        const pokemon = await getRandomPokemon()
        renderPokemon(pokemon)
    }
    
    // displaying 6 images to randomly generate a whole team!
    displayPokemon()
    displayPokemon() 
    displayPokemon() 
    displayPokemon() 
    displayPokemon() 
    displayPokemon() 
} catch {
    console.log("Pokemon Generator does not exist on this page.")
}