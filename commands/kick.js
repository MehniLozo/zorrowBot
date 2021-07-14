const Discord = require('discord.js');
module.exports = {
	name: 'kick',
	description: 'kick the bad guys!',
	execute(client,message, args) {
		let reason = args.slice(1).join(' ');
		let user = message.mentions.users.first();
		console.log(message.author.id);
		console.log(message.guild.member(user));
		//if(message.mentions.users.size < 1) return message.reply('Mentioning someone is a must');
	/*	if(user.id === message.author.id) return message.reply('Self kick? next time');
		if(user.id === client.id) return message.reply('Tryana let meh kick meh?');

		if(reason.length < 3) return message.reply('A reason must be provided for such an action at least');

		if(!message.guild.member(user).kickable) return message.reply('That cannot be kicked');

		const embed = new Discord.MessageEmbed()
		.setColor(0x0000FF)
		.setTimestamp()
		.addField('Action:', 'Kick')
		.addField('User:', `${user.username}#${user.discriminator} (${user.id})`)
	  .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`)
	  .addField('Reason', reason)
	  .setFooter(`Zorrow Bot made by Lozo`);

		if(user.bot) return;

		message.mentions.users.first().send({embed}).catch(e => {
			console.log(e);
		});
		message.guild.member(user).kick();

		//finding the logchannel
		let logchannel = message.guild.channels.cache.find(x=> x.name = 'logs');
		if(!logchannel)
		{
			message.channel.send({embed});
		}else{
			client.channels.cache.get(logchannel.id).send({embed});
			message.channel.send({embed});
		}
*/


		  }
    }
