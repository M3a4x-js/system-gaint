const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
var Jimp = require("jimp");
bot.commands = new Discord.Collection();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////ALPHA / ALPHA CODES / ALPHA CODES///////////
////ALPHA / ALPHA CODES / ALPHA CODES//////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////ALPHA / ALPHA CODES / ALPHA CODES////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////ALPHA / ALPHA CODES / ALPHA CODES//////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////ALPHA / ALPHA CODES / ALPHA CODES//////////
///////////////////////////////////////////////////////////////////////////////////////ALPHA / ALPHA CODES / ALPHA CODES//////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////ALPHA / ALPHA CODES / ALPHA CODES///////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////ALPHA / ALPHA CODES / ALPHA CODES///////////////////////////



fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

fs.readdir("./others/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./others/${f}`);
    console.log(`${f} loaded!`);
  });
});


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////ALPHA / ALPHA CODES / ALPHA CODES///////////
////ALPHA / ALPHA CODES / ALPHA CODES//////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////ALPHA / ALPHA CODES / ALPHA CODES////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////ALPHA / ALPHA CODES / ALPHA CODES//////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////ALPHA / ALPHA CODES / ALPHA CODES//////////
///////////////////////////////////////////////////////////////////////////////////////ALPHA / ALPHA CODES / ALPHA CODES//////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////ALPHA / ALPHA CODES / ALPHA CODES///////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////ALPHA / ALPHA CODES / ALPHA CODES///////////////////////////

bot.login(process.env.BOT_TOKEN);
