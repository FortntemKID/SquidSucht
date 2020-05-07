var express = require('express');
var app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);

const Discord = require("discord.js");
const config = require("./config.json")
const client = new Discord.Client();
const prefix = config.prefix

client.on("ready", () => {
	console.log("Bot Ready lol");
});
client.on("message", m  => {
if(m.content.startsWith(prefix + "nichts")){
  m.channel.send("lol")
}
if(m.content.startsWith(prefix + "help")){
    m.channel.send("/ nichts - Zeigt den Bot ping an. \n/help - Zeigt alle Befehle an.")
  }
  client.user.setActivity("squidsucht.tk:19132", {type: STREAMING})
});
client.login(process.env.BOT_TOKEN);
