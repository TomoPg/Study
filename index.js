const { Client, Intents } = require('discord.js')
const client = new Client({ intents: Object.keys(Intents.FLAGS) })

client.on('ready', () => {
  console.log(`${client.user.tag} でログインしています。`)
})

client.on('messageCreate', async msg => {
  if (msg.content === 'こんにちは') {
    msg.channel.send('こんにちは')
  }
})

client.login('OTAzOTI0MDMyMzk3Nzc0ODc4.YX0C2w.ELMOiIPiC1GeXVjsv3nTIbZlBlo')