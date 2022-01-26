const fetch = require("node-fetch")
const Discord = require("discord.js")
const link = 'https://www.reddit.com/r/HuTaoNSFW.json?sort=top&t=all'

module.exports = {
    name : 'hutao',
    description : "Drops a random picture from r/HuTaoNSFW",
    run : async (bot,message,args) => {
    let fetchMemes = await fetch(link).then(m => m.json())
    const getMemes = fetchMemes.data.children;
    let randomMeme = getMemes[Math.floor(Math.random() * getMemes.length)]
    let memeEmbed = new Discord.MessageEmbed()
    .setTitle(randomMeme.data.title)
    .setImage(randomMeme.data.url)
    .setColor('RANDOM');

    message.channel.send(memeEmbed)

    }
}