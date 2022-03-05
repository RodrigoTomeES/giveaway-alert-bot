import { AlienwareArenaAPI } from './api/index.mjs';
import { lauchCron, sendMessage } from './util/index.mjs';
import { TypeConfig, TypeSupportedWebsites } from './types';

import config from './giveawaybot.config.json' assert { type: 'json' };

const eualienware = new AlienwareArenaAPI('https://eu.alienwarearena.com');
const naalienware = new AlienwareArenaAPI('https://na.alienwarearena.com');

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
};

sendMessage(
  'If you are seeing this message you have your Alienware Giveaway Bot successfully setup 🤓'
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
    case SUPPORTED_WEBSITES.naalienware.website:
      lauchCron(
        x.website,
        x.cron,
        SUPPORTED_WEBSITES.naalienware.api,
        SUPPORTED_WEBSITES.naalienware.endpoint
      );
  }
});
