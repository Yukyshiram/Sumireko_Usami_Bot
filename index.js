const cx = require("consola");
const chalk = require('chalk');
const comandos = require('./commands');

//stiles
const green = chalk.green;
const blue = chalk.italic.blue;
const yellow = chalk.yellow;

const CX = require('./global')

comandos();

try {
    CX.launch();
    console.clear();
    //bot.telegram.sendMessage(idUsuarioTelegram, '*Judith esta on y se encuentra funcional!*')
    cx.success('Sumireko se a iniciado exitosamente \n')
} catch (error) {
    cx.error(`El error esta en: \n${error}`)
}

//console
CX.use((ctx) => {
    if (ctx.message.text == undefined) {

    } else {
        cx.info(`\nChat:` + yellow(ctx.chat.type) + `\n` +
            green(`Usuario: `) + blue(ctx.from.username) + `\n` +
            green(`Message: `) + blue(ctx.message.text) + `\n` +
            green(`ID: ` + blue(ctx.from.id) + `\n`)
        );
    }

});
