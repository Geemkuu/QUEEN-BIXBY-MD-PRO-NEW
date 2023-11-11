//═══════════════════════════════════════════════════════//
//
//                              𝙶𝙾𝙹𝙾-𝚂𝙰𝚃𝙾𝚁𝚄 𝓫𝔂 𝓷𝓮𝔁𝓾𝓼𝓝𝔀
//𝙰𝙳𝙾𝙿𝚃𝙴𝙳 𝙵𝚁𝙾𝙼  𝚂𝙲𝚁𝙸𝙿𝚃 𝙾𝙵 𝙲𝙷𝙴𝙴𝙼𝚂𝙱𝙾𝚃 𝚅2 𝙱𝚈 𝙳𝙶𝚇𝚎𝚘𝚗 
//
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['254700569709']
global.premium = ['254700569709']
global.ownernomer = '254700569709'
global.ownername = '亗『ＧＥＥ』亗'
global.botname = 'wife of 亗『ＧＥＥ』亗'
global.footer = 'your n͜͡önesence × done by wife of 亗『ＧＥＥ』亗'
global.ig = 'https://github.com/darkalphaxteam'
global.region = 'India, South India, Kerala'
global.sc = 'https://github.com/darkalphaxteam/QUEEN-BIXBY-MD-PRO-NEW'
global.myweb = 'https://youtube.com/channel/UCvpyOCBCaBSCdv4QolnO0WQ'
global.packname = 'n͜͡önesence ×'
global.author = '亗『ＧＥＥ』亗'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '🚮'
global.mess = {
    success: 'Done ✓',
    admin: 'you aint no damn admin here',
    botAdmin: 'as the wife of gee i must be an admin',
    owner: 'This Feature Is Only For my husband亗『ＧＥＥ』亗',
    group: 'as the wife of gee this is only for groups',
    private: 'Features Used Only For dm',
    bot: 'This Feature Is Only For wife of 亗『ＧＥＥ』亗',
    wait: 'Please Wait..im cooking for my husband 亗『ＧＥＥ』亗.',
    error: 'Error! Api Key Is Expired🤔 let me go to my abebo 亗『ＧＥＥ』亗!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./BixbyMedia/djt.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
