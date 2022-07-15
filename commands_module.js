const commands = new Map([
  ["invite", 'sends a bot invite to your dms'],
  ["help", 'shows all commands and their description'],
  ["shut","shuts down the bot(only owner&few trusted people)"],
  ["emoji *name of emoji*","sends the emoji you put as parameter"],
  ["say *what to say*","makes the bot say what you write"],
  ["whisper","sends message to mentioned user"]
]);
var client = null;
const init_func = (c) => {
    client = c;
}

const invite_func = (message) =>{
     message.author.send("https://discordapp.com/oauth2/authorize?&client_id=542665110724935681&scope=bot&permissions=8");
      message.channel.send("invite link sent to your DMs");
}

const help_func = (prefix,message) =>{
    commands.forEach((value, key) => {
    message.channel.send('**'+prefix+key+'**\n*'+value+'*\n');
    })
}

const shut_func = (message) =>{
  message.delete();
        message.channel.send("shutting down!").then(m=>{
            setTimeout(function(){
                m.delete();
                setTimeout(function(){
                process.exit(1);
                },1000);
            },2000);
        }) 
}

const fail_func = (message)=>{
  message.delete();
        message.channel.send("you don't have permission to use this command").then(m=>{
            setTimeout(function(){
                m.delete();
            },2000);
        });
}

const emoji_func = (emoji,message) => {
  message.delete();
  message.channel.send(`${emoji}`);
}

const say_func = (param,message)=>{
  message.delete();
  message.channel.send(`${param}`);
}

const whisp_func = (prefix,message)=>{
  var cmd = "whisper";
  var argumentums = message.content.slice(prefix.length + cmd.length).trim().split(/ +/g);
  var mention =client.users.cache.find(user =>user.username.toLowerCase().match(argumentums[0]));
  if(mention == null){return;}
  var mentionmessage =         message.content.slice(prefix.length+cmd.length+argumentums[0].length+1);
  mention.send(`${mentionmessage}`);
}

const test_func = (message,resource,whitelist)=>{
  for(var ext of whitelist){
       if (resource.toLowerCase().endsWith(ext)){
         message.channel.send(`${ext} is accepted,so ${resource} will pass through`);
         return;
       }
  }
   message.channel.send(`${resource} is not whitelisted`);
}

module.exports = {
    init : init_func,
    invite: invite_func,
    help: help_func,
    shutDown: shut_func,
    NoPerms: fail_func,
    emoji: emoji_func,
    say: say_func,
    whisper: whisp_func,
    test: test_func
}