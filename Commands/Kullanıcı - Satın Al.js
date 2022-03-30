const { MessageEmbed } = require('discord.js');
const db = require('quick.db')

module.exports.execute = async (client, message, args) => {
  // Pâyidar Code
  let Para_Data = db.fetch(`para_${message.author.id}`) || 0;

  if(!args[0]){
    const Pâyidar = new MessageEmbed()
    .setDescription(`
      ${message.author} - Heyyyy

      **Lütfen Satın Alacağın Ürünün İsmini Gir.**
      **Ürünün İsmini Bilmiyorsan \`.market\` Yaz.** 
    `)
    .setColor(0xff0000)
    .setFooter('Pâyidar Code')
    return message.channel.send(Pâyidar) 
  }

  // Pâyidar Code
  if(args[0] === "Bıçak" || args[0] === "bıçak" || args[0] === "Bıcak" || args[0] === "bıcak"){
    if(Para_Data < 5000){
        const Pâyidar = new MessageEmbed()
        .setDescription(`
          ${message.author} - Paran Yok :pensive:

          **Maalesef satın alım işlemine devam edemiyorsun. Çünkü yeterli paran yok.**
          Paran: ${Para_Data}
    
        `)
        .setColor(0xff0000)
        .setFooter('Pâyidar Code')
        return message.channel.send(Pâyidar) 
    } else{
        db.add(`para_${message.author.id}`, -5000)
        db.push(`esya_${message.author.id}`, 'Bıçak')

        const Pâyidar = new MessageEmbed()
        .setDescription(`
          ${message.author} - Bıçakk Seçimi

          **Satın Alım Başarılı.** :grinning:
          \`Birini bıçaklayacaksan güzel şekil de sok ki verdiğin paraya deysin.\`
        `)
        .setColor(0xff0000)
        .setFooter('Pâyidar Code')
        message.channel.send(Pâyidar) 
    }
  }
  if(args[0] === "Silah" || args[0] === "silah" || args[0] === "Sılah" || args[0] === "sılah"){

    if(Para_Data < 15000){
        const Pâyidar = new MessageEmbed()
        .setDescription(`
          ${message.author} - Paran Yok :pensive:

          **Maalesef satın alım işlemine devam edemiyorsun. Çünkü yeterli paran yok.**
          Paran: ${Para_Data}
    
        `)
        .setColor(0xff0000)
        .setFooter('Pâyidar Code')
        return message.channel.send(Pâyidar) 
    } else{
        db.add(`para_${message.author.id}`, -15000)
        db.push(`esya_${message.author.id}`, 'Silah')

        const Pâyidar = new MessageEmbed()
        .setDescription(`
        ${message.author} - Silah Seçimi

          **Satın Alım Başarılı.** :grinning:
          \`Birini vuracaksanız gizli şekil de işinizi halledin. Burası kurtlar vadisi pusu değil.\`
        `)
        .setColor(0xff0000)
        .setFooter('Pâyidar Code')
        message.channel.send(Pâyidar) 
    }
  }
  if(args[0] === "Keleş" || args[0] === "keleş" || args[0] === "Keles" || args[0] === "keles"){
    db.add(`para_${message.author.id}`, -20000)
    db.set(`esya_${message.author.id}`, 'Keleş')

    if(Para_Data < 20000){
        const Pâyidar = new MessageEmbed()
        .setDescription(`
          ${message.author} - Paran Yok :pensive:

          **Maalesef satın alım işlemine devam edemiyorsun. Çünkü yeterli paran yok.**
          Paran: ${Para_Data}
    
        `)
        .setColor(0xff0000)
        .setFooter('Pâyidar Code')
        return message.channel.send(Pâyidar) 
    } else{
        db.add(`para_${message.author.id}`, -20000)
        db.push(`esya_${message.author.id}`, 'Keleş')

        const Pâyidar = new MessageEmbed()
        .setDescription(`
        ${message.author} - Keleş Seçimi

        **Satın Alım Başarılı.** :grinning:
        \`Dostum sırf merakım dan soruyorum da, dağlar da savaşmaya mı gidiyorsun.\`
        `)
        .setColor(0xff0000)
        .setFooter('Pâyidar Code')
        message.channel.send(Pâyidar) 
    }
  }
  if(args[0] === "Füze" || args[0] === "füze" || args[0] === "Fuze" || args[0] === "fuze"){
    db.add(`para_${message.author.id}`, -150000)
    db.set(`esya_${message.author.id}`, 'Füze')

    if(Para_Data < 150000){
        const Pâyidar = new MessageEmbed()
        .setDescription(`
          ${message.author} - Paran Yok :pensive:

          **Maalesef satın alım işlemine devam edemiyorsun. Çünkü yeterli paran yok.**
          Paran: ${Para_Data}
    
        `)
        .setColor(0xff0000)
        .setFooter('Pâyidar Code')
        return message.channel.send(Pâyidar) 
    } else{
        db.add(`para_${message.author.id}`, -150000)
        db.push(`esya_${message.author.id}`, 'Keleş')

        const Pâyidar = new MessageEmbed()
        .setDescription(`
          ${message.author} - Füze Seçimi

        **Satın Alım Başarılı.** :grinning:
        \`Demek Füze aldın ha, demek milleti bombalayacan ha, helal olsun sana, hakkını ver yiğidim çok paran gitti.\`
        `)
        .setColor(0xff0000)
        .setFooter('Pâyidar Code')
        message.channel.send(Pâyidar) 
    }
  }
};

module.exports.configuration = {
    name: "satın-al",
    aliases: ['Satın-al', 'SATIN-AL']
};