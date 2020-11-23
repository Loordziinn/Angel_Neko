const Discord = require("discord.js");
const client = new Discord.Client();
const Enmap = require("enmap");
const firebase = require("firebase-admin");
const fs = require("fs");
const config = require("./config.json");
client.config = config;


var serviceAccount = require("./TokensFirebase.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://neko-coin.firebaseio.com"
});

const database = firebase.database();

client.database = database


client.on("ready", () => {
  let activities = [
          `Meu prefixo é " ${config.prefix} ".`,
          `O canal do lord! " ${config.prefix}yt ".`,
          `Eu estou online em ${client.guilds.cache.size} servidores.`,
          `Qualquer dúvida reporte no meu servidor de origem, " ${config.prefix}server ".`,
          `E tomando um café...`,
          `Caso de dúvida uilize " ${config.prefix}help ".`
      ],
      i = 0;
  setInterval(() => client.user.setActivity(`${activities[i++ %
activities.length]}`, {
      type: "WATCHING"
  }), 10000); //WATCHING, LISTENING, PLAYING, STREAMING
  console.log("Ohayoooo Angel Neko acordoooo!")
});

client.on('message', function(message){

  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  
  database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`)
  .once('value').then(async function(snap) {
    if (snap.val() == null) {
      database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`)
      .set({
        name: message.author.username,
        xp: 0,
        level: 1
      })
    } else {
      let gerarXp = Math.floor(Math.random() * 10 ) + 1;

      if (snap.val().level*500 <= snap.val().xp) {
        database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`)
          .update({
            xp: 0,
            level: snap.val().level + 1
          });
          message.channel.send(`Parabéns, ${message.author}! Você upou para o level ${snap.val().level+1}`)
      } else {
        database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`)
          .update({
            xp: snap.val().xp + gerarXp
          })
        }
      }
    })
  })

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);

  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});


client.administrator = new Enmap();

fs.readdir("./commands/administrator/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/administrator/${file}`);
    let commandName = file.split(".")[0];

    console.log(`carregado o comando: ${commandName}`);

    client.administrator.set(commandName, props);
  });
});


client.comuns = new Enmap();

fs.readdir("./commands/profile/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/profile/${file}`);
    let commandName = file.split(".")[0];
    console.log(`carregado o comando: ${commandName}`);
    client.comuns.set(commandName, props);
  });
});

fs.readdir("./commands/Entreterimento/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/Entreterimento/${file}`);
    let commandName = file.split(".")[0];
    console.log(`carregado o comando: ${commandName}`);
    client.comuns.set(commandName, props);
  });
});

fs.readdir("./commands/info/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/info/${file}`);
    let commandName = file.split(".")[0];
    console.log(`carregado o comando: ${commandName}`);
    client.comuns.set(commandName, props);
  });
});

fs.readdir("./commands/padrões/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/padrões/${file}`);
    let commandName = file.split(".")[0];
    console.log(`carregado o comando: ${commandName}`);
    client.comuns.set(commandName, props);
  });
});

    client.login(config.token);
