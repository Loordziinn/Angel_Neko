
exports.run = async (client, message, args) => {
	const Discord = require('discord.js')
	let botA = client.user.displayAvatarURL();

	message.delete();

        const ms = await message.channel.send("Reputações!!!").then(message => message.delete())

        const clientms = ms.createdTimestamp - message.createdTimestamp;

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        let avatar = message.author.displayAvatarURL({ format: "png" });
        const embed = new Discord.MessageEmbed()
        .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
        .setColor("#FF0000")
        .setTitle("Reputações!!")
        .setDescription("<a:75:763454197915844649> Quer ajudar meu dono? De reputações a ele, as reputações fazem parte da loritta. Ela é uma ótima bot também!")
        .setTimestamp()
        .addField("Link:", "https://loritta.website/user/397049160936980490/rep?guild=717075689538453596&channel=720441873709400124")
        .setFooter(`Angel Neko`)
        .setAuthor(message.author.tag, avatar);
        message.channel.send(embed)
}
