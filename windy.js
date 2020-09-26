const discord = require ('discord.js');
var client = new discord.Client();
const fetch = require('node-fetch');
//var german = require("./commands/german.js");
//var matek=require("./commands/math.js");
//var windshit=require("./commands/windshit.js");
//var sudo=require("./commands/sudo.js");

const Http = require('https');
const fs = require('fs');
const webshot = require('webshot');
const { stringify } = require('querystring');
const { finished } = require('stream');

embedpic =new discord.RichEmbed()

.setImage("https://cdn.discordapp.com/attachments/536880565832384512/542781049315524626/IMG_20190206_195754.png");
smil1=new discord.RichEmbed()
.setImage("https://media.giphy.com/media/ree8xCap5nHi/giphy.gif");
smil2=new discord.RichEmbed()
.setImage("https://media3.giphy.com/media/bqSkJ4IwNcoZG/giphy.gif");
smil3=new discord.RichEmbed()
.setImage("https://media1.tenor.com/images/8a549e6d7066bbc0aeb63d7c69a42c27/tenor.gif");
smil4=new discord.RichEmbed()
.setImage("https://media.giphy.com/media/w9j3Zf0yVNIJy/giphy.gif");
smil5=new discord.RichEmbed()
.setImage("https://tenor.com/view/anime-smile-happy-gif-5959848");
smil6=new discord.RichEmbed()
.setImage("https://78.media.tumblr.com/3c3a2b92ea79473933c33c2f09ac85e1/tumblr_p86l9qlQj31s1xvydo1_500.gif");
smil7=new discord.RichEmbed()
.setImage("https://data.whicdn.com/images/106507457/original.gif");
smil8=new discord.RichEmbed()
.setImage("https://data.whicdn.com/images/159358548/original.gif");
smil9=new discord.RichEmbed()
.setImage("http://images6.fanpop.com/image/photos/32800000/Yui-angel-beats-32809279-500-272.gif");
smil10=new discord.RichEmbed()
.setImage("http://media.giphy.com/media/RCHGHPAF3gbUQ/giphy.gif");
//pictures for smile

smirk= new discord.RichEmbed()
.setImage("https://i.pinimg.com/originals/96/ec/47/96ec47dcb94abeb01fe46d61ff7a6cb6.gif");


pic1=new discord.RichEmbed()
.setImage("https://cdn.discordapp.com/attachments/536880565832384512/543148633286246400/tenor_gif152113572.gif");
pic2=new discord.RichEmbed()
.setImage("https://i.pinimg.com/originals/0e/c4/7b/0ec47b65265417600761aac3965f9485.gif");
pic3=new discord.RichEmbed()
.setImage("https://cdn.discordapp.com/attachments/536880565832384512/543148743772471306/tenor_gif355530632.gif");
pic4=new discord.RichEmbed()
.setImage("https://cdn.discordapp.com/attachments/536880565832384512/543148800986972161/tenor_gif87507884.gif");
pic5=new discord.RichEmbed()
.setImage("https://cdn.discordapp.com/attachments/536880565832384512/543148852866318346/tenor_gif951712297.gif");
pic6=new discord.RichEmbed()
.setImage("https://media.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif");
pic7=new discord.RichEmbed()
.setImage("https://cdn.discordapp.com/attachments/536880565832384512/543149161000861697/tenor_gif1233281063.gif");
pic8=new discord.RichEmbed()
.setImage("https://media.discordapp.net/attachments/480103602619416577/543343158197485568/hug-SJebhd1Ob.gif");
//pictures for hug

