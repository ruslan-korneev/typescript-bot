import { Bot } from "grammy";


const bot = new Bot("2013778260:AAF86EkIFOn3AoM1rSkgfWNwSSxjD811ZOQ");


bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));
bot.on("message", (ctx) => ctx.reply("Got another message!"));


bot.start();
