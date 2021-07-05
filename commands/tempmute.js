module.exports = {
	name: 'tempmute',
	description: 'mute the bad guys temporarily!',
	execute(message, args) {
    //function still causing a little error
		const Discord = require('discord.js');
    let guild = message.guild;

    let mentioned = guild.member(message.mentions.users.first()); //.id
    let user =guild.member(message.author);
		let dateTime = message.createdAt;
		args.shift(); //to remove the first arrays elem
    let timing = parseInt(args.shift())*1000;
		let reason = args.join(' ');


		if(!timing || reason.length < 4)
			{
				return message.reply('You have to insert data properly,use !help tempmute for info');
			}
    if(!message.member.hasPermission('MUTE_MEMBERS'))
      {
          return message.reply('Sorry mate,you dont have that kind of power yet!');

      }
      else if(mentioned.hasPermission('MUTE_MEMBERS'))
        {
          message.reply('The mentioned one has the same/more permessions as yours ');
        }
        else{
          let muteRole = guild.roles.cache.find(r => r.name === 'Frozen');
          if(!muteRole)
          {
              try {
                muteRole =  message.guild.createRole({
                name: "Frozen",
                color: "#000000",
                permissions: []
              })
                guild.channels.forEach(async(channel, id) => {
                await channel.overwritePermissions(muteRole, {
                  SEND_MESSAGES: false,
                  ADD_REACTIONS: false,
                  SPEAK: false
                });
              });
            } catch (e) {
              console.log(e.stack);
            }
          }
          mentioned.roles.add((muteRole.id))

          .then(()=>{
            message.channel.send(`**${mentioned.user.username} has been frozen for ${timing/1000}seconds! To unfreeze them, use the unfreeze command!**`)
            message.delete(5000)
          } ).then(() =>
          {
          const embed = new Discord.MessageEmbed();
          embed
          .setTitle('MUTE INFO')
          .setColor('#E67E22')
          .setDescription('Just a regular mute-info letter')
          .addField('Muted:',mentioned.user.username,true)
          .addField('ID',mentioned.user.id)
					.addField('Reason',reason,true)
					.addField('dateTime:',dateTime)
          .addField('Timing',`${timing/1000}seconds`)
          .addField('BY:',user.user.username)


          message.channel.send(embed);

        }).then(() => {
          setTimeout(() => {
          //  console.log(mentioned.roles)
              mentioned.roles.remove(muteRole.id);
              message.channel.send(`${mentioned.user.username} has been unmuted`)
          },timing)
        })
          .catch((e) => console.log(e));

        }



	},
};
