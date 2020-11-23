const Discord = require("discord.js")

exports.run = async(client, message, args) => {
    var list = [
        'https://i.imgur.com/o8W15ae.gif',
        'https://i.imgur.com/v47M1S4.gif',
        'https://i.imgur.com/r9aU2xv.gif',
        'https://i.imgur.com/diqFHSS.gif',
        'https://i.imgur.com/IESFOWD.gif',
        'https://i.imgur.com/cZWWATV.gif',
        'https://i.imgur.com/ya64bS2.gif',
        'https://i.imgur.com/QJbBsDJ.gif',
        'https://i.imgur.com/V706MEl.gif',
        'https://i.imgur.com/4oLIrwj.gif',
        'https://i.imgur.com/YoW9dvm.gif?noredirect',
        'https://i.imgur.com/bidVg3w.gif',
        'https://i.imgur.com/m5aSzlq.gif',
        'https://i.imgur.com/KTSN1AK.gif',
        'https://i.imgur.com/IAxUnda.gif',
        'https://i.imgur.com/dM7Yn.gif',
        'https://i.imgur.com/yLLtIQ1.gif',
        'https://i.imgur.com/5Fowm1T.gif',
        'https://i.imgur.com/rioNdmc.gif',
        'https://i.imgur.com/tuH4gqZ.gif',
        'https://i.pinimg.com/originals/60/b6/97/60b6972592a3939c4c96b7d7a9dc53bf.gif',
        'https://i.imgur.com/GE1psc2.gif',
        'https://i.pinimg.com/originals/a5/11/80/a51180e1d2fd6ce76281899b5afd59c0.gif',
        'https://media.tenor.com/images/aab83bd3725feeaccb9929f8ca964db9/tenor.gif',
        'https://i.imgur.com/6qYOUQF.gif',
        'https://i.pinimg.com/originals/32/09/15/320915992153abde2070a076552344e7.gif'
    ];
    var rand = list[Math.floor(Math.random() * list.length)];
    let user = message.mentions.users.first() || client.users.cache.get(args[0]);
    if (!user) {
        return message.reply('Remember to mention someone to hug!');
    }
    let avatar = message.author.displayAvatarURL({ format: "png" });
    const embed = new Discord.MessageEmbed()
        .setTitle('C!kick')
        .setColor('#FF0000')
        .setDescription(`${message.author} Embraced ${user} :boom:`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail("https://i.pinimg.com/originals/62/a6/c2/62a6c2e1399364bfb280a08232c4c0ad.gif")
        .setFooter('Angel Neko|Lord')
        .setAuthor(message.author.tag, avatar);
    await message.channel.send(embed);
}