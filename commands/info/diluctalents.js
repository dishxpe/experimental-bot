const { MessageEmbed } = require('discord.js')

module.exports ={
    name : 'dilucweapon',
    run : async(client, message) => {
        const embed = new MessageEmbed()
        .setTitle('Diluc Weapons')
        .setDescription(`**Weapon Priority:**\n1) Wolf's Gravestone\n2) The Unforged\n3) Serpent Spine\n4) Skyward Pride\n5) Blackcliff Sword\n6) Lithic Blade\n7) Prototype Archaic\n*Credits to Diluc Mains Theorycrafters*`)
        .setColor('#b30000')
        .setThumbnail('https://i.imgur.com/sU80nsW.jpg')

        message.channel.send(embed)
    }
}