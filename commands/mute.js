module.exports = {
	name: 'mute',
	description: 'mute the bad guys!',
	execute(client,message, args) {
    //function still causing a little error
		const Discord = require('discord.js');
    let guild = message.guild;
  	//let mentioned = guild.member(message.mentions.users.first()); //.id
		let mentioned = message.mentions.users.first();

	//  let user =guild.member(message.author);
		let user = message.author;
		let dateTime = message.createdAt;
		let reason = args.slice(1).join(' ');


		if(reason.length < 4)
			{
				return message.reply('You have to insert a proper reason');
			}
    if(!message.member.hasPermission('MUTE_MEMBERS'))
      {
          return message.reply('Sorry mate,you dont have that kind of power yet!');

      }
      else if(!mentioned.kickable)
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
            message.channel.send(`**${mentioned.username} has been frozen! To unfreeze them, use the unfreeze command!**`)
						message.delete({ timeout: 5000 })
          } )
          const embed = new Discord.MessageEmbed();
          embed
          .setTitle('MUTE INFO')
          .setColor('#E67E22')
          .setDescription('Just a regular mute-info letter')
          .addField('Muted:',mentioned.username)
					.addField('Reason',reason,true)
          .addField('ID',mentioned.id)
					.setImage(mentioned.displayAvatarURL())
					.addField('dateTime:',dateTime)
          .addField('BY:',user.username)


          message.channel.send(embed);



        }



	},
};
