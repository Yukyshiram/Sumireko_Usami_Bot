const CX = require("../global");
const logCommand = require('../log/logcommand');

async function start() {
    CX.start((ctx) => {
        logCommand(ctx);
        
        const imageUrl = 'https://github.com/Yukyshiram/recursos_CDA/blob/main/sumire.png?raw=true';

        const caption = `🪻 CX Start 🪻---->
| Yo soy @SumirekoUsami_bot,
| https://t.me/SumirekoUsami_bot
|
| Este es mi menu
| /start
| /help
|
| /walldesktop
| /wallphone
| /randomanime
| /meme
| /wiki + busqueda
|
| for youtube
| /mp3 + link
| /mp4 + link
| 
| Translators
|
| /translator + texto
| /spanishto + identificador + texto
| /identificadores 
|------------->
        `;

ctx.replyWithPhoto({ url: imageUrl }, { caption: caption });
    });
}

module.exports = start;