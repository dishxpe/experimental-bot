module.exports = {
    name : 'kick',
    run : async(client, message, args) => {
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]); 
        if(!message.guild.me.hasPermisssion('KICK_MEMBERS')) return message.channel.send('I do not have permission to kick.')
        const Member = message.mentions.members.first()
        if(!Member) return message.channel.send('Please specify a member to kick');
        await Member.kick({ reason : args.slice(1).join(" ")})
        message.channel.send(`${Member.user.tag} was kicked from the server.`)
        //kick command
    }
}