const Discord = require('discord.js');
module.exports = {
name:'sendme',
description:'send me the message i sent you ',
execute(client,message,args){
    
    //just a useless thing i guess 
    let content = args.join(' ');
    message.author.send(content);
    

    }

}
