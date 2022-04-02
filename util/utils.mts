import { AxiosResponse } from 'axios';
import { scheduleJob } from 'node-schedule';

import { Telegram } from './Telegram.mjs';
import { Giveaway } from '../model/index.mjs';
import { TypeSupportedWebsite } from '../types/index.js';

export const lauchCron = (cron: string, web: TypeSupportedWebsite) => {
  const currentGiveaways: Map<number, Giveaway> = new Map();

  scheduleJob(web.website, cron, () =>
    web.api
      .getGiveaways(web.endpoint)
      .then((response) =>
        processData(response, web.api.baseURL, currentGiveaways)
      )
      .catch((error) => console.error(error.toJSON()))
  );
};

export const processData = (
  response: AxiosResponse<Giveaway[], any>,
  baseURL: string,
  currentGiveaways: Map<number, Giveaway>
): void => {
  if (currentGiveaways.size === 0) {
    response.data.forEach((giveaway: Giveaway) =>
      currentGiveaways.set(giveaway.id, giveaway)
    );

    sendMessage(
      `This is the first execution of the bot for ${baseURL}, so we are fetching data...`
    );
  } else {
    const newGiveaways = response.data;
    let isOld = true;

    newGiveaways.forEach((newGiveaway: Giveaway) => {
      const alreadyExist = currentGiveaways.has(newGiveaway.id);
      isOld = isOld && alreadyExist;

      if (!alreadyExist) {
        sendMessage(`New giveaway detected: ${newGiveaway.toString(baseURL)}`);
      }
    });

    if (!isOld) {
      currentGiveaways.clear();
      newGiveaways.forEach((giveaway: Giveaway) =>
        currentGiveaways.set(giveaway.id, giveaway)
      );
    }
  }
};

export const sendMessage = (message: string) => {
  console.log(message);
  Telegram.sendMessage(message);
};
