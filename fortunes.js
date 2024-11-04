const fortunes = require('./fortunes.json')

const getFortune = () => {
    const message = Math.floor(Math.random() * fortunes.length)
    return fortunes[message]
}

module.exports = getFortune