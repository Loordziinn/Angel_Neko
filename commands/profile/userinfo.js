const { MessageEmbed } = require('discord.js');


module.exports = {
    name: "user-info",
    category: "extra",
    run: async (client, message, args) => {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        let status;
        switch (user.presence.status) {
            case "online":
                status = "<a:online_ld:780219174073008149>Online";
                break;
            case "dnd":
                status = "<a:dnd_ld:780219174462029864>Não perturbar";
                break;
            case "idle":
                status = "<a:idle_ld:780219173825544274>Ausente";
                break;
            case "offline":
                status = "<a:offline_ld:780219174168559616>Offline";
                break;
        }

        const embed = new MessageEmbed()
            .setTitle(`${user.user.username} stats`)
            .setColor(`#FF0000`)
            .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
            .addFields(
                {
                    name: ":bookmark:Tag discord: ",
                    value: user.user.tag,
                    inline: true
                },
                {
                    name: ":computer:ID do discord: ",
                    value: user.user.id,
                    inline: true
                },
                {
                    name: ':date:Conta criada dia:',
                    value: user.user.createdAt.toLocaleDateString("brazil"),
                    inline: true
                },
                {
                    name: ':green_circle:Entrou dia: ',
                    value: user.joinedAt.toLocaleDateString("brazil"),
                    inline: true
                },
                {
                    name: ":label:Status atual: ",
                    value: status,
                    inline: true
                },
                {
                    name: ":bulb:Activity: ",
                    value: user.presence.activities[0] ? user.presence.activities[0].name : `User isn't playing a game!`,
                    inline: true
                },
                {
                    name: ':link:Avatar link: ',
                    value: `[Click Here](${user.user.displayAvatarURL()})`,
                    inline: true
                },
                {
                    name: ':pencil:User Roles: ',
                    value: user.roles.cache.map(role => role.toString()).join(" ,"),
                    inline: true
                }
            )

        await message.channel.send(embed)
    }
}