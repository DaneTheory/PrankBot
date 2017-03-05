module.exports = (cmd, message) => {

    if (cmd.role) {

        let role = typeof cmd.role === "string" ? message.guild.roles.find('name', cmd.role) || false : typeof cmd.role === "number" ? message.guild.roles.get(cmd.role) || false : false

    } else return false

}