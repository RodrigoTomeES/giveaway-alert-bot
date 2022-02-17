import { Telegraf } from 'telegraf';
import * as dotenv from 'dotenv';

dotenv.config();

export class Telegram {
  private static _bot = null;

  static {
    Telegram._bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);
  }

  static sendMessage(message: string) {
    Telegram._bot.telegram.sendMessage(process.env.TELEGRAM_CHAT_ID, message);
  }
}