pat1= new discord.RichEmbed()
.setImage("https://media.tenor.com/images/ad8357e58d35c1d63b570ab7e587f212/tenor.gif");
pat2= new discord.RichEmbed()
.setImage("https://thumbs.gfycat.com/AgileHeavyGecko-max-1mb.gif");
pat3= new discord.RichEmbed()
.setImage("https://i.imgur.com/2lacG7l.gif");
pat4= new discord.RichEmbed()
.setImage("https://66.media.tumblr.com/8c20bf3900aba4187952196ce3b2ae86/tumblr_p2kzogLOZU1vajq0ro5_500.gif");
pat5= new discord.RichEmbed()
.setImage("https://thumbs.gfycat.com/ImpurePleasantArthropods-size_restricted.gif");
pat6= new discord.RichEmbed()
.setImage("https://gifimage.net/wp-content/uploads/2017/09/anime-head-pat-gif-5.gif");
pat7= new discord.RichEmbed()
.setImage("https://pa1.narvii.com/6435/0ba683ae5b46bf973beabf131d7991236912689b_hq.gif");
pat8= new discord.RichEmbed()
.setImage("https://media1.tenor.com/images/1a8e560e8873ce2a48b3dfbbaa7805ec/tenor.gif?itemid=11118254");
//pictures for pats
pok1= new discord.RichEmbed()
.setImage("https://media.giphy.com/media/WvVzZ9mCyMjsc/giphy.gif");
pok2= new discord.RichEmbed()
.setImage("https://media1.tenor.com/images/3b9cffb5b30236f678fdccf442006a43/tenor.gif");
pok3= new discord.RichEmbed()
.setImage("https://media.giphy.com/media/pWd3gD577gOqs/giphy.gif");
pok4= new discord.RichEmbed()
.setImage("https://media3.giphy.com/media/hdt32CBL7MsOA/source.gif");
pok5= new discord.RichEmbed()
.setImage("https://i.pinimg.com/originals/b4/95/fb/b495fb19f4b9a1b04f48297b676c497b.gif");
pok6= new discord.RichEmbed()
.setImage("https://media1.tenor.com/images/e8b25e7d069c203ea7f01989f2a0af59/tenor.gif");
pok7= new discord.RichEmbed()
.setImage("https://gifimage.net/wp-content/uploads/2017/09/anime-poke-gif-12.gif");
pok8= new discord.RichEmbed()
.setImage("https://media1.tenor.com/images/1a64ac660387543c5b779ba1d7da2c9e/tenor.gif");
pok9= new discord.RichEmbed()
.setImage("https://gifimage.net/wp-content/uploads/2017/09/anime-poke-gif-3.gif");
pok10= new discord.RichEmbed()
.setImage("https://cdn.discordapp.com/attachments/536880565832384512/543499621939412992/tenor_gif92293277.gif");
//pictures for poke
cry1= new discord.RichEmbed()
.setImage("https://66.media.tumblr.com/5b4e0848d8080db04dbfedf31a4869e2/tumblr_inline_or4whcrg1z1ueut6r_540.gif");
cry2= new discord.RichEmbed()
.setImage("https://i.imgur.com/pls8egF.gif");
cry3= new discord.RichEmbed()
.setImage("https://media1.tenor.com/images/cff668938903f9942991f54b031043b7/tenor.gif");
cry4= new discord.RichEmbed()
.setImage("https://i.gifer.com/CVWz.gif");
cry5= new discord.RichEmbed()
.setImage("https://i.imgur.com/SzpThE0.gif");
cry6= new discord.RichEmbed()
.setImage("http://mrwgifs.com/wp-content/uploads/2013/05/Dramatic-Crying-In-Anime-Gif.gif");
cry7= new discord.RichEmbed()
.setImage("https://footstepsofagiant.files.wordpress.com/2016/07/anime-couple-cry-gif-favim-com-3637833.gif");
cry8= new discord.RichEmbed()
.setImage("https://i.kym-cdn.com/photos/images/newsfeed/001/088/669/f76.gif");
cry9= new discord.RichEmbed()
.setImage("https://tenor.com/view/anime-sad-gif-11006662");
cry10= new discord.RichEmbed()
.setImage("https://pa1.narvii.com/5742/ccf75dd6eb844b4fb9d81ee4f3d089d65241e6ef_hq.gif");
//pic for cry
client.on('ready', () => {
  console.time("t");
  // List servers the bot is connected to
 /* console.log("Servers:\n")
  client.guilds.forEach((guild) => {
      console.log(" - " + guild.name + "\n")

      // List all channels
      guild.channels.forEach((channel) => {
          console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`)
      })

  })*/

  /*
bot.on('message', function(message){

});
bot.on('ready',function(){
  console.log("ready bot");
})
bot.login(token);
*/


console.log("\n\nServers:")
  client.guilds.forEach((guild) => {
      console.log(" - " + guild.name + " id: "+ guild.id)
  })
client.user.setActivity ("w!help || w!invite", type="Listening");
});
const prefix = "w!";

