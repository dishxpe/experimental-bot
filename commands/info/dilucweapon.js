const { MessageEmbed } = require('discord.js')

module.exports ={
    name : 'diluctalents',
    run : async(client, message) => {
        const embed = new MessageEmbed()
        .setTitle('Diluc Talent/Level Up Materials & Priority')
        .setDescription(`**Teachings of Resistance\nDvalin’s Plume\nRecruit’s Insignia\nAgnidus Agate\nSmall Lamp Grass\nEverflame Seed**\n*Vaporize XQ:* AA ~ E > Q\n *Melt:* E > Q >> AA`)
        .setColor('#b30000')
        .setThumbnail('https://i.imgur.com/sU80nsW.jpg')

        message.channel.send(embed)
    }
}