const Discord = require('discord.js')
const config = require('../../config.json')

exports.run = async (client, message, args) => {

let avatar = message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 });
const embed = new Discord.MessageEmbed()
    .setColor('#FF0000')
    .setThumbnail("https://i.imgur.com/Lpw7XkB.png")
    .setTitle("<:folder:769009174004629524> Lista de Comandos:")
    .setDescription(`<:administrator:769009174012231680> | Administração\n\n<:info:769009173962424331> | Informações\n\n<:confete:769009174028746752> | Diversão\n
<:profile:769199944460009512> | Perfil\n\n<:cloudone:779575048452440064> | Padrões
    
<:linkld:779583797293219840> | **Links Importantes:**

<:arrowrght:779582954379935744> [**ME ADICIONE EM SEU SERVIDOR**](https://discord.com/api/oauth2/authorize?client_id=753071192620925119&permissions=8&scope=bot)
<:arrowrght:779582954379935744> [**MEU SERVIDOR DE SUPORTE**](https://discord.gg/2CZv7VGN6j)`)
    .setTimestamp()
    .setFooter(`Comando solicitado por ${message.member.displayName}`, message.author.displayAvatarURL({Size: 32}))
    .setAuthor(message.author.tag, avatar);
    
message.channel.send(embed).then(message => {
        message.react('769009174004629524').then(r => {
            message.react('769009174012231680').then(r => {
            message.react('769009173962424331').then(r => {
            message.react('769009174028746752').then(r => {
            message.react('769199944460009512').then(r => {
        message.react('779575048452440064').then(r => {
        })
        })
    })
    })
})
})
    const categoryFilter = (reaction, user) => reaction.emoji.id === '769009174004629524' && user.id !== client.user.id
        const admFilter = (reaction, user) => reaction.emoji.id === '769009174012231680' && user.id !== client.user.id
        const infoFilter = (reaction, user) => reaction.emoji.id === '769009173962424331' && user.id !== client.user.id
        const funFilter = (reaction, user) => reaction.emoji.id === '769009174028746752' && user.id !== client.user.id
        const profileFilter = (reaction, user) => reaction.emoji.id === '769199944460009512' && user.id !== client.user.id
    const padraoFilter = (reaction, user) => reaction.emoji.id === '779575048452440064' && user.id !== client.user.id

    const category = message.createReactionCollector(categoryFilter);
        const adm = message.createReactionCollector(admFilter);
        const info = message.createReactionCollector(infoFilter);
        const fun = message.createReactionCollector(funFilter);
        const profile = message.createReactionCollector(profileFilter);
    const padrao = message.createReactionCollector(padraoFilter);

    category.on('collect', r2 => {
        embed.setTitle("<:folder:769009174004629524> Lista de Comandos:")
        embed.setThumbnail("https://i.imgur.com/Lpw7XkB.png")
        embed.setDescription(`<:administrator:769009174012231680> | Administração\n\n<:info:769009173962424331> | Informações\n\n<:confete:769009174028746752> | Diversão\n
<:profile:769199944460009512> | Perfil\n\n<:cloudone:779575048452440064> | Padrões
            
<:linkld:779583797293219840> | **Links Importantes:**
        
<:arrowrght:779582954379935744> [**ME ADICIONE EM SEU SERVIDOR**](https://discord.com/api/oauth2/authorize?client_id=753071192620925119&permissions=8&scope=bot)
<:arrowrght:779582954379935744> [**MEU SERVIDOR DE SUPORTE**](https://discord.gg/2CZv7VGN6j)`)
        message.edit(embed)

    })
    
    adm.on('collect', r2 => {
        embed.setTitle("Comandos Administrativos!")
        embed.setThumbnail("https://i.imgur.com/Lpw7XkB.png")
        embed.setDescription(`**<:administrator:769009174012231680> » (Adminins)**

**Ban:**
**Como usar:** ${config.prefix}ban <id/menção>.
**Desc:** Banir um usuário.

**Unban:**
**Como usar:** ${config.prefix}unban <id>.
**Desc:** Desbanir algum usuário.

**Clear:**
**Como Usar:** ${config.prefix}clear <1 a 99 mensagens>.
**Desc:** Limpar o chat.
 
**Expulsar:**
**Como usar:** ${config.prefix}expulsar <id/menção>.
**Desc:** Expulsar alguém do servidor.

**Say:**
**Como usar:** ${config.prefix}say <mensagem>.
**Desc:** Falar com a bot.

**Setrole:**
**Como usar:** ${config.prefix}setrole <id/menção> <cargo>.
**Desc:** Dar um cargo para alguém.`)
        message.edit(embed)

    })

    info.on('collect', r2 => {
        embed.setTitle("Comandos Informativos")
        embed.setThumbnail("https://i.imgur.com/Lpw7XkB.png")
        embed.setDescription(`**<:info:769009173962424331> » (Info)**
**Rep:**
**Como usar:** ${config.prefix}rep.
**Desc:** Veja algumas informações sobre reputações.

**Serverinfo:**
**Como usar:** ${config.prefix}serverinfo.
**Desc:** Veja as estatísticas do servidor atual.

**Yt:**
**Como usar:** ${config.prefix}yt.
**Desc:** Veja um canal no YouTube.

**Ping:**
**Como usar:** ${config.prefix}ping.
**Desc:** Veja como está o desempenho da sua internet.`)
        message.edit(embed)
    
    })   
 
    fun.on('collect', r2 => {
        embed.setTitle("Comandos de Entreterimento!")
        embed.setThumbnail("https://i.imgur.com/Lpw7XkB.png")
        embed.setDescription(`**<:confete:769009174028746752> » (Fun)**
**Kick:**
**Como usar:** ${config.prefix}kick <id/menção>.
**Desc:** Chutar alguém.

**Kiss:**
**Como usar:** ${config.prefix}kiss <id/menção>.
**Desc:** Beijar alguém.

**Hug:**
**Como usar:** ${config.prefix}hug <id/menção>.
**Desc:** Abraçar alguém.

**Bye:**
**Como usar:** ${config.prefix}bye <id/menção>.
**Desc:** Se despedir de alguém.`)
        message.edit(embed)
    })
    
    profile.on('collect', r2 => {
        embed.setTitle("Comandos de Perfil!")
        embed.setThumbnail("https://i.imgur.com/Lpw7XkB.png")
        embed.setDescription(`**<:profile:769199944460009512> » (Perfil)**

**Perfil:**
**Como usar:** ${config.prefix}perfil (id/menção) | **Manutenção <:maintenance:769009174293250049>**.
**Desc:** Ver seu perfil com pequenas informações suas.
        
**Sobremim:** **MANUTENÇÃO!!!**
**Como usar:** ${config.prefix}sobremim <Frase que querer>.
**Desc:** Mudar a frase no seu perfil. 

**Perfilbackground:**
**Como usar:** ${config.prefix}perfilbackground <Link do background>
**Desc:** Mudar a foto de fundo do seu perfil | userinfo.`)
        message.edit(embed)
    })

    padrao.on('collect', r2 => {
        embed.setTitle("Comandos Padrões")
        embed.setThumbnail("https://i.imgur.com/Lpw7XkB.png")
        embed.setDescription(`**<:cloudone:779575048452440064> » (Padrões)**

**Avatar:**
**Como usar:** ${config.prefix}avatar (id/menção).
**Desc:** Visualizar o seu avatar em uma escala maior ou o da pessoa mencionada.`)
        message.edit(embed)
    })
})
}
