const Discord = require('discord.js');
const config = require('../config.json');
//const prefix = config.prefix;

module.exports = {
  name: 'info',
  description: 'user-info',
  guildOnly: false,
  execute(client,message,args){
    const timing = message.createdTimestamp;
    const ping = Date.now() - timing;
    const guild = message.guild;
    let target;

    if(!args[0])
    {
      //message.reply(`Specify more hmm ${prefix}help [command name] for more info `);
        target = message.author;

    }
    else {
    target =  message.mentions.users.first();
  }


      message.channel.send('loading ...').then((msg) => {
        msg.delete({time: 500})
      }).then(() =>
      {
      const Embed = new Discord.MessageEmbed()
      .setColor('#f7ffad')
      .setTitle('User-info')
      .setDescription('User additional info')
      .addField(`Name:`,target.username)
      .addField("permissions",target.kickable)
      .addField(`Ping:`,` Ping: ${ping}ms`)
      .addField(`Bot:`,` ${target.bot}`)
      .addField("Activity:",target.presence.status,true)
      .addField("Detail:",target.presence.activities.name || "nothing",true)
      .addField(`ID:`,target.id)
      .addField(`Join at `, target.createdAt)
      .addField(`Last message:`,target.lastMessage)//kinda useless
      .addField("DM channel Activated",target.dmChannel)
      .addField("Typing in",target.typingIn(message.channel))
      .setImage(target.displayAvatarURL())
      .setFooter('hi from ZW team', 'https://i.imgur.com/wSTFkRM.png');


      message.channel.send(Embed);
}).then(() => {
  message.react('🤡');
  //message.channel.send(message.flags.any());//checking up whether the message hold any flag
}).catch(console.log(console.error));

  }
}
