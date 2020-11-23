const Discord = require("discord.js"); 

exports.run = async (client, message, args) => {

  let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
  
  let avatar = user.avatarURL({ dynamic: true, format: "png", size: 1024 });

  let embed = new Discord.MessageEmbed() 
    .setColor(`#FF0000`) 
    .setTitle(`Avatar do usuário: ${user.username}`) 
    .setImage(avatar) 
    .setFooter(`${message.author.tag} requisitou o comando.`, message.author.displayAvatarURL({format: "png"}));
 await message.channel.send(embed); 

}; 