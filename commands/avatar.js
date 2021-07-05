module.exports = {
	name: 'avatar',
	description: 'Display avatars !',
	execute(message, args) {
    const taggedUser = message.mentiones.users.first();

    if(!taggedUser)
      {
        return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ format: 'png', dynamic: true })}>`);

      }else{
        return message.channel.send(`${taggedUser.username}'avatar: <${taggedUser.displayAvatarURL({ format: 'png', dynamic: true })}>`)

      }

	},
};
