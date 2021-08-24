module.exports = {
    name: "Support",
    description: "Command Description",
    category: "test",
    botPermission: [],
    authorPermission: [],
    ownerOnly: true,
    run: async (client, message, args) => {
        message.channel.send("Delta server https://discord.gg/SSCzKdTgnF.");
    }
}