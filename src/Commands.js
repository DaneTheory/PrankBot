const util = require('util')
const createCall = require('./func/createCall')

module.exports = {

    call: {

        role: "Prank Caller",
        exec: ({
            message,
            bot,
            args,
            suffix
        }) => {

            if (message.member.voiceChannel) {

                message.member.voiceChannel.join().then(connection => {

                    createCall(message, suffix, bot, connection)

                }).catch((err) => console.log(err))

            } else {

                message.channel.sendMessage("You must join a voice channel first")

            }

            

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