const keep_alive = require("./keep_alive")
const Discord = require("discord.js")
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]})
var token = require("./token.json")

const PREFIX = 'nug!';
/*
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("ready", () => {
  client.user.setPresence({
    status: "idle" }),
  client.user.setActivity("Nugget Castle", {type: "WATCHING"})
})
*/


client.on("message", msg => {

  if(msg.member.user.tag != client.user.tag)
  {
    let args = msg.content.substring(PREFIX.length).split(" ");
    
    switch(args[0])
    {
      case 'help':
        msg.channel.send("How may Nugget help you today?")
        break;
    }
  }
})

client.login(token.token)