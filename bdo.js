//example npm command(valid): npm install discord.js
const discord = require ('discord.js');
var client = new discord.Client();
const prefix = "w!";


let json = require('./token.json');
var token_helper = JSON.stringify(json).split(":")[1].substr(1);

  client.login (`${token_helper.substring(0,token_helper.length-2)}`);

client.on('ready', () => {
  console.time("t");
  client.user.setActivity (prefix+"help || "+prefix+"invite", {type: "LISTENING"});
});

client.on("message", (message) => {
    if (message.author.bot) return;

    let params='keyType=0&mainCategory=1&subCategory=1';
    function httpcall(typeofrequest,request_data,channel){
      var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
      var request = new XMLHttpRequest();
      request.open(`${typeofrequest}`, `https://eu-trade.naeu.playblackdesert.com/Trademarket/${request_data}`);
      request.setRequestHeader('Content-type', 'application/json');
      request.setRequestHeader('User-Agent','BlackDesert');
      request.onreadystatechange = function () {
if (this.readyState === 4) {
  console.log('Status:', this.status);
  console.log('Headers:', this.getAllResponseHeaders());
  console.log('Body:', this.responseText);
  channel.send("Item ID - Current stock - Total trades - Base price");
  if(this.responseText.length< 2000){
    channel.send(this.responseText);
  }else{
    channel.send(this.responseText.substr(1,1999));
  }
}
};
      request.send(params);
  }

    if(message.content.startsWith(prefix+"test_bdo_fetch")){
      httpcall('POST','GetWorldMarketHotList',message.channel);
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

    if(message.content.startsWith(prefix+"help"))
    {
        message.channel.send("commands:\n\n***"+prefix+"test_bdo_fetch***\n**()**"+
        "\ndescription here"+
        "\n\n***"+prefix+"shut***\n**no parameters!**\n shuts down the bot.");
    }

})
