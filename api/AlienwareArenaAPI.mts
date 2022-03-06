import axios from 'axios';

import { GiveawayAPI } from './GiweawayAPI.mjs';
import { AlienwareArenaGiveaway } from '../model/index.mjs';

export class AlienwareArenaAPI extends GiveawayAPI {
  public constructor(url: string) {
    super(url);
  }

  public getGiveaways(endpoint: string) {
    return this.getGenericGiveaways<AlienwareArenaGiveaway[]>(endpoint, {
      transformResponse: [].concat(
        axios.defaults.transformResponse,
        (data: any) => {
          return {
            data: data.data.map((x: any) => new AlienwareArenaGiveaway(x)),
          };
        }
      ),
    });
  }
}
