import { lauchCron, sendMessage, SUPPORTED_WEBSITES } from './util/index.mjs';
import { TypeConfig } from './types';

import config from './giveawaybot.config.json' assert { type: 'json' };

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
    default:
      sendMessage(`The website ${x.website} is not supported`);
  }
});
