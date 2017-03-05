const util = require('util')
const createCall = require('./func/createCall')

module.exports = {

    call: {

        //role: "Prank Caller",
        exec: ({
            message,
            bot,
            args,
            suffix
        }) => {

            createCall(message, suffix, bot)

        }

    },

    restart: {

        role: "Administrator",
        exec: ({
            message,
            bot
        }) => {

            message.channel.sendMessage('`Restarting...`').then(msg => {
                msg.delete().then(() => {
                    bot.destroy().then(() => {
                        process.exit(1)
                    })
                })
            })

        }

    },

    eval: {

        exec: ({
            message,
            bot,
            suffix
        }) => {

            if (message.author.id === "163735744995655680") {

                try {

                    let evaled = eval(suffix)

                    if (typeof evaled !== "string") {
                        evaled = util.inspect(evaled)
                    }

                    message.channel.sendCode('js', evaled)

                } catch (err) {

                    message.channel.sendCode('x1', err)

                }
            }
        }
    }
}