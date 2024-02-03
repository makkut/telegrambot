import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";

dotenv.config();
const token = process.env.TELEGRAM_TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.on("new_chat_members", (msg) => {
  const chatId = msg.chat.id;
  console.log(msg);
  const first_name = msg.new_chat_member.first_name;

  bot.sendMessage(chatId, `👋 Добро пожаловать, ${first_name}!✅`);
});

var options = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: "Алиса мини 🟣", callback_data: "1" }],
      [{ text: "Алиса миди 🟠", callback_data: "data 2" }],
      [{ text: "Алиса макси 🟢", callback_data: "text 3" }],
    ],
  }),
};

bot.onText(/\/info/, function (msg) {
  bot.sendMessage(
    msg.chat.id,
    "Что вас конкретно интересует? Выберите варианты ниже:",
    options
  );
});
