import Discord from 'discord.js'

import fs from 'fs'

let client

const setupMessageCommands = () => {
    client.commands = new Discord.Collection()

    const commandFiles = fs
        .readdirSync(`./src/commands`)
        .filter((file) => file.endsWith('.js'))

    for (const file of commandFiles) {
        import(`../src/commands/${file}`).then(({ default: command }) => {
            client.commands.set(command.name, command)
        })
    }
}

const bootClient = () => {
    client = new Discord.Client()

    setupMessageCommands()

    client.login(process.env.TOKEN)

    return client
}

export { client, bootClient }
