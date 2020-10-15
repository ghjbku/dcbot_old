//example npm command(valid): npm install discord.js
const discord = require ('discord.js');
var client = new discord.Client();
const fetch = require('node-fetch');
const prefix = "w!";
const fs = require('fs');
const webshot = require('webshot');
const luainjs = require('lua-in-js');
const luaEnv = luainjs.createEnv();

let json = require('./token.json');
var token_helper = JSON.stringify(json).split(":")[1].substr(1);

  client.login (`${token_helper.substring(0,token_helper.length-2)}`);

client.on('ready', () => {
  console.time("t");

console.log("\n\nServers:")
  client.guilds.forEach((guild) => {
      console.log(" - " + guild.name + " id: "+ guild.id)
  })
  client.user.setActivity (prefix+"help || "+prefix+"invite", {type: "LISTENING"});
});

client.on("message", (message) => {
    if (message.author.bot) return;

    function httpGet(theUrl)
    {
        var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
        xmlHttp.send( null );
        return xmlHttp.responseText;
    }

    if(message.content.startsWith(prefix+"help"))
    {
        message.channel.send("commands:\n\n***"+prefix+"test_gist***\n**(gist_user_Name    gist_document_name    number_of_pictures(nullable) )**"+
        "\ntakes pictures of the required gist document and sends into the chat."+
        "\n\n***"+prefix+"shut***\n**no parameters!**\n shuts down the bot.");
    }

    if(message.content.startsWith(prefix+"test_gist"))
    {
    cmd = "test_gist";
    var argumentums = message.content.slice(prefix.length+cmd.length).trim().split(/ +/g);
    var gist_user = argumentums[0];
    var gist_document = argumentums[1];
    times = argumentums[2];
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
        if (isNaN(times)){
            fetch(the_url)
            .then(response => response.text())
            .then(data => {
                    console.log(data.split(/\r\n|\r|\n/).length);
                    times = Math.ceil(((data.split(/\r\n|\r|\n/).length)/80));
                    console.log(times);
                    capture_image(the_last,"screenshot",message,times);
            });
        }
        else{
            console.log(times);
            capture_image(the_last,"screenshot",message,times);
        };
    }

    function capture_image(url,name,message,times){
    for (let index = 0; index < times; index++) {
        var h = 1600;
        var t = 1560 * index;
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
                    top: 330+t,
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
        for (index2 = 0; index2 <= times+1; index2++){
        try {
            if (index2 >= 1){
            fs.unlinkSync('./'+name+(index2-1)+'.png')}
            //file removing
        } catch(err) {
            console.error(err)
        }
        };},6000);
    }

    if(message.content.startsWith(prefix+"shut"))
    {
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

    if(message.content.startsWith(prefix+"log")){
    var cmd = "log";
    var args = message.content.slice(prefix.length+cmd.length).trim().split(/ +/g);
        if (args[0]==="token.txt"){
            message.channel.send("unreachable!");
            return;};
        message.channel.send("writing from file...");
        fs.readFile(args[0], 'utf-8', (err, data) => {
          if (err) {console.error(err);};
          message.channel.send(data);
        });
      message.channel.send("done");
      }


})
