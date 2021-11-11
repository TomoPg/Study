const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
module.exports = {
    name:"command",
    description: 'メイン',
    async execute(client,command,args,message){
        if (command == "test"){
            message.channel.send('ここで処理を書いたよ')
        }
        if (command == "test2"){
            client.commands.set('test2').execute(client,command,args,message)
        
        }
    }
}