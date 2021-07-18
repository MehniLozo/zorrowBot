const channelID = '866430397932109825';
const check = '✅';
const reacted = false;

const registerEvent = (client,msg) => {

  client.on('messageReactionAdd',(reaction,user) => {
    if(user.bot){
      return; //we dont want to count bots in this for sure
      }
      const {message} = reaction; //special stuff here
      //message is a property of reaction so,can be identified like that without
      //the unnecessary pain in the ass
    if(message.channel.id === channelID)
    {
      message.delete({timeout:1000});
      console.log("Message has been successfully deleted tho");
    }
  })
}


module.exports = {
	name: 'ticket',
	description: 'makes tickets and send them to mods',
	cooldown: 5,
	guildOnly : true,
  execute(client,message,args){
      const ticketMessage = args.join(' ');
      const channel = message.guild.channels.cache.get(channelID);
      const user = message.guild.member(message.author);
      //console.log(message.guild);
    //  console.log(channel);
      registerEvent(client);
      channel
           .send(
             `A new ticketh has been created by <@${message.author.id}>

     "${ticketMessage}"
     Click the ${check} icon when this issue has been resolved.`
   ).then((msg) => {
     msg.react(check);
    // console.log(user);
     //user.send('Your ticket has been sent.Expect a reply soon');
     message.reply('Your message has been sent.Expect a reply soon.');
   })

   }


  }
