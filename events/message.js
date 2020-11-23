
module.exports = (client, message) => {

      if(message.author.bot) return;
      if(message.channel.type === "dm") return;

      const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
      const cmdcomuns = client.comuns.get(command);
      const cmdadministrator = client.administrator.get(command);
      
      if (message.content.indexOf(client.config.prefix) !== 0) return;
      if(cmdcomuns){
        cmdcomuns.run(client, message, args);
        
      }else if(cmdadministrator){
    
        cmdadministrator.run(client,message, args)
      } else {
        
        return;
      }
    };