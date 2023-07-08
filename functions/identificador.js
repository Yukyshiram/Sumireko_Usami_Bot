const CX = require("../global");
const logCommand = require("../log/logcommand");
const cx = require('consola');

async function identificador() {
    try {
        CX.command('identificadores', async (ctx) => {
            logCommand(ctx);

            try {
                const imageUrl = 'https://github.com/Yukyshiram/recursos_CDA/blob/main/ghost.png?raw=true';
                const caption = `🪻Idenficadores x pais🪻
'af': afrikáans
'sq': albanés
'am': amárico
'ar': árabe
'hy': armenio
'az': azerí
'eu': euskera
'be': bielorruso
'bn': bengalí
'bs': bosnio
'bg': búlgaro
'ca': catalán
'ceb': cebuano
'ny': chichewa
'zh-CN': chino (simplificado)
'zh-TW': chino (tradicional)
'co': corso
'hr': croata
'cs': checo
'da': danés
'nl': neerlandés
'en': inglés
'eo': esperanto
'et': estonio
'tl': filipino
'fi': finlandés
'fr': francés
'fy': frisón
'gl': gallego
'ka': georgiano
'de': alemán
'el': griego
'gu': gujarati
'ht': criollo haitiano
'ha': hausa
'haw': hawaiano
'iw': hebreo
'hi': hindi
'hmn': hmong
'hu': húngaro
'is': islandés
'ig': igbo
'id': indonesio
'ga': irlandés
'it': italiano
'ja': japonés
'jw': javanés
'kn': canarés
'kk': kazajo
'km': camboyano
'rw': kinyarwanda
'ko': coreano
'ku': kurdo
'ky': kirguís
'lo': laosiano
'la': latín
'lv': letón
'lt': lituano
'lb': luxemburgués
'mk': macedonio
'mg': malgache
'ms': malayo
'ml': malayalam
'mt': maltés
'mi': maorí
'mr': maratí
'mn': mongol
'ne': nepalí
'no': noruego
'ps': pastún
'fa': persa
'pl': polaco
'pt': portugués
'pa': punjabí
'ro': rumano
'ru': ruso
'sm': samoano
'gd': gaélico escocés
'sr': serbio
'st': sesotho
'sn': shona
'sd': sindhi
'si': cingalés
'sk': eslovaco
'sl': esloveno
'so': somalí
'es': español
'su': sundanés
'sw': suajili
'sv': sueco
'tg': tayiko
'ta': tamil
'tt': tártaro
'te': telugu
'th': tailandés
'tr': turco
'tk': turcomano
'uk': ucraniano
'ur': urdu
'ug': uigur
'uz': uzbeko
'vi': vietnamita
'cy': galés
'xh': xhosa
'yi': yidis
'yo': yoruba
'zu': zulú`;
                ctx.replyWithPhoto({ url: imageUrl }, { caption: caption });
            } catch (error) {
                cx.warn("Hay un error");
            }
        });
    } catch (error) {
        cx.error('hay un error en identificador.js');
    }
}

module.exports = identificador;