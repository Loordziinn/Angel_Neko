
exports.run = async (client, message) => {
	const Discord = require('discord.js')
	let botA = client.user.displayAvatarURL();

	message.delete();

        const ms = await message.channel.send("Youtubeee!").then(message => message.delete())

        const clientms = ms.createdTimestamp - message.createdTimestamp;

        let avatar = message.author.displayAvatarURL({ format: "png" });
        const embed = new Discord.MessageEmbed()
        .setThumbnail(`https://i.pinimg.com/originals/98/dc/c9/98dcc9ec298b381ec7d4b3c422f0dbf3.gif`)
        .setColor("#FF0000")
        .setTitle("Youtube!!!")
        .setTimestamp()
        .setDescription("Eii!! Fique atento nos vídeos do Lord!! Ele tem um canal no Youtube também, vá ver e não esqueça de deixar seu like e se inscrever!! :heart:")
        .addField("Link:", "https://www.youtube.com/channel/UClTVppK8TqFzA6zgXq7cimQ?view_as=subscriber")
        .setFooter(`Angel Neko`)
        .setAuthor(message.author.tag, avatar);
        message.channel.send(embed)
}