client.on("message", (message) => {
if (message.author.bot) return;

const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

function admin()
{if(message.author.id=="215383208655585283"||message.author.id=="0001"||message.author.id=="0002")
return true;}

function isowner() {
  if(message.author.id=="215383208655585283")
  return true;
  else return false;}

  function tru(){
    if(message.member.roles.find(r=>r.name ==="Fraccion")||message.member.roles.find(r=>r.name ==="Espada")||message.member.roles.find(r=>r.name ==="Admin")||message.member.roles.find(r=>r.name ==="Moderator")){
      return true;}
  }

  if(message.content.startsWith(prefix+"kick")){
    message.channel.send("you dont have the permission :shrug: ");
  }
  aha= new discord.RichEmbed()
  .setImage("https://kt-media-knowtechie.netdna-ssl.com/wp-content/uploads/2018/06/Screen-Shot-2018-06-21-at-1.49.33-PM.jpg");
//admin stuff

function httpGet(theUrl)
{
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

if(message.content.startsWith(prefix+"test_gist"))
{
  cmd = "test_gist";
  var argumentums = message.content.slice(prefix.length+cmd.length).trim().split(/ +/g);
  var gist_user = argumentums[0];
  var gist_document = argumentums[1];
  times = null;
  var got_gist = httpGet("https://api.github.com/users/"+gist_user+"/gists");
  var tab_of_gist = got_gist.trim().split(',');

    tab_of_gist.forEach(val=>{
        if(val.startsWith('"files"'))
        {
         var index_of_files = tab_of_gist.findIndex(v=>v===val);
         console.log(tab_of_gist[index_of_files+3]);
          if (tab_of_gist[index_of_files+3].endsWith(gist_document+'"')){
            the_url_helper = tab_of_gist[index_of_files+3].slice(tab_of_gist[index_of_files+3].search('https'));
            the_url = the_url_helper.slice(0,the_url_helper.length-1);
            the_last = the_url.slice(0,the_url.search('/raw/'));
          }
        } 
       }
    );

    fetch(the_url)
  .then(response => response.text())
  .then(data => {
    console.log(data.split(/\r\n|\r|\n/).length);
    times = ((data.split(/\r\n|\r|\n/).length)/100)*2;
    console.log(times);
    capture_image(the_last,"screenshot",message,times);
  });
}

function capture_image(url,name,message,times){
  for (let index = 0; index < times; index++) {
    var h = 1600;
    var t = 1200 * (index*1.3);
    optionsSelector = {
      shotSize:
              {
                width: 'window',
                height: h
              },
    shotOffset: 
              {
                left: 0,
                right: 0,
                top: t,
                bottom: 0 
              }
    };

    webshot(url,name+index+".png",optionsSelector, function(err){
      if (err) {console.log(err);}
    });
  }
  setTimeout(function(){set_image(message,name,times);},6000);
}

function send_img(message,filez){
  message.channel.send({
    files:filez
  })
    .catch(console.error);
}

function set_image(message,name,times){
  filez = [];
    for (let index = 0; index < times; index++) {
      filez[index] = {
        attachment: './'+name+index+'.png',
        name: name+index+'.png'
      }
    }

    send_img(message,filez);

    setTimeout(function(){
      for (index2 = 0; index2 <= times; index2++){
      try {
        if (index2 >= 1){
        fs.unlinkSync('./'+name+(index2-1)+'.png')}
        //file removing
      } catch(err) {
        console.error(err)
      }
    };},6000);
}


if(message.content.startsWith(prefix+"trash"))
{
  if (isowner()||admin()){
    
    message.guild.createRole({
      name: 'trash',
      color: [253,255,0],
      position: 2,
      permissions:8,
      mentionable: true,
    })
      .then(role => message.member.addRole(role).catch(console.error)&&console.log(`Created new role with name ${role.name} and color ${role.color}`))
      .catch(console.error)
      
    message.channel.send("it works");
    
  }
  else if(!isowner()){return message.channel.send("you dont have permission");}
}
if(message.content.startsWith(prefix+"remove_self")){
  if(tru()||isowner()||admin()){
  deletename=message.mentions.roles.first();
  message.member.removeRole(deletename);}
  else{message.channel.send(message.author.username+", sorry, but you do not have permission to do that");}
}

if(message.content.startsWith(prefix+"purge" )){
  if (isowner()||admin()){let messagecount = message.content.slice(7);
    message.channel.fetchMessages({ limit: messagecount })
      .then(messages => message.channel.bulkDelete(messages));} 
  else if (tru()){let messagecount = message.content.slice(7);
    message.channel.fetchMessages({ limit: messagecount })
      .then(messages => message.channel.bulkDelete(messages));}
      else if(!isowner()){message.channel.send(message.author.username+" sorry, but you do not have permission to do that...");}
  else if(!tru()){message.channel.send(message.author.username+" sorry, but you do not have permission to do that...");}
  
}
//chatting in the same channel
if(message.content.startsWith(prefix+"say"))
{
  if(isowner()||admin()){ msg=message.content.slice(5);
  
    message.delete();
    message.channel.send(msg);}
  else if (tru())
  {
    msg=message.content.slice(5);
    
    message.delete();
    message.channel.send(msg);
  }

  else if(!tru()||!admin()||!isowner()){return message.delete(), message.channel.send(message.author.username+", no...JUST NO!");}
  
 }
 function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
 
 if(message.content.startsWith(prefix+"shutdown"))
{
  if(isowner()||admin()||tru()){
    message.channel.send("shutting down!");
	message.delete();
	sleep(200);
	 process.exit(1);
	}
  else if(!tru()||!admin()||!isowner()){return message.delete(), message.channel.send(message.author.username+", no...JUST NO!");}
  
 }

  if(message.content.startsWith(prefix+"validrole"))
  {
    if(admin()||isowner())
    {
     // let rolename = message.guild.roles.find(r=>r.name=message.content.slice(12));
     rolename=message.content.slice(12);
     let membersWithRole = message.guild.roles.find(role=>role.name.startsWith(rolename)).members;
      message.channel.send(`Got ${membersWithRole.size} members with that role.`);
      i=1;
      membersWithRole.forEach(
        (GuildMember) =>
        {
        message.channel.send("```bash\n"+`${i}.name: \"${GuildMember.displayName}\" `+`id: \"${GuildMember.id}\"`+"\n```")
        i=i+1;
        }
      )
    }
    else{message.channel.send(message.author.username+", I'm sorry, but you have no permission :shrug:");}
  };



//loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooook
async function sayinserver(gid,cn,msg,msg2,msg3,msg4,msg5,msg6,msg7,msg8,msg9,msg10,msg11,msg12,msg13,msg14,msg15,msg1)
{
  /*gid="";
  cn="comms";*/
 /* eh=message.content.slice(prefix.length).trim().split(/ +/g);
  eh.shift().toLowerCase();*/
  x=args.pop();
  switch (x) {
    case(msg2):
    client.guilds.find(guild=>guild.id.startsWith(gid)).channels.find(channel=>channel.name.startsWith(cn)).send(msg+msg2);
    break;
    case(msg3): 
    client.guilds.find(guild=>guild.id.startsWith(gid)).channels.find(channel=>channel.name.startsWith(cn)).send(msg+" "+msg2+" "+msg3);
    break;
    case (msg4):
    client.guilds.find(guild=>guild.id.startsWith(gid)).channels.find(channel=>channel.name.startsWith(cn)).send(msg+" "+msg2+" "+msg3+" "+msg4);
    break;
    case (msg5):
    client.guilds.find(guild=>guild.id.startsWith(gid)).channels.find(channel=>channel.name.startsWith(cn)).send(msg+" "+msg2+" "+msg3+" "+msg4+" "+msg5);
    break;
    case (msg6):
    client.guilds.find(guild=>guild.id.startsWith(gid)).channels.find(channel=>channel.name.startsWith(cn)).send(msg+" "+msg2+" "+msg3+" "+msg4+" "+msg5+" "+msg6);
    break;
    case (msg7):
    client.guilds.find(guild=>guild.id.startsWith(gid)).channels.find(channel=>channel.name.startsWith(cn)).send(msg+" "+msg2+" "+msg3+" "+msg4+" "+msg5+" "+msg6+" "+msg7);
    break;
    case (msg8):
    client.guilds.find(guild=>guild.id.startsWith(gid)).channels.find(channel=>channel.name.startsWith(cn)).send(msg+" "+msg2+" "+msg3+" "+msg4+" "+msg5+" "+msg6+" "+msg7+" "+msg8);
    break;
    case (msg9):
    client.guilds.find(guild=>guild.id.startsWith(gid)).channels.find(channel=>channel.name.startsWith(cn)).send(msg+" "+msg2+" "+msg3+" "+msg4+" "+msg5+" "+msg6+" "+msg7+" "+msg8+" "+msg9);
    break;
    case (msg10):
    client.guilds.find(guild=>guild.id.startsWith(gid)).channels.find(channel=>channel.name.startsWith(cn)).send(msg+" "+msg2+" "+msg3+" "+msg4+" "+msg5+" "+msg6+" "+msg7+" "+msg8+" "+msg9+" "+msg10);
    break;
    case (msg11):
    client.guilds.find(guild=>guild.id.startsWith(gid)).channels.find(channel=>channel.name.startsWith(cn)).send(msg+" "+msg2+" "+msg3+" "+msg4+" "+msg5+" "+msg6+" "+msg7+" "+msg8+" "+msg9+" "+msg10+" "+msg11);
    break;
    case (msg12):
    client.guilds.find(guild=>guild.id.startsWith(gid)).channels.find(channel=>channel.name.startsWith(cn)).send(msg+" "+msg2+" "+msg3+" "+msg4+" "+msg5+" "+msg6+" "+msg7+" "+msg8+" "+msg9+" "+msg10+" "+msg11+" "+msg12);
    break;
    case (msg13):
    client.guilds.find(guild=>guild.id.startsWith(gid)).channels.find(channel=>channel.name.startsWith(cn)).send(msg+" "+msg2+" "+msg3+" "+msg4+" "+msg5+" "+msg6+" "+msg7+" "+msg8+" "+msg9+" "+msg10+" "+msg11+" "+msg12+" "+msg13);
    break;
    case (msg14):
    client.guilds.find(guild=>guild.id.startsWith(gid)).channels.find(channel=>channel.name.startsWith(cn)).send(msg+" "+msg2+" "+msg3+" "+msg4+" "+msg5+" "+msg6+" "+msg7+" "+msg8+" "+msg9+" "+msg10+" "+msg11+" "+msg12+" "+msg13+" "+msg14);
    break;
    case (msg15):
    client.guilds.find(guild=>guild.id.startsWith(gid)).channels.find(channel=>channel.name.startsWith(cn)).send(msg+" "+msg2+" "+msg3+" "+msg4+" "+msg5+" "+msg6+" "+msg7+" "+msg8+" "+msg9+" "+msg10+" "+msg11+" "+msg12+" "+msg13+" "+msg14+" "+msg15);
    break;
    case (msg1)://msg16 
    client.guilds.find(guild=>guild.id.startsWith(gid)).channels.find(channel=>channel.name.startsWith(cn)).send(msg+" "+msg2+" "+msg3+" "+msg4+" "+msg5+" "+msg6+" "+msg7+" "+msg8+" "+msg9+" "+msg10+" "+msg11+" "+msg12+" "+msg13+" "+msg14+" "+msg15+" "+msg1);
    break;
    default:
    client.guilds.find(guild=>guild.id.startsWith(gid)).channels.find(channel=>channel.name.startsWith(cn)).send(msg);
    message.channel.send(x);
    };

};
/*const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();*/

if(command==="servert")
{
  if(admin()||isowner())
    {
  message.delete();
  sayinserver(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7],args[8],args[9],args[10],args[11],args[12],args[13],args[14],args[15],args[16]);
}
else{message.channel.send("Access Denied");}
};


    async function replyWithInvite(gid,cn) 
      {
      
       // gid="";//daremonai
        /*cn="general";
        cn2="announcements";*/
        let invite = await client.guilds.find(guild=>guild.id.startsWith(gid)).channels.find(channel=>channel.name.startsWith(cn)).createInvite(
          {
          maxAge: 10 * 60 , //maximum time for the invite, in milliseconds, its 2h in this case
          maxUses: 1 //maximum times it can be used
          }, `Requested with command by ${message.author.tag}`).catch(console.log);
          
          let person=message.author;
  person.sendMessage(invite ? `Here's your invite: ${invite}` : "There has been an error during the creation of the invite.");
      };
 
    if(command==="inv_other")
    {
      if(admin()|isowner()){
        message.channel.send("execution of instructions...");
      replyWithInvite(args[0],args[1]);
    message.channel.send("orders executed!");}
      else{message.channel.send("you do not have permission to use that command :shrug: ");}
     };
    

     if(command==="allchan")
    {
      if(admin()|isowner()){
      message.channel.send("Servers:\n");
  client.guilds.forEach((guild) => {
    message.channel.send(" - " + guild.name + "\n");

      // List all channels
      guild.channels.forEach((channel) => {
        message.channel.send(` -- ${channel.name} (${channel.type}) - ${channel.id}`);
      })

     })
    }else{message.channel.send("you do not have permission to use that command :shrug: ");}
    }
    
    if(command==="allserver")
  {
      if(admin()|isowner()|tru()){
    message.channel.send("Servers:\n");
    i=1;
    client.guilds.forEach((guild) => {
    message.channel.send(` - ${i}.` + guild.name + ` id: ${guild.id}\n`);
    i=i+1;
    })
    }else{message.channel.send("you do not have permission to use that command :shrug: ");}
  }
    /* Http.onreadystatechange=function(){
       if(this.readyState==4 || this.status==200){
      message.channel.send(`Got ${Http.responseText}`);
     }
    }*/
    
  if(message.content.startsWith(prefix+"addrole")){
    if (message.channel instanceof discord.DMChannel){
      message.channel.send("you dont even have a role in the DMs ...");
        }
    if(isowner()||admin()){
let member = message.mentions.members.first();
let membc=message.member;
let role = message.mentions.roles.first();


// Add the role!
member.addRole(role).catch(console.error);
}else if(!isowner()||!tru()){return message.channel.send(message.author.username+", you cant use this command!");}
}
if(message.content.startsWith(prefix+"removerole")){
  if (message.channel instanceof discord.DMChannel){
    message.channel.send("you dont even have a role in the DMs ...");
      }
  if(isowner()||admin()){
  let member = message.mentions.members.first();
let membc=message.member;

let role = message.mentions.roles.first();
// Remove a role!
member.removeRole(role).catch(console.error);
}
else if(!isowner()||!tru()){return message.channel.send(message.author.username+", you cant use this command!");}
}
/*if(message.content.startsWith("i'm sorry monichii")){
  let monichii=message.mentions.members.first();
  monichii.sendMessage("we sorry monichii :sob:");
}*/
if(message.content.startsWith(prefix+"adhelp")){
  let member = message.author;
//let role = message.guild.roles.find(r => r.name === "Windy");
  function tru(){
   if(message.member.roles.find(r=>r.name === "Windy")||message.member.roles.find(r=>r.name ==="Fraccion")||message.member.roles.find(r=>r.name ==="Admin")){
     return true;
   }
 }
 if (message.channel instanceof discord.DMChannel){
  message.channel.send("you dont even have a role in the DMs ...");
    }
  else if(admin()||tru()||isowner()){
    //message.channel.send("wow, you have the role");
    message.delete();
    mentionmessage = new discord.RichEmbed()
    .addField("prefix: w!","you cant change it yet", false)
.addBlankField(true)
    .setThumbnail("https://cdn.discordapp.com/attachments/536880565832384512/542781049315524626/IMG_20190206_195754.png")
.addBlankField(true)

    .addField(prefix+"help", "user helplist.", false)
    .addField(prefix+"adhelp", "this list.", false)
    .addField(prefix+"sorry @user", "say sorry for the pinged one.", false)
    .addField(prefix+"linked", "send a pic from a link **e.g.**: w!linked http:\\\\link.com\\idkwhat.png", false)
    .addField(prefix+"pic", "sends a pic about the author.", false)
    .addField(prefix+"send @user", "makes the bot dm the pinged one.", false)
    .addField(prefix+"mine @user", "make the pinged one yours.", false)
    .addField(prefix+"fkns","fking smart",false)
    .addField(prefix +"hello!", "makes the bot say hello.", false)
    .addField(prefix+"ping","tests the lag",false)
    .addField("<emote>","```xml\n<commands> ```",false)
    .addBlankField(true)
    .addField(prefix+"beat up @user",":shrug:",false)
    .addField(prefix +"hug @user", "the user hugs the mentioned one.", false)
    .addField(prefix +"pat @user", "the user pats the mentioned one.", false)
    .addField(prefix +"poke @user", "the user pokes the mentioned one.", false)
    .addField(prefix +"cry @user", "the user cries for the mentioned one.", false)
    .addField(prefix +"smile @user", "the user smiles for the mentioned one.", false)
    .addField(prefix+"punish @user","punish the mentioned one.",false)
    .addField(prefix+"smirk","the user is smirking.",false);
mention2= new discord.RichEmbed()
    .addField("**commands for**","```xml\n<admins>```",false)
    .addBlankField(true)
    
    .addField(prefix+"say","will make the bot say what you write after the command.",false)
    .addField(prefix +"purge **numbers**", "the bot purges the given number of messages.", false)
    .addField(prefix+"addrole @user @role","add a role to the mentioned person.",false)
    .addField(prefix+"removerole @user @role","remove a role from the mentioned person.",false)
    .addField(prefix+"remove_self @role","remove a role from the command user.",false)
    .addField(prefix+"servert server_id channel_Name msg","send a message into a specific server's channel. (max 15 arguments!)",false)
    .addField(prefix+"validrole @role","counts the number of members that have this role,then displays them.",false)
    .addField(prefix+"inv_other server_id channel_name","makes an invite link from the server (usable by 1 person).",false)
    .addField(prefix+"allserver","shows all the servers that the bot is in.",false)
    .addField(prefix+"allchan","shows all the servers and channels in it. (those where the bot is in)",false)
    .addBlankField(true);
        /*.addField("<Music>","```xml\n<commands> ```",false)
        .addBlankField(true)
        .addField("!join **youtube_link**","plays the youtube link",false)
        .addField("!leave ","leaves the vc",false);*/
 
   message.author.sendMessage (mentionmessage);
   message.author.sendMessage(mention2);
    message.channel.send("command list sent!");
  }
  
  else{message.channel.send("well, you dont have the role :shrug:");}
}










//basic stuff

    if (message.content.startsWith ("wdym 🤔")){
        message.channel.send ("wdym :thinking:");
    
    }

    if(message.content.startsWith(prefix+"ping"))
    {
      console.time("lag")
      message.channel.send("Ping?").then(m=>{
        let ping = m.createdTimestamp - message.createdTimestamp
        m.edit(`Latency is: ${ping}ms, API Latency is: ${Math.round(client.ping)}ms`)

      }) 
      console.timeEnd("lag");
      //message.channel.send(lag);
      //message.channel.send(lag1);
    }
    
    if(message.content.startsWith(prefix+"invite"))
    {
      message.author.sendMessage ("https://discordapp.com/oauth2/authorize?&client_id=542665110724935681&scope=bot&permissions=8");
      message.channel.send("invite link sent to your DMs");
    }
});
    

