import { AxiosResponse } from 'axios';
import { scheduleJob } from 'node-schedule';

import { GiveawayAPI } from './api/index.mjs';
import { Giveaway } from './model/Giveaway.mjs';
import { Telegram } from './util/index.mjs';

const eualienware = new GiveawayAPI('https://eu.alienwarearena.com');
const naalienware = new GiveawayAPI('https://na.alienwarearena.com');
let currentGiveaways: Giveaway[] = [];

const processData = (
  response: AxiosResponse<Giveaway[], any>,
  baseURL: string
): void => {
  if (currentGiveaways.length == 0) {
    currentGiveaways = response.data;

    Telegram.sendMessage(
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
        Telegram.sendMessage(`${baseURL}${newGiveaway.url}`);
      }
    });

    if (!isOld) {
      currentGiveaways = newGiveaways;
    }
  }
};

Telegram.sendMessage(
  'If you are seeing this message you have your Alienware Giveaway Bot successfully setup 🤓'
);

scheduleJob('eualienware', '0 0/10 * * * *', function () {
  eualienware
    .getGiveaways()
    .then((response) => processData(response, eualienware.baseURL));
});

scheduleJob('naalienware', '0 5/10 * * * *', function () {
  naalienware
    .getGiveaways()
    .then((response) => processData(response, naalienware.baseURL));
});
