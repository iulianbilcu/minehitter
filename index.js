
const mineflayer = require('mineflayer')

if (process.argv.length < 4 || process.argv.length > 6) {
    console.log('Usage : node index.js <host> <port> [<name>] [<password>]')
    process.exit(1)
}

const bot = mineflayer.createBot({
    host: process.argv[2],
    port: parseInt(process.argv[3]),
    username: process.argv[4] ? process.argv[4] : 'looker',
    password: process.argv[5]
})

bot.once('spawn', function () {
    setInterval(() => {
        const entity = bot.nearestEntity(match = (entity) => { return entity.type === 'mob' })

        if (entity !== null) {
            bot.attack(entity);
            // @todo handle hunger
        }
        console.clear();
        console.log(new Date().toLocaleString() + " Level:" + bot.experience.level + " Food:" + bot.food + " Health: " + bot.health);
        let multiply = 40;
        let progress = bot.experience.progress * multiply;
        console.log("[" + "*".repeat(progress) + " ".repeat((multiply - progress + 1)) + "]");
    }, 1000)
})