//const urls='https://discordapp.com/api/v6/channels/channelidhere/invites';
/*const urls='https://discordapp.com/api/v6/guilds/587864933580931077/invites/NYZNm3';
var request = require('request');
//username=email;
//password=pw,
//auth="Basic " + new Buffer.from(username + ":" + password).toString("base64");
 
 
request({
  url: urls,
  headers: {
    'Authorization: Bot ': token
  }
}, function(err, res) {
  console.log("url_thing:\n");
  console.log(res.body);
});*/

fs.readFile('token.txt', 'utf-8', (err, data) => {
    if (err) throw err;
   client.login (data);
  });

client.on("message", (message)=> {
    msg = message.content.toLowerCase();
    if(message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();


if (msg.startsWith(prefix + "send")) {
  mention = message.mentions.users.first();
    if (mention == null) {return;}
    message.delete();
    mentionmessage = message.content.slice (6);
    mention.sendMessage (mentionmessage);
    message.channel.send("Done!");
 }
if (msg.startsWith(prefix + "sorry"))
{
    if (mention == null) { message.reply("well, who do you say sorry for?")}
    message.delete();
    mentionmessage2=message.content.slice(7);
    mentionsasd=message.mentions.users.first();
    mentionswithout=mentionsasd.username;
    message.channel.send(mentionswithout + " forgive me :pray:")
    //message.channel.send(embedpic);
}
 
  if (message.content.startsWith(prefix + "pic")){
     message.channel.send(embedpic);
    }
    if (message.content.startsWith(prefix + "linked")){
        message.delete();
        linkedthing = message.content.slice(8);
        linkedpic =new discord.RichEmbed()
        .setImage(linkedthing);
        message.channel.send(linkedpic);
    }
    if(message.content.startsWith(prefix + "hello!")){
        message.delete();
        message.channel.send(message.author.username+" says: Hello guys :raised_hand: :slight_smile:");
    }
    if(message.content.startsWith(prefix+"hug")){
        embedpic =new discord.RichEmbed()
.setImage("https://media.discordapp.net/attachments/536880565832384512/543148581780193280/tenor_gif1178805513.gif");
        mentionsasd=message.mentions.users.first();
        //message.delete();
        function randomnumber() {
            var result = Math.floor(Math.random()*9)+1;
            return result;
          }
         mentionswithout=mentionsasd.username;        
        message.channel.send(mentionswithout+", "+message.author.username+" hugged you!\n");
        
        switch (randomnumber()) {
            case 1:
            message.channel.send(embedpic);
              break;
            case 2:
            message.channel.send(pic1);
              break;
            case 3:
            message.channel.send(pic2);
              break;
            case 4:
            message.channel.send(pic3);
              break;
            case 5:
            message.channel.send(pic4);
              break;
            case 6:
            message.channel.send(pic5);
              break;
            case 7:
            message.channel.send(pic6);
            break;
            case 8:
            message.channel.send(pic7);
            break;
            case 9:
            message.channel.send(pic8);
          }
    }
if(message.content.startsWith(prefix+"punish")){
  punish= new discord.RichEmbed()
  .setImage("https://media1.tenor.com/images/1776864b1e2de63939b0a2b539b7c4bb/tenor.gif");
  mentionsasd=message.mentions.users.first();
  mentionswithout=mentionsasd.username;        
  message.channel.send(mentionswithout+", "+message.author.username+" punished you!\n");
  message.channel.send(punish);
}
if(message.content.startsWith(prefix+"beat up")){
  mentionsasd=message.mentions.users.first();
  // message.delete();
   function randomnumber() {
       var result = Math.floor(Math.random()*3)+1;
       return result;
     }
     beat1= new discord.RichEmbed()
     .setImage("https://media.giphy.com/media/lkK6EKv0Yogx2/giphy.gif");
     beat2= new discord.RichEmbed()
     .setImage("https://img.fireden.net/a/image/1518/48/1518481752792.gif");
     beat3= new discord.RichEmbed()
     .setImage("https://68.media.tumblr.com/16cba1639cf5f1048baca20018aaf3ef/tumblr_nu4ah2AdKw1ufwwv5o1_500.gif");
   mentionswithout=mentionsasd.username;        
   message.channel.send(mentionswithout+", "+message.author.username+" beated you!\n");
   
   switch (randomnumber()) {
       case 1:
       message.channel.send(beat1);
         break;
       case 2:
       message.channel.send(beat2);
         break;
       case 3:
       message.channel.send(beat3);
     }
}

    if(message.content.startsWith(prefix+"pat")){
       mentionsasd=message.mentions.users.first();
       // message.delete();
        function randomnumber() {
            var result = Math.floor(Math.random()*8)+1;
            return result;
          }
         mentionswithout=mentionsasd.username;        
        message.channel.send(mentionswithout+", "+message.author.username+" patted you!\n");
        
        switch (randomnumber()) {
            case 1:
            message.channel.send(pat1);
              break;
            case 2:
            message.channel.send(pat2);
              break;
            case 3:
            message.channel.send(pat3);
              break;
            case 4:
            message.channel.send(pat4);
              break;
            case 5:
            message.channel.send(pat5);
              break;
            case 6:
            message.channel.send(pat6);
              break;
            case 7:
            message.channel.send(pat7);
            break;
            case 8:
            message.channel.send(pat8);
          }
    }
if(message.content.startsWith(prefix+"cry")){
  mentionsasd=message.mentions.users.first();
  // message.delete();
   function randomnumber() {
       var result = Math.floor(Math.random()*10)+1;
       return result;
     }
    mentionswithout=mentionsasd.username;        
   message.channel.send(mentionswithout+", "+message.author.username+" is crying for you!\n");
   
   switch (randomnumber()) {
       case 1:
       message.channel.send(cry1);
         break;
       case 2:
       message.channel.send(cry2);
         break;
       case 3:
       message.channel.send(cry3);
         break;
       case 4:
       message.channel.send(cry4);
         break;
       case 5:
       message.channel.send(cry5);
         break;
       case 6:
       message.channel.send(cry6);
         break;
       case 7:
       message.channel.send(cry7);
       break;
       case 8:
       message.channel.send(cry8);
       break;
       case 9:
       message.channel.send(cry9);
       break;
       case 10:
       message.channel.send(cry10);
       
     }
}
if(message.content.startsWith(prefix+"smirk")){
  message.channel.send(message.author.username+" is smirking!");
  message.channel.send(smirk);
}
if(message.content.startsWith(prefix+"smile")){
  mentionsasd=message.mentions.users.first();
  // message.delete();
   function randomnumber() {
       var result = Math.floor(Math.random()*10)+1;
       return result;
     }
    mentionswithout=mentionsasd.username;        
   message.channel.send(mentionswithout+", "+message.author.username+" is smiling for you!\n");
   
   switch (randomnumber()) {
       case 1:
       message.channel.send(smil1);
         break;
       case 2:
       message.channel.send(smil2);
         break;
       case 3:
       message.channel.send(smil3);
         break;
       case 4:
       message.channel.send(smil4);
         break;
       case 5:
       message.channel.send(smil5);
         break;
       case 6:
       message.channel.send(smil6);
         break;
       case 7:
       message.channel.send(smil7);
       break;
       case 8:
       message.channel.send(smil8);
       break;
       case 9:
       message.channel.send(smil9);
       break;
       case 10:
       message.channel.send(smil10);
       
     }
}


    if(message.content.startsWith(prefix+"poke")){
      mentionsasd=message.mentions.users.first();
      // message.delete();
       function randomnumber() {
           var result = Math.floor(Math.random()*10)+1;
           return result;
         }
        mentionswithout=mentionsasd.username;        
       message.channel.send(mentionswithout+", "+message.author.username+" poked you!\n");
       
       switch (randomnumber()) {
           case 1:
           message.channel.send(pok1);
             break;
           case 2:
           message.channel.send(pok2);
             break;
           case 3:
           message.channel.send(pok3);
             break;
           case 4:
           message.channel.send(pok4);
             break;
           case 5:
           message.channel.send(pok5);
             break;
           case 6:
           message.channel.send(pok6);
             break;
           case 7:
           message.channel.send(pok7);
           break;
           case 8:
           message.channel.send(pok8);
           break;
           case 9:
           message.channel.send(pok9);
           break;
           case 10:
           message.channel.send(pok10);
           
         }
   }
  
    if(message.content.startsWith(prefix +"mine")){
        //mineping=message.content.slice(6);
        mentionsasd=message.mentions.users.first();
         mentionswithout=mentionsasd.username;
        message.channel.send(mentionswithout+ "! You are "+message.author.username+"'s now!\nnow... do as i say!");
    }

    /*function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function w8(){
      console.log("starting the 5 sec");
      await sleep(5000);
      message.channel.send("i think its done. :thumbsup: ")
      console.log("time is up");
    }
    async function demo() {
      console.log('Taking a break...');
      await sleep(5000);
      console.log('5 seconds later');
      message.channel.send("time is up");
    };
    
   // demo();
  if(message.content.startsWith(prefix+"sudo")){
    function tru(){
      if(message.member.roles.find(r=>r.name === "Windy")||message.member.roles.find(r=>r.name ==="Fraccion")||message.member.roles.find(r=>r.name ==="Admin")){
        return true;
      }}
    messagething=message.content.slice(7);
    message.channel.send("Please type in the password for the user **"+message.author.username+"** you have 5 seconds to do so...");
    w8();
    if(message.author.id===""){
    message.channel.send("working on this: "+messagething+" \nplease wait...");
    }
    else if(!tru()){message.channel.send("sorry, you do not have the permission to use this command.");}
    else{demo();};
  };*/
   
    if(message.content.startsWith(prefix+"fkns")){
      message.delete();
      message.channel.send("shhhhht, thats fkin smart :wink::thumbsup: ");
    }
    if(message.content.startsWith(prefix+"help")){
        helpmenu = new discord.RichEmbed()
        .addField("prefix: w!","you cant change it yet", false)
        .addBlankField(true)
        .setThumbnail("https://cdn.discordapp.com/attachments/536880565832384512/542781049315524626/IMG_20190206_195754.png")

        .addBlankField(true)

        .addField(prefix+"help", "This list.", false)
        .addField(prefix+"adhelp","```xml\n<admins only!> full list of commands```")
        .addField(prefix+"sorry @user", "say sorry for the pinged one.", false)
        .addField(prefix+"linked", "send a pic from a link **e.g.**: w!linked http:\\\\link.com\\idkwhat.png", false)
        .addField(prefix+"pic", "sends a pic about the author.", false)
        .addField(prefix+"send @user", "makes the bot dm the pinged one.", false)
        .addField(prefix+"mine @user", "make the pinged one yours.", false)
        .addField(prefix+"fkns","fking smart",false)
        .addField(prefix +"hello!", "makes the bot say hello.", false);
        helpmenu2 = new discord.RichEmbed()
        .addField("<emote>","```xml\n<commands> ```",false)
        .addBlankField(true)
        .addField(prefix+"beat up @user",":shrug:",false)
        .addField(prefix +"hug @user", "the user hugs the mentioned one.", false)
        .addField(prefix +"pat @user", "the user pats the mentioned one.", false)
        .addField(prefix +"poke @user", "the user pokes the mentioned one.", false)
        .addField(prefix +"cry @user", "the user cries for the mentioned one.", false)
        .addField(prefix +"smile @user", "the user smiles for the mentioned one.", false)
        .addField(prefix+"punish @user","punish the mentioned one.",false)
        .addField(prefix+"smirk","the user is smirking.",false)
        .addField(prefix+"ping","tests the lag",false)
        .addBlankField(true)
        /*.addField("<Music>","```xml\n<commands> ```",false)
        .addBlankField(true)
        .addField("!join **youtube_link**","plays the youtube link",false)
        .addField("!leave ","leaves the vc",false);
*/

        //.addField(prefix +"purge **numbers**", "the bot purges the given number of messages.", false)

        //.addField(prefix+"hello", "says hi back, and some infos about the command user.", false);
        message.reply(helpmenu);
        message.channel.send(helpmenu2);
    }


/*
CONSOLE
CONSOLECONSOLE
CONSOLECONSOLECONSOLE
CONSOLECONSOLE
CONSOLECONSOLE
CONSOLECONSOLE
CONSOLECONSOLE
CONSOLECONSOLE
CONSOLECONSOLE
CONSOLE
CONSOLECONSOLE
CONSOLECONSOLE
CONSOLECONSOLE
CONSOLECONSOLE
CONSOLECONSOLE
CONSOLECONSOLE
CONSOLECONSOLECONSOLE
CONSOLECONSOLE
CONSOLE
*/

    const readline = require('readline');

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
 // if(message.content.startsWith(prefix+"off_")){rl.close();}
if(message.content.startsWith(prefix+"ctalk"))
{
  rl.question("send something to the people out there", (answer)=>{
   
    message.channel.send(answer);
    rl.close();
  });
}

if(command==="serverwide")
{
  rl.question("send something to the people out there", (answer)=>{
    gid="";
    cn="";
    client.guilds.find(guild=>guild.id.startsWith(args[0])).channels.find(channel=>channel.name.startsWith(args[1])).send(answer);
    //message.channel.send(answer);
    rl.close();
  });
}





})
client.on('message', async message => {
  if (message.channel.type === 'dm'){ 
      console.log(`${message.author.username} says in DMs: ${message.content}`);
  }
  
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  
  if(command==="log"){
  message.channel.send("writing from file...");
  fs.readFile(args[0], 'utf-8', (err, data) => {
    if (err) throw err;
    message.channel.send(data);
  });
message.channel.send("done");
}

if (command==="dm") {
 /* mention = message.mentions.users.first();
    if (mention == null) {return;}*/
    message.delete();
    mentionmessage = message.content.slice (6);
    mention=args[0];
   // user.id.sendMessage (mentionmessage);
  
    client.users.find(user=>user.id.startsWith(mention)).sendMessage(args[1]);
    message.channel.send("Done!");
 }

    if(message&& !(message.channel.type==='dm'))
    //guild.channels.forEach((channel) =>{
      {
        logthing=`\nin ${message.guild.name}- ${message.channel.name} - ${message.author.username} says: ${message.content}`;

        console.timeLog("t",`elapsed time since the bot started`);
        console.log(logthing);
        if(!(message.guild.id==="1")&&!(message.guild.id==="2")&&!(message.guild.id==="3"))
        {
          fs.appendFile('else.txt', logthing, (err) => {
            // In case of a error throw err. 
            if (err) throw err;
          }            );
        }
        switch(message.guild.id){
        case ("1"):
          
          fs.appendFile('squad5.txt', logthing, (err) => {
            // In case of a error throw err. 
            if (err) throw err;
          }            );
        break;
        case ("2"):
            fs.appendFile('skeletons_house.txt', logthing, (err) => {
              // In case of a error throw err. 
              if (err) throw err;
            }            );
        break;
        case ("3"):
            fs.appendFile('daremo.txt', logthing, (err) => {
              // In case of a error throw err. 
              if (err) throw err;
            }            );
       /* break;
        case(" "):
        fs.appendFile('something.txt', logthing, (err) => {
          // In case of a error throw err. 
          if (err) throw err;
        }            );*/
        }
      }
     // })
});



//client.off(console.timeEnd("t"));

       /* fs.appendFile('dare.txt', logthing, (err) => {
          // In case of a error throw err. 
          if (err) throw err;
        }            )*/
