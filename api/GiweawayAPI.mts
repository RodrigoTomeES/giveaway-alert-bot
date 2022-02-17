import HttpClient from './HttpClient.mjs';
import { Giveaway } from '../model/index.mjs';

export class GiveawayAPI extends HttpClient {
  public constructor(url: string) {
    super(url);
  }

  public getGiveaways = () =>
    this.instance.get<Giveaway[]>('/esi/featured-tile-data/Giveaway');
}
