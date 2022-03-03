import { AxiosResponse } from 'axios';

import { Telegram } from './Telegram.mjs';
import { Giveaway } from '../model/index.mjs';

export const processData = (
  response: AxiosResponse<Giveaway[], any>,
  baseURL: string,
  currentGiveaways: Giveaway[]
): void => {
  if (currentGiveaways.length == 0) {
    currentGiveaways = response.data;

    sendMessage(
      'This is the first execution of the bot, so we are fetching data...'
    );
  } else {
    const newGiveaways = response.data;
    let isOld = false;

    newGiveaways.forEach((newGiveaway) => {
      currentGiveaways.forEach((currentGiveaway) => {
        isOld = isOld || Giveaway.compare(currentGiveaway, newGiveaway);
      });

      if (!isOld) {
        console.log(`New giveaway detected: ${baseURL}${newGiveaway.url}`);
        sendMessage(`${baseURL}${newGiveaway.url}`);
      }
    });

    if (!isOld) {
      currentGiveaways = newGiveaways;
    }
  }
};

export const sendMessage = (message: string) => Telegram.sendMessage(message);
