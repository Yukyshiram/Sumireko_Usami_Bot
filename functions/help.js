const CX = require("../global");
const logCommand = require("../log/logcommand");
const cx = require('consola');

async function helper() {
    try {
        CX.help((ctx) => {
            logCommand(ctx);

            try {
                const imageUrl = 'https://github.com/Yukyshiram/recursos_CDA/blob/main/coco.png?raw=true';
                const caption = `🪻Help Menu🪻
Haber empecemos con todos los comandos,

🪻 /start 
muestra todo el menu

🪻 /help
muestra esta sección

🪻 /host
muestra el mejor host donde puedes alojar el bot

🪻 /walldesktop
manda un wallpaper para pc

🪻 /wallphone
manda un wallpaper para telefono

🪻 /meme
manda un meme en español

🪻 /wiki + texto
para usarlo es sensillo solo pon /wiki batman y te arrojara una busqueda, claramente solo cosas que existan

🪻 /mp3 + link
este comando descarga audio de youtube, sensillo 
/mp3 https://youtu.be/vtNJMAyeP0s?list=RDvtNJMAyeP0s

🪻 /mp4 + link
este comando descarga videos de youtube sensillo 
/mp4 https://youtu.be/vtNJMAyeP0s?list=RDvtNJMAyeP0s

🪻 /translator + texto
traduce cualquier texto al español por ejemplo 
/translate Invalid command. Please provide the text to translate.

🪻 /spanishto + identificador + texto
este comando tiene 3 partes, en cambio si no tiene identificador no va a traducir, este es español a global, ejemplo:
/spanishto en Hola, como estas?, yo estoy bien, tu que tal?
el identificador es "en" que significa english

🪻 /identificadores
Este comando sirve para ver los identificadores globales para el comando spanishto
                `;
                ctx.replyWithPhoto({ url: imageUrl }, { caption: caption });
            } catch (error) {
                cx.warn("Hay un error");
            }
        });
    } catch (error) {
        cx.error('hay un error en help.js');
    }
}

module.exports = helper;