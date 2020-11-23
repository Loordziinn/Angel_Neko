const Discord = require("discord.js")

exports.run = async(client, message, args) => {
    var list = [
        'https://i.imgur.com/IMb9rAx.gif',
        'https://i.imgur.com/Ous9caH.gif',
        'https://i.imgur.com/dbrWkYU.gif',
        'https://i.imgur.com/14inA9e.gif',
        'https://i.imgur.com/UcGioIH.gif',
        'https://i.imgur.com/WoZZIPD.gif',
        'https://i.imgur.com/rViw7vP.gif',
        'https://i.imgur.com/xTsSaaC.gif',
        'https://i.imgur.com/KdOVkHQ.gif',
        'https://i.imgur.com/7DjBYay.gif',
        'https://i.imgur.com/2fWBDUI.gif',
        'https://i.imgur.com/qtTd87g.gif',
        'https://i.imgur.com/CVDLOQX.gif',
        'https://i.imgur.com/d8qrKq0.gif',
        'https://i.imgur.com/kSbIc8p.gif',
        'https://i.pinimg.com/originals/49/0e/9f/490e9f19bb5ab96cb703f2526ada3529.gif',
        'https://i.imgur.com/qoiALBR.gif',
        'https://i.imgur.com/EUglqK5.gif',
        'https://i.imgur.com/efNFANT.gif',
        'https://i.imgur.com/hBbIcZl.gif',
        'https://media.tenor.com/images/65e112d486200bdff9734d441874dfe4/tenor.gif',
        'https://media.tenor.com/images/2a99bb2390c07142575b5ad44d0f4b6b/tenor.gif',
        'https://i.imgur.com/Cva34hy.gif',
        'https://media.tenor.com/images/251d736302c3dcdb755b9aa59174556d/tenor.gif',
        'https://thumbs.gfycat.com/JollyBonyFlickertailsquirrel-max-1mb.gif',
        'https://i.imgur.com/DJd9E6s.gif'
    ];
    var rand = list[Math.floor(Math.random() * list.length)];
    let user = message.mentions.users.first() || client.users.cache.get(args[0]);
    if (!user) {
        return message.reply('Remember to mention someone to say goodbye!');
    }
    let avatar = message.author.displayAvatarURL({ format: "png" });
    const embed = new Discord.MessageEmbed()
        .setTitle('C!bye')
        .setColor('#FF0000')
        .setDescription(`${message.author} Wished goodbye to ${user} :wave:`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail("https://i.pinimg.com/originals/62/a6/c2/62a6c2e1399364bfb280a08232c4c0ad.gif")
        .setFooter('Angel Neko|Lord')
        .setAuthor(message.author.tag, avatar);
    await message.channel.send(embed);
}