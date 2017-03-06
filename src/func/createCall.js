module.exports = (message, suffix, bot, connection) => {

    console.log("calling")

    const receiver = connection.createReceiver()

    bot.bw.Call.create({

        from: "+1",
        to: "+1",
        callbackUrl: "http://requestb.in/1ejuldc1"

    }).then(call => {

        message.channel.sendMessage(":telephone_receiver: Calling...")

        console.log(call)

        bot.bw.Call.getEvents(call.id).then(events => console.log(events))

       // bot.bw.Call.speakSentence(call.id, "Welcome to PrankBot, may i take your order?").then(() => {
        //    bot.bw.Call.hangup(call.id)
       // })

        receiver.on('opus', (user, buffer) => {



        })

    }).catch(console.log)

}