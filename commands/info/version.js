const { MessageEmbed } = require('discord.js')

module.exports ={
    name : 'version',
    run : async(client, message) => {
        const embed = new MessageEmbed()
        .setTitle('Current Bot Build is v1.04')
        .setDescription(`Patch Notes:\nAdded More NSFW subreddits. you can request more by DMing me\n "Also no requesting political, boomer, etc. subreddits`)
        .setColor('#b30000')
        .setThumbnail('https://i.imgur.com/sU80nsW.jpg')
        .setFooter("please expect bugs within this bot as it is in early stages.")

        message.channel.send(embed)
    }
}