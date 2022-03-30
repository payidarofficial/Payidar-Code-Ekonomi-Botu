const { MessageEmbed } = require('discord.js');
const db = require('quick.db')

module.exports.execute = async (client, message, args) => {
    // Let
    let kisi = message.mentions.members.first();

    // Hatalar
    if(!kisi){
        const Pâyidar = new MessageEmbed()
        .setDescription(`
        ${message.author} **Lütfen Premium Vereceğim Kişiyi Etiketleyin.**
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
    if(kisi){
        // Data
        db.set(`premium_${kisi.id}`, 'pre')

        // Mesaj
        const Pâyidar = new MessageEmbed()
        .setDescription(`
            ${message.author} **Başarıyla** ${kisi} **Kullanıcısına \`Premium\` Verdim**
        `)
        .setColor(0xff0000)
        .setFooter('Pâyidar Code')
        message.channel.send(Pâyidar)
    }
};

module.exports.configuration = {
    name: "pre-ver",
    aliases: ['Pre-ver', 'PRE-ver', 'PRE-VER', 'premium-ver', 'Premium-ver', 'Prever', 'prever', 'PREVER']
};