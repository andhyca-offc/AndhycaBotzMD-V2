// S C R I P T  O R I  B Y  @BochilGaming π­
// M A D E  B Y  Letta - Sama π°  
// Credits, jangan dihapus atau diubah!

// - - THANKS TO - -
// β’ Allah SWT
// β’ Nurutomo
// β’ Bochilgaming
// β’ Rominaru
// β’ Kannachann
// β’ The.Sad.Boy01
// β’ Rasel comel
// β’ Xtreshe (Beban)
// β’ DaniBotz Team
// β’ Ary Botz (ank ajg)
// β’ Dll

//[!] Jangan Dihapus, mending ditambahin 

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'

/*============= WAKTU =============*/
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
      
    
/*============== SOCIAL ==============*/

// kalo ga punya ketik "-" atau biarin aja biar ada creditsnya :v
global.sig = 'https://instagram/andhycarsrofficial'
global.sgh = 'https://github.com/andhyca-offc'
global.sgc = 'https://chat.whatsapp.com/DTtOcmrCAkKFrVZJD6jb6M'
global.sdc = 'https://github.com/andhyca-offc'
global.snh = '-'

/*============== PAYMENT ==============*/
global.pdana = '085872761910'
global.povo = '-'
global.pgopay = '085872761910'
global.ppulsa = '085872761910'
global.ppulsa2 = '085872761910'
global.psaweria = '-'

/*============== NOMOR ==============*/
global.nomorbot = '6287829536442'
global.nomorown = '6285872761910','6285794408499','62895330584590'
global.namebot = 'ππ§ππ‘π²ππππ¨π­π³-ππΰ½Ό'
global.nameown = 'α΄Ήα΄Ώα­ πΈππππͺπππΎπππ«ΰ½Ό ΓαΦΝΓ'


/*============== STAFF ==============*/
global.owner = [
  ['6285872761910', 'α΄Ήα΄Ώα­ πΈππππͺπππΎπππ«ΰ½Ό ΓαΦΝΓ', true]
  ['6285794408499', 'α΄Ήα΄Ώα­ πΈππππͺπππΎπππ«ΰ½Ό ΓαΦΝΓ', true]
  ['62895330584590', 'ππ§ππ‘π²ππππ¨π­π³-ππΰ½Ό', true]
  // [number, dia creator/owner?, dia developer?]
] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user bukan disini nambahinnya, ketik .addprem @user 10


/*============== API ==============*/
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  neoxr: 'https://neoxr-api.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  ana: 'https://anabotofc.herokuapp.com/',
  amel: 'https://melcanz.com',
  hardianto: 'https://hardianto.xyz',
  botstyle: 'https://botstyle-api.herokuapp.com',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  kanx: 'https://kannxapi.herokuapp.com/'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'APIKEY',
  'https://anabotofc.herokuapp.com/': 'APIKEY',
  'https://api.lolhuman.xyz': 'APIKEY',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://melcanz.com': 'APIKEY',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://botstyle-api.herokuapp.com': 'APIKEY',
  'https://hardianto.xyz': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}
// Kata APIKEY itu isi dengan apikey lu sendiri, dengan beli ke website itu

/*============== WATERMARK ==============*/
global.wm = 'γ ππ§ππ‘π²ππππ¨π­π³-ππΰ½Ό |α΄Ήα΄Ώα­ πΈππππͺπππΎπππ«ΰ½Ό ΓαΦΝΓβ© γ' //Main Watermark
global.wm2 = '    δΉ α΄Ήα΄Ώα­ πΈππππͺπππΎπππ«ΰ½Ό ΓαΦΝΓ δΉ     '
global.wm3 = 'ππ§ππ‘π²ππππ¨π­π³-ππΰ½Ό |αͺ'
global.botdate = `β«Ήβ«Ί ππ?ππ²: ${week} ${date}`
global.bottime = `π§ π π  π : ${wktuwib}`
global.titlebot = 'α΄Ήα΄Ώα­ πΈππππͺπππΎπππ«ΰ½Ό ΓαΦΝΓ'
global.author = global.wm


/*============== LOGO ==============*/
global.thumb = 'https://telegra.ph/file/5444accedcd06f172899d.jpg' //Main Thumbnail
global.thumb2 = 'https://telegra.ph/file/5444accedcd06f172899d.jpg'
global.thumbbc = 'https://telegra.ph/file/d389f4acafac741f6592c.jpg' //For broadcast
global.giflogo = 'https://telegra.ph/file/a46ab7fa39338b1f54d5a.mp4'

global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='

/*============== TEXT ==============*/
global.wait = '```γβ°β°β°β±β±β±β±β±β±β±γScraping Metadata...```'
global.eror = '```404 error```'

/*=========== TYPE DOCUMENT ===========*/
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'

global.thumbdoc = 'https://telegra.ph/file/6e45318d7c76f57e4a8bd.jpg'

/*=========== FAKE SIZE ===========*/
global.fsizedoc = '999999999999999' // default 10TB
global.fpagedoc = '999'

/*=========== HIASAN ===========*/
// DEFAULT MENU
global.dmenut = '    βͺ' //top
global.dmenub = 'π ' //body
global.dmenub2 = 'π ' //body for info cmd on Default menu
global.dmenuf = '\n' //footer

// COMMAND MENUFonts for Android and iPhone  - www.fontskeyboard.com/share-now
global.dashmenu = 'γβ°β°β°β±β±β±β±β±β±β±γ'
global.cmenut = '       γ'                       //top
global.cmenuh = 'γ'                        //header
global.cmenub = 'π '                            //body
global.cmenuf = '\n'                //footer
global.cmenua = '\nβ ββββββββββββββββββββββββββββββββ β\n     ' //after
global.pmenus = 'βͺ'                              //pembatas menu selector

global.htki = 'ββββββγ' // Hiasan Titile (KIRI)
global.htka = 'γββββββ' // Hiasan Title  (KANAN)
global.lopr = 'β' //LOGO PREMIUM ON MENU.JS
global.lolm = 'β' //LOGO FREE ON MENU.JS
global.htjava = 'β«Ήβ«Ί'    //hiasan Doang :v
global.hsquere = ['βΆ','β','β«Ήβ«Ί']

/*============== STICKER WM ==============*/
global.stickpack = '\n'
global.stickauth = `δΉ ε°ΊδΉγδΉεηͺ.|αͺ \nig reteam.id`

global.multiplier = 38 // The higher, The harder levelup

/*============== EMOJI ==============*/
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: 'π',
      limit: 'π«',
      health: 'β€οΈ',
      exp: 'β¨',
      money: 'πΉ',
      bank: 'π¦',
      potion: 'π₯€',
      diamond: 'π',
      common: 'π¦',
      uncommon: 'ποΈ',
      mythic: 'π',
      legendary: 'ποΈ',
      superior: 'πΌ',
      pet: 'π',
      trash: 'π',
      armor: 'π₯Ό',
      sword: 'βοΈ',
      pickaxe: 'βοΈ',
      fishingrod: 'π£',
      wood: 'πͺ΅',
      rock: 'πͺ¨',
      string: 'πΈοΈ',
      horse: 'π΄',
      cat: 'π±',
      dog: 'πΆ',
      fox: 'π¦',
      petFood: 'π',
      iron: 'βοΈ',
      gold: 'πͺ',
      emerald: 'βοΈ',
      upgrader: 'π§°'
      
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

//------ JANGAN DIUBAH -----
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
