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
        processData(response, web.baseGiveawayURL, currentGiveaways)
      )
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }

        console.log(error.config);
      })
  );
};

export const processData = (
  response: AxiosResponse<Giveaway[], any>,
  baseGiveawayURL: string,
  currentGiveaways: Map<number, Giveaway>
): void => {
  if (currentGiveaways.size === 0) {
    response.data.forEach((giveaway: Giveaway) =>
      currentGiveaways.set(giveaway.id, giveaway)
    );

    sendMessage(
      `This is the first execution of the bot for ${baseGiveawayURL}, so we are fetching data...`
    );
  } else {
    const newGiveaways = response.data;
    let isOld = true;

    newGiveaways.forEach((newGiveaway: Giveaway) => {
      const alreadyExist = currentGiveaways.has(newGiveaway.id);
      isOld = isOld && alreadyExist;

      if (!alreadyExist) {
        sendMessage(
          `New giveaway detected: ${newGiveaway.toString(baseGiveawayURL)}`
        );
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
