const express = require("express")
const app = express()
app.get("/", (req, res) => {
  res.send("Hi")
})
app.listen(3000, () => {
  console.log("Project is ready!")
})

const Discord = require("discord.js");
const client = new Discord.Client({
  disableEveryone: true,
  disableEvents: ["TYPING_START"]
})

client.on("message", message => {
  if(message.content === "ping") {
    message.channel.send("PONG :)")
  }
  if(message.content === "embed") {
    let embed = new Discord.MessageEmbed()
    .setTitle("This is a TITLE")
    .setDescription("This is a DESCRIPTION")
    .setFooter("This is a FOOTER")
    .setColor("GREEN")
    message.channel.send(embed)
  }
  if(message.content === "gacha") {
    var choices = [
      "**gacha:** you hass ben get :zombie: ",
      "gacha:** oh no kamu belum ",
      "**gacha:** kamu mendapatkan legendary naga :dragon: ",
      "gacha: kamu mati",
      "gacha: kamu telah mendapatkan sword/pedang :crossed_swords:bunuh zombie agar kamu tidak terinfeksi",
      "gacha: oh no kamu terinfeksi cepat gacha dan dapatkan obat nya",
      "darah mu hanya 60% masih hidup cepat dapatkan obat nya",
      "gacha winner:wah kamu mendapatkan obat penyembuh dari racun zombie semua tubuh kamu pulih ", 
"gacha(items langka) : kamu telah mendapatkan item yang paling langka",
"gacha : dapatkan role vip dengan cara invite 12 orang"  ]
    var output = choices[Math.floor(Math.random()*choices.length)];
    
    message.channel.send(output)
  }
  if(message.content.startsWith("t!ban")) {
    if(message.member.hasPermission("BAN_MEMBERS")) {
      let member = message.mentions.members.first()
      if(!member) message.channel.send("Please mention someone to ban from the server.")
      else {
        member.ban().then(mem => {
        message.channel.send(`Banned ${mem.user.username}!`)
      })
      }
    } else {
      message.channel.send("Sorry but you don't have permission.")
    }
  }
})
client.login(process.env.TOKEN)