/*Created Today*/

const { Client } = require('discord.js')

const bot = new Client()

const prefix = "$"

const commands = require('./Commands')

const permissions = require('./func/checkPermissions')

const config = JSON.parse(require('../config.json'))

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
    args.slice(1)
    let suffix = args.join(" ")

    //Lets do Commands
    if (!commands[command]) return
    let cmd = commands[command]
    
    //Check Permissions If Needed
    if (permissions(cmd, message)) return







})

bot.login(config.token)