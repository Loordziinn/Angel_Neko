const jimp = require ('jimp');
const config = require('../../config.json')

exports.run = async (client, message, args, database) => {
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    let db = await client.database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`).once('value');
    let dbfundo = await client.database.ref(`Servidores/Backgrounds/${message.guild.id}/${message.author.id}`).once('value');
    let dbsobre = await client.database.ref(`Servidores/Sobre_mim/${message.guild.id}/${message.author.id}`).once('value');
    let fundo = [];
    if (dbfundo.val() == null) {
        fundo = './commands/profile/Default.jpg';

        client.database.ref(`Servidores/Backgrounds/${message.guild.id}/${message.author.id}`).set({
            background: './commands/profile/Default.jpg'
        })
    } else {
        fundo = dbfundo.val().background
    }

    if (dbsobre.val() == null) {
        sobre = `Digite ${config.prefix}sobremim <texto> para escolher a sua bio.`;

        client.database.ref(`Servidores/Sobre_mim/${message.guild.id}/${message.author.id}`).set({
            sobremim: `Digite ${config.prefix}sobremim <texto> para escolher a sua bio.`
        })
    } else {
        sobre = dbsobre.val().sobre
    }
    
    message.channel.send(`Aguarde 5 segundo para aparecer o perfil!`).then(m => m.delete({ timeout: 5000 }));

    const fundinho = await jimp.read(fundo)
    const avatar = await jimp.read(message.author.displayAvatarURL({format: 'png', size: 1024}));
    const mask = await jimp.read(`./commands/profile/02.png`);
    const recor = await jimp.read(`./commands/profile/01.png`);
    const fonte = await jimp.loadFont(`./commands/profile/fonte.fnt`);
     
    mask.resize(398, 398);
    avatar.resize(398, 398);
    avatar.mask(mask, 0, 0)

    recor.composite(avatar, -21 , 348)
    recor.print(fonte, 30, 20, message.author.tag)
    recor.print(fonte, 1096, 486, `xp: ${db.val().xp}/${db.val().level*500}`)

    fundinho.resize(1400, 720)
    fundinho.composite(recor, 0, 0)
    recor.print(fonte, 1096, 486 `sobremim: ${db.val().sobremim}`)
    .write(`perfil.png`);
    message.channel.send(``, {files: ['perfil.png']});

}