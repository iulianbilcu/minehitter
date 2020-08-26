const mineflayer = require('mineflayer')

if (process.argv.length < 4 || process.argv.length > 6) {
    console.log('Usage : node echo.js <host> <port> [<name>] [<password>]')
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
        if (entity !== null) {
            if (entity.type === 'mob') {
                bot.attack(entity)
                //
                // if (bot.food < 15) {
                //     console.log('\u0007');
                //     bot.activateItem(true)
                // }
            }
        }
        console.clear();
        console.log(new Date().toLocaleString() + " Level:" + bot.experience.level + " Food:" + bot.food + " Health: " + bot.health);
        let multiply = 40;
        let progress = bot.experience.progress * multiply;
        console.log("[" + "*".repeat(progress) + " ".repeat((multiply - progress + 1)) + "]");
        const entity = bot.nearestEntity()
    }, 1000)
})