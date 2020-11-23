const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'setrole',
    run: async (client, message, args) => {

        message.delete();

        if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`Você não tem as permissões necessárias`).then(m => m.delete({ timeout: 5000 }));

        if (!args[0] || !args[1]) return message.channel.send("Uso incorreto, o certo é <nome de usuário / id do usuário> <nome da função / id>").then(m => m.delete({ timeout: 5000 }))

        try {

             const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
             const roleName = message.guild.roles.cache.find(r => (r.name === args[1].toString()) || (r.id === args[1].toString().replace(/[^\w\s]/gi, '')));

             const alreadyHasRole = member._roles.includes(roleName.id);

             if (alreadyHasRole) return message.channel.send('O usuário já está com esse cargo.').then(m => m.delete({ timeout: 5000 }));

             const embed = new MessageEmbed()
                 .setTitle(`Cargo novo: ${roleName.name}`)
                 .setDescription(`${message.author} deu o cargo ${roleName} para o(a) ${member.user}`)
                 .setColor('#FF0000')
                 .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
                 .setFooter(new Date().toLocaleString('brazil'))

            return member.roles.add(roleName).then(() => message.channel.send(embed));
        } catch (e) {
            return message.channel.send('Tente dar um cargo existente da próxima vez.').then(m => m.delete({ timeout: 5000 })).then(() => console.log(e))
        }
    }
}