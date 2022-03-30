const { MessageEmbed } = require('discord.js');
const db = require('quick.db')

module.exports.execute = async (client, message, args) => {
  // Pâyidar Code
  let Para_Data = db.fetch(`para_${message.author.id}`) || 0

  // Premium
  // let Pre_Data = db.fetch(`premium_${message.author.id}`)

  const Pâyidar = new MessageEmbed()
  .setDescription(`
    ${message.author} - Market Hoş geldin.

    1-) **Bıçak** ~ 5K :dollar:
    2-) **Silah** ~ 15K :dollar:
    3-) **Keleş** ~ 20K :dollar:
    4-) **Füze** ~ 150K :dollar:

    \`Unutma, satın almak istediğin ürünü şu şekil de satın alacaksın ~ .satın-al ürün ismi\`
  `)
  .setColor(0xff0000)
  .setFooter('Pâyidar Code')
  message.channel.send(Pâyidar)

};

module.exports.configuration = {
    name: "market",
    aliases: ['Market', 'MARKET', 'shop', 'Shop', 'SHOP']
};