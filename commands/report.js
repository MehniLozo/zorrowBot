const Discord = require('discord.js');
module.exports = {
name:'report',
description:'report server members',
execute(client,message,args){
  const target = message.mentions.users.first();
  const reporter = message.author;
  const reason = args.slice(1).join(' ');
  const guild = message.guild;

let logchannel = message.guild.channels.cache.find(x=> x.name = 'logs');


if(!target )
  return message.reply(`${prefix}report [mentionedUser] [reason]`);
if(target.id === message.author.id) return message.reply('Wow reporting oneself? no that doesnt count sorry');
if(!reason) return message.reply('Please provide a reason friend to justify this act');
else{
  const embed =new Discord.MessageEmbed()
  .setColor('#f7ffad')
  .setTitle('Report-info')
  .setDescription('User-Report service')
  .addField("Reporter:",reporter)
  .addField("Target:",target,true)
  .setImage(target.displayAvatarURL(),true)
  .addField("Reason:",reason);
/*
//looking forward to fix the logchannel send embed thingy
if(!logchannel)
{
  message.channel.send(embed).then(() => {
    message.author.send("Your report has been successfully sent.\nPlease stay nearby for any probable discussion with the moderators");
  }).catch((e) => console.log(e));
}
else{
  client.channels.cache.get(logchannel.id).send({embed});
  message.channel.send({embed});
}*/
message.channel.send(embed).then(() => {
  message.author.send("Your report has been successfully sent.\nPlease stay nearby for any probable discussion with the moderators");
}).catch((e) => console.log(e));

}
  }
    }
