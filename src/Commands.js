module.exports = {

    call: {

        role: "Prank Caller",
        exec: ({ message, bot, args, suffix }) => {

            message.channel.sendMessage("No Call 4 u")

        }

    },

    restart: {

        role: "Developer",
        exec: ({ message, bot, args, suffix }) => {

            message.channel.sendMessage('`Restarting...`').then(msg => {
               msg.delete().then(() => {
                   bot.destroy().then(() => {
                       process.exit(1)
                   })
               })
            })

        }

    }

}