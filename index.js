const discord = require("discord.js");
const clinet = new discord.Client();
const prefix = "%%";
const fs = require("fs");
let command_int = 0
for(const file of commandFiles) {
  command_int++;
  const command = require(`./command/${file}`);
}
console.log(`合計${command_int}個がロードされました。`)

clinet.on("message",async message => {
  if(message.content.indexOf(prefix)!=0)return;
  const args = message.content
  .slice(prefix.length)
  .trim()
  .split(/+/g);
  const command = args.shift().toLowerCase();

  clinet.commands.get('command').execute(clinet,command,args,message);
})