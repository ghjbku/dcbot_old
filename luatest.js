      //LUA TESTTTTTT

      function AddCoins(amount) {
        const Amount = luainjs.utils.coerceArgToNumber(amount,'AddCoins',1);
        Coins = Coins + Amount;
        return luaEnv.parse(`
        Player.Coins = Player.Coins + ${Amount}
        return Player.Coins
        `).exec();
    }
    function RemoveCoins(amount,coins_var) {
        const Amount = luainjs.utils.coerceArgToNumber(amount,'RemoveCoins',1);
        Coins = luainjs.utils.coerceArgToNumber(coins_var,'RemoveCoins',2);
        Coins = Coins - Amount;
        return `Removed ${Amount}\nnew balance:${Coins}!`;
    }
    Coins = 0;
      if(message.content.startsWith(prefix+"testing_lua")){
        var cmd = "testing_lua";
        var args = message.content.slice(prefix.length+cmd.length).trim().split(/ +/g);
        var mode = args[0];
        var amount = args[1];
        
        const Player = new luainjs.Table({ Coins,AddCoins,RemoveCoins });
        luaEnv.loadLib('Player', Player);
            if (mode =="add"){
                var string_to_parse = `return Player.AddCoins(${amount})`;
            }
            else if (mode == "remove"){
        var string_to_parse = `return Player.RemoveCoins(${amount},Player.Coins)`;
            }
            else if (mode == "show"){
                var string_to_parse = `return Player.Coins`;
            }
        message.channel.send(luaEnv.parse(string_to_parse).exec());
      }
