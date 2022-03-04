import { AxiosResponse } from 'axios';

import { Telegram } from './Telegram.mjs';
import { Giveaway } from '../model/index.mjs';

export const processData = (
  response: AxiosResponse<Giveaway[], any>,
  baseURL: string,
  currentGiveaways: Giveaway[]
): void => {
  if (currentGiveaways.length == 0) {
    currentGiveaways.push(...response.data);

    sendMessage(
      'This is the first execution of the bot, so we are fetching data...'
    );
  } else {
    const newGiveaways = response.data;
    let isOld = false;

    newGiveaways.forEach((newGiveaway) => {
      currentGiveaways.forEach((currentGiveaway) => {
        isOld = isOld || currentGiveaway.compare(newGiveaway);
      });

      if (!isOld) {
        console.log(`New giveaway detected: ${newGiveaway.toString(baseURL)}`);
        sendMessage(newGiveaway.toString(baseURL));
      }
    });

    if (!isOld) {
      currentGiveaways.length = 0;
      currentGiveaways.push(...newGiveaways);
    }
  }
};

export const sendMessage = (message: string) => Telegram.sendMessage(message);
