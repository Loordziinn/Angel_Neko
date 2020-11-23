
exports.run = async (client, message) => {
	const Discord = require('discord.js')
	let botA = client.user.displayAvatarURL();

	message.delete();
    const ms = await message.channel.send("Pong!").then(message => message.delete())
	const clientms = ms.createdTimestamp - message.createdTimestamp;

	let avatar = message.author.displayAvatarURL({ format: "png" });
	const embed = new Discord.MessageEmbed()
	.setThumbnail("https://i.imgur.com/jhnRBUG.png")
	.setTitle("Veja seu ping:", `${botA}`)
	.addFields(
		{ name: '<:ping:768666566899925002> Seu ping é:', value:        + clientms + `ms`, inline: true },
		{ name: '<:nuvem:768666566568837151> API:', value: `       ${Math.round(client.ws.ping)}ms`, inline: true }
	)

	.setTimestamp()
	.setColor('#FF0000')
	.setFooter(`Angel Neko`, botA)
	.setAuthor(message.author.tag, avatar);
	message.channel.send(embed)
}