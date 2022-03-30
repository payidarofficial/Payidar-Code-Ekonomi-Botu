const { MessageEmbed } = require('discord.js');
const db = require('quick.db')

module.exports.execute = async (client, message, args) => {
    // Let
    let kisi = message.mentions.members.first();
    let miktar = args[1];

    // Hatalar
    if(!kisi){
        const Pâyidar = new MessageEmbed()
        .setDescription(`
        ${message.author} **Lütfen Para Aktaracağım Kişiyi Etiketleyin.**
        `)
        .setColor(0xff0000)
        .setFooter('Pâyidar Code')
        return message.channel.send(Pâyidar)        
    }
    if(!miktar){
        const Pâyidar = new MessageEmbed()
        .setDescription(`
        ${message.author} **Lütfen Para Miktarı Girin.**
        `)
        .setColor(0xff0000)
        .setFooter('Pâyidar Code')
        return message.channel.send(Pâyidar)        
    }
    if(message.author.id != '939255314597961798'){
        const Pâyidar = new MessageEmbed()
        .setDescription(`
        ${message.author} **Bu Kodu Kullanmak İçin Kurucu Olman Gerekiyor.**
        `)
        .setColor(0xff0000)
        .setFooter('Pâyidar Code')
        return message.channel.send(Pâyidar)
    }

    // Kodlar
    if(kisi && miktar){
        // Data
        db.add(`para_${kisi.id}`, +miktar)

        // Mesaj
        const Pâyidar = new MessageEmbed()
        .setDescription(`
            ${message.author} **Başarıyla** ${kisi} **Kullanıcısına** ${miktar} :dollar: **Para Aktardım**
        `)
        .setColor(0xff0000)
        .setFooter('Pâyidar Code')
        message.channel.send(Pâyidar)
    }
};

module.exports.configuration = {
    name: "para-at",
    aliases: ['Para-at', 'PARA-AT', 'para-At', 'para-AT']
};