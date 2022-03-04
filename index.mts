import { scheduleJob } from 'node-schedule';

import { AlienwareArenaAPI } from './api/index.mjs';
import { Giveaway } from './model/index.mjs';
import * as Util from './util/index.mjs';

const eualienware = new AlienwareArenaAPI('https://eu.alienwarearena.com');
const naalienware = new AlienwareArenaAPI('https://na.alienwarearena.com');
const currentGiveaways: Giveaway[] = [];

Util.sendMessage(
  'If you are seeing this message you have your Alienware Giveaway Bot successfully setup 🤓'
);

scheduleJob('eualienware', '0 0/10 * * * *', () =>
  eualienware
    .getGiveaways('/esi/featured-tile-data/Giveaway')
    .then((response) =>
      Util.processData(response, eualienware.baseURL, currentGiveaways)
    )
);

scheduleJob('naalienware', '0 5/10 * * * *', () =>
  naalienware
    .getGiveaways('/esi/featured-tile-data/Giveaway')
    .then((response) =>
      Util.processData(response, naalienware.baseURL, currentGiveaways)
    )
);
