import { lauchCron, sendMessage, SUPPORTED_WEBSITES } from './util/index.mjs';
import { TypeConfig } from './types';

import config from './giveawaybot.config.json' assert { type: 'json' };

sendMessage(
  'If you are seeing this message you have your Giveaway Alert Bot successfully setup 🤓'
);

(config as TypeConfig[])?.forEach((x: TypeConfig) => {
  switch (x.website) {
    case SUPPORTED_WEBSITES.eualienware.website:
      lauchCron(x.cron, SUPPORTED_WEBSITES.eualienware);
      break;
    case SUPPORTED_WEBSITES.naalienware.website:
      lauchCron(x.cron, SUPPORTED_WEBSITES.naalienware);
      break;
    case SUPPORTED_WEBSITES.communityalienware.website:
      lauchCron(x.cron, SUPPORTED_WEBSITES.communityalienware);
      break;
    case SUPPORTED_WEBSITES.freesteamkeys.website:
      lauchCron(x.cron, SUPPORTED_WEBSITES.freesteamkeys);
      break;
    case SUPPORTED_WEBSITES.steelseries.website:
      lauchCron(x.cron, SUPPORTED_WEBSITES.steelseries);
      break;
    default:
      sendMessage(`The website ${x.website} is not supported`);
  }
});
