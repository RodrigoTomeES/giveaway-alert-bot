import { AxiosRequestConfig, AxiosResponse } from 'axios';

import HttpClient from './HttpClient.mjs';

export class GiveawayAPI extends HttpClient {
  public constructor(url: string) {
    super(url);
  }

  protected getGenericGiveaways<T>(
    endpoint: string,
    config?: AxiosRequestConfig<any>
  ): Promise<AxiosResponse<T, any>> {
    return this.instance.get<T>(endpoint, config);
  }
}
