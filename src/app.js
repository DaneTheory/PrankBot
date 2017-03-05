/*Created Today*/

//Init Bot
const { Client } = require('discord.js')
const bot = new Client()

const prefix = "$"

const commands = require('./Commands')

const permissions = require('./func/checkPermissions')

const config = require('../config.json')

//Extend with bandwidth
const Bandwidth = require('node-bandwidth')
bot.bw = new Bandwidth({
    userId: config.user_id,
    apiToken: config.api_token,
    apiSecret: config.api_secret
})

//Message Event
bot.on('message', message => {

    //Stop Right Thar
    if (message.author.bot) return
    if (!message.content.startsWith(prefix)) return
    if (message.channel.type !== "text") return

    //Message with the message.content
    let cutPrefix = message.content.slice(prefix.length)
    let args = cutPrefix.split(" ")
    let command = args[0]
    args = args.slice(1)
    let suffix = args.join(" ")

    //Lets do Commands
    if (!commands[command]) return
    let cmd = commands[command]
    
    //Check Permissions If Needed
    if (!permissions(cmd, message)) {
        let role = typeof cmd.role === "string" ? cmd.role : typeof cmd.role === "number" ? message.guild.roles.get(cmd.role) ? message.guild.roles.get(cmd.role).name : "deleted_role" : "deleted_role"
        return message.channel.sendMessage("**You lack the required role:** "+role)
    }

    try {

        cmd.exec({ message, bot, args, suffix })

    } catch(err) {

        console.log(err)

    }

})

bot.on('ready', () => {
    console.log("ready")
})

bot.login(config.token)