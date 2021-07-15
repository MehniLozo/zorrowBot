const Discord = require('discord.js');
const fetch = require('node-fetch');
require('dotenv').config();
const TENORKEY = process.env.TENORKEY;

module.exports = {
name:'gif',
description:'usually send up funny gifs',
execute(client,message,args){
    const searchTerm = args.join(' ');
    let  search_url = "https://g.tenor.com/v1/search?q=" +  searchTerm+ "&key=" +
            TENORKEY + "&limit=8";
    message.channel.send('loading...')
    .then((msg)=> {
        msg.delete({timeout:500});
    })
    .then(() => {
           fetch(search_url)
            .then(response => response.json())
            .then(data => {
                
                let index = Math.floor(Math.random()*data.results.length);

                console.log(data.results[0]);
                message.channel.send(data.results[index].url)
            } );
        //message.channel.send(data)
    })


}
}
