import { GiveawayAPI } from '../api/GiweawayAPI.mjs';

export type TypeConfig = { website: string; cron: string };

export type TypeSupportedWebsite = {
  website: string;
  api: GiveawayAPI;
  endpoint: string;
  baseGiveawayURL: string;
};

export type TypeSupportedWebsites = {
  [key: string]: TypeSupportedWebsite;
};
