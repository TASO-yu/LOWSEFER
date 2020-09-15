const discord = require("discord.js")
const bot = new discord.Client()

bot.on('ready',() => {
    console.log("我準備好了!")
})

process.on('warning', e => console.warn(e.stack));

bot.on('message', msg => {
    if(msg.content == "!路 水") {
        msg.channel.send("報名成功 請輸入時間")
    }
})

bot.on('message', msg => {
    if(msg.content == "!路 土") {
        msg.channel.send("報名成功 請輸入時間")
    }
})

bot.on('message', msg => {
    if(msg.content == "!路 風") {
        msg.channel.send("報名成功 請輸入時間")
    }
})

bot.on('message', msg => {
    if(msg.content == "!路 火") {
        msg.channel.send("報名成功 請輸入時間")
    }
})

bot.on('message', msg => {
    if(msg.content == "!路 光") {
        msg.channel.send("報名成功 請輸入時間")
    }
})

bot.on('message', msg => {
    if(msg.content == "!路 暗") {
        msg.channel.send("報名成功 請輸入時間")
    }
})

bot.on('message', msg => {
    if(msg.content == "!巴布") {
        msg.channel.send("報名成功 請輸入時間")
    }
})

bot.on('message', msg => {
    if(msg.content == "!缺水") {
        msg.channel.send("<@&755414011486535691> 打手可以請按任意貼圖<3")
    }
})

bot.on('message', msg => {
    if(msg.content == "!缺風") {
        msg.channel.send("<@&755414033942708284> 打手可以請按任意貼圖<3")
    }
})

bot.on('message', msg => {
    if(msg.content == "!缺光") {
        msg.channel.send("<@&755414035733676072> 打手可以請按任意貼圖<3")
    }
})

bot.on('message', msg => {
    if(msg.content == "!缺暗") {
        msg.channel.send("<@&755414036710948886> 打手可以請按任意貼圖<3")
    }
})

bot.on('message', msg => {
    if(msg.content == "!缺火") {
        msg.channel.send("<@&755414038158114816> 打手可以請按任意貼圖<3")
    }
})

bot.on('message', msg => {
    if(msg.content == "!缺土") {
        msg.channel.send("<@&755414039886037062> 打手可以請按任意貼圖<3")
    }
})

bot.on('message', msg => {
    if(msg.content == "!路打手") {
        msg.channel.send("<@&755445203485065347> 打手可以請按任意貼圖<3")
    }
})

bot.on('message', msg => {
    if(msg.content == "!巴打手") {
        msg.channel.send("<@&755414041043796008> 打手可以請按任意貼圖<3")
    }
})

bot.login("NzU1MTA0ODE4OTM4MjQ5MzQ3.X1-cKg.BzTksE0dU7fnpixflGKa5MkNl-0")