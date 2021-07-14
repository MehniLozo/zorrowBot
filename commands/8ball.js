module.exports = {
	name: '8ball',
	description: '8ball game',
	cooldown: 5,
	guildOnly : true,
  execute(client,message,args){
    if(!args[0])
      return message.channel.send("Tell me what'chu wondering about pal");
    else {
const replies = [
  "Ask again later",
  "Yes",
 "Ask again later.",
 "Better not tell you now.",
 "Cannot predict now.",
 "Concentrate and ask again.",
" Don’t count on it.",
 "It is certain.",
 "It is decidedly so.",
" Most likely.",
" My reply is no.",
" My sources say no.",
 "Outlook not so good.",
" Outlook good.",
 "Reply hazy, try again.",
" Signs point to yes.",
 "Very doubtful.",
 "Without a doubt.",
" Yes.",
" Yes – definitely.",
 "You may rely on it."];

 message.channel.send("loading ...").then((msg) => {
   const index = Math.floor(Math.random()*replies.length);
   msg.delete({time : 500});
   message.channel.send(replies[index]);

})





}

  }
}
