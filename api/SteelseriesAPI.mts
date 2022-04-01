import axios from 'axios';

import { GiveawayAPI } from './GiweawayAPI.mjs';
import { SteelseriesGiveaway } from '../model/index.mjs';

export class SteelseriesAPI extends GiveawayAPI {
  public constructor(url: string) {
    super(url);
  }

  public getGiveaways(endpoint: string) {
    return this.getGenericGiveaways<SteelseriesGiveaway[]>(endpoint, {
      transformResponse: [].concat(
        axios.defaults.transformResponse,
        (data: any) => {
          return { data: data.map((x: any) => new SteelseriesGiveaway(x)) };
        }
      ),
    });
  }
}
