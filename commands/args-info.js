module.exports = {
	name: 'args-info',
	description: 'show passed in arguments!',
	execute(message, args) {
    if(!args.length)
    {
      return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
    }
    message.channel.send(`Command name: ${command}\nArguments: ${args}`);


	},
};
