// const http = require('http');
const {Telegraf} = require('telegraf');
const axios = require("axios");
const NLPCloudClient = require('nlpcloud');
const { marked } = require ('marked') //formatting
// const PORT = 3000;

const client = new NLPCloudClient('nllb-200-3-3b','fe7e819e6465ca4b03c559bdb55b232f9100948d', false)
// //Create a Bot
const bot = new Telegraf('6146123360:AAFO12u05KpnK5V8A47-eHQxiGEzZgSL8gI')

//Do something when start command was executed
bot.start(ctx => {
//Yes, you need callback son.
//Send a message when /start command has executed
ctx.reply('этот бот нихуя не умеет, умеет только перевод прислать с английского.')
  .then(setTimeout(()=>ctx.reply('*всрато'), 3000))
})

bot.command("my", (ctx)=>{ctx.reply(`${JSON.stringify(ctx.update).replace(/,/g, "\n")}
                            *{ parse_mode: 'MarkdownV2' }*  <strong>текст</strong>bb   <b> текст </b> **state:** ${JSON.stringify(ctx.state).replace(/,/g, "\n")}
                                   
                                   `

                                  );console.log(ctx)} )
//Launch the bot




//help command 
bot.help((ctx) => {
  ctx.replyWithHTML(marked.parseInline(`Hello,

1. Testing
2. This

What?

* a
* list

[test link](https://github.com/telegraf/telegraf/issues/1242) with **BOLD** and _ITALIC_.` , ctx))
})





//bot - answer 
bot.on('message', (ctx)=>{
// ctx.telegram.sendCopy(ctx.chat.id , ctx.message)
console.log('bot.on(message', ctx.message.text);

  client.translation(
    `${ctx.message.text}`,
    'eng_Latn',"rus_Cyrl"
    
).then(function (response) {
    console.log(response.data);
    let wordToTranslate = ctx.message.text
     ctx.replyWithHTML(marked.parseInline(`

 **${wordToTranslate.toUpperCase()}** 
 
 _перевод_:
           <tg-spoiler>${response.data.translation_text}</tg-spoiler>
           
 ` , ctx))
}).catch(function (err) {

    console.error(err.response.status);
    console.error(err.response.data.detail);
});
//   translate('привет!', {from: 'ru', to: 'en'}).then(res => {
//     console.log(res.text);
//     //=> Ik spreek Nederlands!
//     console.log(res.from.text.autoCorrected);
//     //=> true
//     console.log(res.from.text.value);
//     //=> I [speak] Dutch!
//     console.log(res.from.text.didYouMean);
//     //=> false
// }).catch(err => {
//     console.error(err);
// });

  console.log(ctx.message.text, '================================================');
  setTimeout(()=>console.log("timeout"), 1000)
})
bot.launch()
.then((res) =>{
console.log("Execute");
})
.catch((error) => {
console. log (error);
})




// bot.launch().then(() => {
//         console.log("Logged as "+bot.context.botInfo.first_name)
//         //If it's shows your bot name, Then try execute /start Command, Enjoy!
// });





// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello  !');
// });

// server.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}/`);
// });



client.translation(`TRY TRANSLATE FUCK FUCK`,'eng_Latn','fra_Latn').then(function (response) {
  console.log(response.data);
})
.catch(function (err) {
  console.error(err.response.status);
  console.error(err.response.data.detail);
});
