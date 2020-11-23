
exports.run = async (client, message) => {
	const Discord = require('discord.js')
	let botA = client.user.displayAvatarURL();

	message.delete();

        const ms = await message.channel.send("Qual o dono?").then(message => message.delete())

        const clientms = ms.createdTimestamp - message.createdTimestamp;

        let avatar = message.author.displayAvatarURL({ format: "png" });
        const embed = new Discord.MessageEmbed()
        .setThumbnail(`${botA}`)
        .setColor("#FF0000")
        .setTitle("Quem me fez?")
        .setDescription(`Quem é o responsável pela minha existencia é o Lord, utilize o comando " ${config.prefix}server " e vá contatar ele se você encontrar um erro.`)
        .setTimestamp()
        .setFooter(`${config.prefix} | Angel Neko`)
        .setAuthor(message.author.tag, avatar);
        message.channel.send(embed)
}
