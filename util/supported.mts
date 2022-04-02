import {
  AlienwareArenaAPI,
  FreeSteamKeysAPI,
  SteelseriesAPI,
} from '../api/index.mjs';
import { TypeSupportedWebsites } from '../types';

const eualienware = new AlienwareArenaAPI('https://eu.alienwarearena.com');
const naalienware = new AlienwareArenaAPI('https://na.alienwarearena.com');
const freesteamkeys = new FreeSteamKeysAPI('https://www.freesteamkeys.com');
const steelseries = new SteelseriesAPI('https://api.igsp.io');

export const SUPPORTED_WEBSITES: TypeSupportedWebsites = {
  eualienware: {
    website: 'eualienware',
    api: eualienware,
    endpoint: '/esi/featured-tile-data/Giveaway',
    baseGiveawayURL: eualienware.baseURL,
  },
  naalienware: {
    website: 'naalienware',
    api: naalienware,
    endpoint: '/esi/featured-tile-data/Giveaway',
    baseGiveawayURL: naalienware.baseURL,
  },
  freesteamkeys: {
    website: 'freesteamkeys',
    api: freesteamkeys,
    endpoint: '/wp-json/wp/v2/posts',
    baseGiveawayURL: freesteamkeys.baseURL,
  },
  steelseries: {
    website: 'steelseries',
    api: steelseries,
    endpoint: '/promotions',
    baseGiveawayURL: 'https://games.steelseries.com/giveaway',
  },
};
