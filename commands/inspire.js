module.exports = {
	name: 'inspire',
	description: 'inspire the dudes',
	cooldown: 5,
	guildOnly : true,
  execute(client,message,args){
  //  const sadWords = ["sad", "depressed", "unhappy", "angry"]
    const fetch = require('node-fetch');
    const api_url = "https://zenquotes.io/api/random";

    message.channel.send('loading...').then((msg) => {
      msg.delete({timeout:500})
    }).then(() => {
      fetch(api_url).then((res) => {
        return res.json()
      }).then((data) => {
//        console.log(data);
        message.channel.send(`${data[0]['q']} - ${data[0]['a']}`);
      })
    }).catch((e) => console.log(e));


  }
}
