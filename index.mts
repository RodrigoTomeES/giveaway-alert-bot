import {
  AlienwareArenaAPI,
  FreeSteamKeysAPI,
  SteelseriesAPI,
} from './api/index.mjs';
import { lauchCron, sendMessage } from './util/index.mjs';
import { TypeConfig, TypeSupportedWebsites } from './types';

import config from './giveawaybot.config.json' assert { type: 'json' };

const eualienware = new AlienwareArenaAPI('https://eu.alienwarearena.com');
const naalienware = new AlienwareArenaAPI('https://na.alienwarearena.com');
const freesteamkeys = new FreeSteamKeysAPI('https://www.freesteamkeys.com');
const steelseries = new SteelseriesAPI('https://api.igsp.io');

const SUPPORTED_WEBSITES: TypeSupportedWebsites = {
  eualienware: {
    website: 'eualienware',
    api: eualienware,
    endpoint: '/esi/featured-tile-data/Giveaway',
  },
  naalienware: {
    website: 'naalienware',
    api: naalienware,
    endpoint: '/esi/featured-tile-data/Giveaway',
  },
  freesteamkeys: {
    website: 'freesteamkeys',
    api: freesteamkeys,
    endpoint: '/wp-json/wp/v2/posts',
  },
  steelseries: {
    website: 'steelseries',
    api: steelseries,
    endpoint: '/promotions',
  },
};

sendMessage(
  'If you are seeing this message you have your Giveaway Alert Bot successfully setup 🤓'
);

(config as TypeConfig[])?.forEach((x: TypeConfig) => {
  switch (x.website) {
    case SUPPORTED_WEBSITES.eualienware.website:
      lauchCron(
        x.website,
        x.cron,
        SUPPORTED_WEBSITES.eualienware.api,
        SUPPORTED_WEBSITES.eualienware.endpoint
      );
      break;
    case SUPPORTED_WEBSITES.naalienware.website:
      lauchCron(
        x.website,
        x.cron,
        SUPPORTED_WEBSITES.naalienware.api,
        SUPPORTED_WEBSITES.naalienware.endpoint
      );
      break;
    case SUPPORTED_WEBSITES.freesteamkeys.website:
      lauchCron(
        x.website,
        x.cron,
        SUPPORTED_WEBSITES.freesteamkeys.api,
        SUPPORTED_WEBSITES.freesteamkeys.endpoint
      );
      break;
    case SUPPORTED_WEBSITES.steelseries.website:
      lauchCron(
        x.website,
        x.cron,
        SUPPORTED_WEBSITES.steelseries.api,
        SUPPORTED_WEBSITES.steelseries.endpoint
      );
      break;
  }
});
