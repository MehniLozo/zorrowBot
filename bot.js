const Discord = require('discord.js');
const client = new Discord.Client();

client.commands = new Discord.Collection();
//const {prefix,TOKEN} = require('./config.json');
const fs = require('fs');
require('dotenv').config()
prefix = process.env.prefix;
TOKEN = process.env.TOKEN;
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('js'));
let d = new Date();


client.once('ready', () => {
  console.log(`Just logged, time is ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`);
  client.user.setActivity('My code',{type: 'PLAYING'})
})

client.on('message', message => {


  const badWords = ['fuck','mother','sex','merde','bitch'];
  badWords.forEach(async (word) => {


    if (message.content.toLowerCase().includes(word))
    {
      await message.delete({timeout: 2000})
      .then((msg) => {
        message.reply('We dont do that here!');
        console.log(`${message.author.username}'message has been delete in ${message.channel.name}`)
    }).then((msg) => {

    })
      .catch(e => console.log(e));
    }
    return;
})

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
  const taggedUser = message.mentions.users.first();


  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;

  for(const file of commandFiles)
  {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name,command)
  }


  	if (!client.commands.has(command)) return;

  	try {
  		client.commands.get(command).execute(client,message, args);
  	} catch (error) {
  		console.error(error);
  		message.reply('there was an error trying to execute that command!');
  	}


}
)

client.login(TOKEN);
