import axios from 'axios';

import { GiveawayAPI } from './GiweawayAPI.mjs';
import { FreeSteamKeysGiveaway } from '../model/index.mjs';

export class FreeSteamKeysAPI extends GiveawayAPI {
  public constructor(url: string) {
    super(url);
  }

  public getGiveaways(endpoint: string) {
    return this.getGenericGiveaways<FreeSteamKeysGiveaway[]>(endpoint, {
      transformResponse: [].concat(
        axios.defaults.transformResponse,
        (data: any) => {
          return { data: data.map((x: any) => new FreeSteamKeysGiveaway(x)) };
        }
      ),
    });
  }
}
