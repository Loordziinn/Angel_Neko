const Discord = require("discord.js")

exports.run = async(client, message, args) => {
    var list = [
        'https://i.imgur.com/MzAjNdv.gif',
        'https://i.imgur.com/OE7lSSY.gif',
        'https://i.imgur.com/lmY5soG.gif',
        'https://i.imgur.com/i1PIph3.gif',
        'https://i.imgur.com/9R4XQIv.gif',
        'https://i.imgur.com/eKcWCgS.gif',
        'https://i.imgur.com/sZhtvBR.gif',
        'https://i.imgur.com/0WWWvat.gif',
        'https://i.imgur.com/IgGumrf.gif',
        'https://i.imgur.com/mJSU1bx.gif',
        'https://i.imgur.com/uobBW9K.gif',
        'https://i.imgur.com/Oj0WE0R.gif',
        'https://i.imgur.com/JOtxMGW.gif',
        'https://i.imgur.com/KKAMPju.gif',
        'https://i.imgur.com/4Ad9iwh.gif',
        'https://i.imgur.com/QVB28lj.gif',
        'https://i.imgur.com/MGdlYsj.gif',
        'https://i.imgur.com/II1bakc.gif',
        'https://i.imgur.com/CtXHoOd.gif',
        'https://i.imgur.com/wQjUdnZ.gif',
        'https://i.imgur.com/g1aPpb7.gif',
        'https://i.imgur.com/0WIaa52.gif',
        'https://i.imgur.com/FozOXkB.gif',
        'https://i.imgur.com/gXPmxS4.gif'       
    ];
    var rand = list[Math.floor(Math.random() * list.length)];
    let user = message.mentions.users.first() || client.users.cache.get(args[0]);
    if (!user) {
        return message.reply('Lembre-se de mencionar alguém que queira chutar!');
    }
    let avatar = message.author.displayAvatarURL({ format: "png" });    
    const embed = new Discord.MessageEmbed()
        .setTitle('C!kiss')
        .setColor('#FF0000')
        .setDescription(`${message.author} Kissed ${user} :heart:`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail("https://media4.giphy.com/media/3ohs4Bj2OPOGcKn9Ic/giphy.gif")
        .setFooter('Angel Neko|Lord')
        .setAuthor(message.author.tag, avatar);
    await message.channel.send(embed);
}