module.exports.run = (client, message, args) => {

        if(!message.member.hasPermission("KICK_MEMBERS")) 
            return message.channel.send("Você não tem as permissões necessárias.");
        
        const falar = args.slice(0).join(" ")
        message.delete();
        if(!falar) return;
        message.channel.send(`${falar}`)
    }
