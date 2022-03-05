import { GiveawayAPI } from '../api/GiweawayAPI.mjs';

export type TypeConfig = { website: string; cron: string };

export type TypeSupportedWebsites = {
  [key: string]: {
    website: string;
    api: GiveawayAPI;
    endpoint: string;
  };
};
