module.exports = client => {
  
var randomMesajlar = [

    "ÂrézCK Codes",
    "Bot Aktif!",
    "Sâvagé Bot by ÂrézCK"
]




setInterval(function() {
    var random = randomMesajlar[Math.floor(Math.random() * (randomMesajlar.length))]
          client.user.setPresence({
        status: "dnd",
        activity: {name: `${random}`}
    })
}, 3 * 5000);
    console.log(`${client.commands.size} komut yüklendi!`)
    console.log(`Bot ${client.user.tag} Kullanıcı Adı İle Aktif!`)
}