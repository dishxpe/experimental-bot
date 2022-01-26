const fetch = require("node-fetch")
const Discord = require("discord.js")
const link = 'https://www.reddit.com/r/dankmemes/random/.json'

module.exports = {
    name : 'meme',
    description : "Drops a random meme from r/dankmemes. (unfunny btw)",
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