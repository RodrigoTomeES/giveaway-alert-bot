import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Giveaway } from '../model/Giveaway.mjs';

import HttpClient from './HttpClient.mjs';

export abstract class GiveawayAPI extends HttpClient {
  public constructor(url: string) {
    super(url);
  }

  protected getGenericGiveaways<T>(
    endpoint: string,
    config?: AxiosRequestConfig<any>
  ): Promise<AxiosResponse<T, any>> {
    return this.instance.get<T>(endpoint, config);
  }

  abstract getGiveaways(
    endpoint: string
  ): Promise<AxiosResponse<Giveaway[], any>>;
}
