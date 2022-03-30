const { MessageEmbed } = require('discord.js');
const db = require('quick.db')

module.exports.execute = async (client, message, args) => {
  // Pâyidar Code
  let Para_Data = db.fetch(`para_${message.author.id}`) || 0;
  let Rütbe_Data = db.fetch(`rutbe_${message.author.id}`) || "Yok";
  let Esya_Data = db.fetch(`esya_${message.author.id}`) || "Yok";

  // Data
  let data = db.fetch(`esya_${message.author.id}`) || [];

  // Premium
  let Pre_Data = db.fetch(`premium_${message.author.id}`)

  if(Pre_Data){
    const Pâyidar = new MessageEmbed()
    .setDescription(`
      :gem: (Premium) ${message.author} - Cüzdanın

      **Toplam Paran:** 0
      **Sahip Olduğun Eşyalar:** ${data.map((data, index) => `${data}`).join(", ")}
      **Sahip Olduğun Rütbe:** ${Rütbe_Data}

    `)
    .setColor(0xff0000)
    .setFooter('Pâyidar Code')
    message.channel.send(Pâyidar)    
  } else{
    const Pâyidar = new MessageEmbed()
    .setDescription(`
      ${message.author} - Cüzdanın

      **Toplam Paran:** ${Para_Data.toString()}
      **Sahip Olduğun Eşyalar:** ${data.map((data, index) => `${data}`).join(", ")}
      **Sahip Olduğun Rütbe:** ${Rütbe_Data}

    `)
    .setColor(0xff0000)
    .setFooter('Pâyidar Code')
    message.channel.send(Pâyidar) 
  }
};

module.exports.configuration = {
    name: "cüzdan",
    aliases: ['Para', 'PARA', 'param', 'para', 'Param', 'PARAM', 'Cüzdan', 'CÜZDAN']
};