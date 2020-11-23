const Discord = require("discord.js");
const config = require('../../config.json')
exports.run = (client, message, args) => {

var perg = "Tudo bem bot?";

if (!perg) return message.reply(`Você digitou algo errado!!`)
if (perg == null) return message.reply(`Você digitou algo errado!`)
 
var list = [
    "Olá, como você está?",
    "Estou bem, só um pouco ocupada.",
    "Estou bem <3",
]

var rand = list[Math.floor(Math.random() * list.length)];
let avatar = message.author.displayAvatarURL({dynamic : true})

message.channel.send(rand);
}