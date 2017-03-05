module.exports = (cmd, message) => {

    if (cmd.role) {

        let role = typeof cmd.role === "string" ? message.guild.roles.find('name', cmd.role) || false : typeof cmd.role === "number" ? message.guild.roles.get(cmd.role) || false : false

        if (role === false) return false

        if (message.member.roles.has(role.id)) return true
        else return false

    } else return true

}