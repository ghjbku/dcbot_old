const discord = require('discord.js');
var client = new discord.Client();
const prefix = "w!";
const commands = require('./commands_module.js');
var limited = false;
var mention_reply = false;
var reply_msg = "";

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('webserver bruh'));
app.listen(port, () =>
  console.log(`webserver bruh`)
);

function admin(message) {
  if (message.author.id == process.env.owner_id ||
    message.author.id == "0001" ||
    message.author.id == "0002") {
    return true;
  }
  return false;
}

function limit_rate(message, param, to_call) {
  //if(admin(message)){
  // return;
  //}
  if (!limited) {
    limited = true;
    if (param == "no") {
      to_call(message);
      setTimeout(function() {
        limited = false;
      }, 5000);
      return;
    } else {
      to_call(param, message);
      setTimeout(function() {
        limited = false;
      }, 5000);
    }
  }
}

function on_mention_reply() {
  mention_reply = true;
}

client.login(process.env.TOKEN);


client.on('ready', () => {
  client.user.setActivity(prefix + "help || " + prefix + "invite", { type: "LISTENING" });
  commands.init(client);
});

client.on("message", (message) => {

  if (message.author.bot) return;

  if (message.content.startsWith(prefix + "invite")) {
    limit_rate(message, "no", commands.invite);
  }

  if (message.content.startsWith(prefix + "help")) {
    limit_rate(message, prefix, commands.help);
  }

  if (message.content.startsWith(prefix + "shut")) {
    if (admin(message)) {
      commands.shutDown(message);
    } else {
      limit_rate(message, "no", commands.NoPerms);
    }
  }

  //
  if (message.content.startsWith(prefix + "test")) {
    cmd ='test';
    var args = message.content.slice(prefix.length + cmd.length).trim().split(/ +/g);
    commands.test(message,args[0],[".jpg",".png"]);
  }
  //

  if (message.content.startsWith(prefix + "emoji")) {
    cmd = "emoji";
    var argumentums = message.content.slice(prefix.length + cmd.length).trim().split(/ +/g);
    var name = argumentums[0];
    const em = client.emojis.cache.find(emoji => emoji.name === argumentums[0]);

    limit_rate(message, em, commands.emoji);
  }

  if (message.content.startsWith(prefix + "say")) {
    cmd = "say";
    var say = message.content.slice(prefix.length + cmd.length);
    limit_rate(message, say, commands.say);
  }

  if (message.content.startsWith(prefix + "whisper")) {
    var cmd = "whisper";
    limit_rate(message, prefix, commands.whisper);
    message.delete();
  }
  
  if(message.channel.type==='dm'){
    var me =client.users.cache.find(user =>user.id == process.env.owner_id);
    me.send(`${message.author.username} says: ${message.content}`);
  }

  if (message.content.startsWith(prefix + "purge")) {
    cmd = "purge";
    var argumentums = message.content.slice(prefix.length + cmd.length).trim().split(/ +/g);
    if (admin(message)) {
      message.channel.messages.fetch({ limit: argumentums[0] })
        .then(messages => message.channel.bulkDelete(messages));
    } else {
      limit_rate(message, "no", commands.NoPerms);
    }
  }

  //ping me
  if (message.mentions.users.first() != null) {
      if((message.mentions.users.first().id == process.env.owner_id) && mention_reply){
          if (reply_msg == "") {
            message.channel.send("wind is on hiatus");
          }
          else {
            message.channel.send(reply_msg);
          }
      }
  }

  //ping response switch
  if (message.content.startsWith(prefix + "mention")) {
    cmd = "mention";
    var mes = message.content.slice(prefix.length + cmd.length);
    if (mes != null) {
      reply_msg = mes;
    }
    on_mention_reply();
    message.channel.send(mention_reply);
  }
  
  if (message.content.startsWith(prefix + "off")) {
    mention_reply = false;
    message.channel.send(mention_reply);
  }

});