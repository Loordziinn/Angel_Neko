const Discord = require("discord.js")

exports.run = async(client, message, args) => {
    var list = [
        'https://media4.giphy.com/media/wOly8pa4s4W88/giphy.gif',
        'https://i.pinimg.com/originals/3f/44/1b/3f441ba8a891512172fa1861af7dbedc.gif',
        'https://i.imgur.com/0KGMuyy.gif',
        'https://i.imgur.com/NASqjMh.gif',
        'https://i.imgur.com/LM6XW0R.gif',
        'https://i.imgur.com/rKkQvKK.gif',
        'https://media1.tenor.com/images/d4bd24c980e46c66f67077aff59f0565/tenor.gif?itemid=13098645',
        'https://i.imgur.com/yUHa3wP.gif',
        'https://i.imgur.com/JHG3ZIs.gif',                  
        'https://i.imgur.com/CG2FHIn.gif',                  
        'https://i.imgur.com/97M30VK.gif',               
        'https://media1.tenor.com/images/6f24127f6e38323e7bc3b0dc6116d6ec/tenor.gif?itemid=7577375',               
        'https://gifimage.net/wp-content/uploads/2017/09/anime-kick-gif-2.gif',               
        'https://i.imgur.com/XLkyb8C.gif',               
        'https://gifimage.net/wp-content/uploads/2017/09/anime-kick-gif-6.gif',    
        'https://media1.tenor.com/images/c2c0bfb2b48e1dd32dae803ec4e5f17c/tenor.gif?itemid=9394812',           
    ];
    var rand = list[Math.floor(Math.random() * list.length)];
    let user = message.mentions.users.first() || client.users.cache.get(args[0]);
    if (!user) {
        return message.reply('Remember to mention someone to kick!');
    }
    let avatar = message.author.displayAvatarURL({ format: "png" });
    const embed = new Discord.MessageEmbed()
        .setTitle('C!kick')
        .setColor('#FF0000')
        .setDescription(`${message.author} Kicked ${user} :boom:`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail("https://pa1.narvii.com/5817/a58ab96f53bcd5fc00dfb5451e3c5610923e2c54_hq.gif")
        .setFooter('Angel Neko|Lord')
        .setAuthor(message.author.tag, avatar);
    await message.channel.send(embed);
}