const Discord = require('discord.js');
module.exports = {
name:'poll',
description:'launch an honest poll',
execute(client,message,args){
    


   message.channel.messages.fetch({limit: 1})
    .then((fetched) => {
        fetched.first().react('👍') //first is necessary
        setTimeout(() => fetched.first().react('👎'),1000);
        
        //console.log(fetched.first().content);
    }).catch(e => console.log(e));

    
}

}
