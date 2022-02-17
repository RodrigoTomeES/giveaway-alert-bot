import axios, { AxiosInstance, AxiosResponse } from 'axios';

declare module 'axios' {
  interface AxiosResponse<T = any> extends Promise<T> {}
}

abstract class HttpClient {
  protected readonly instance: AxiosInstance;
  private _baseURL: string;

  public constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
    });

    this._baseURL = baseURL;
    this._initializeResponseInterceptor();
  }

  private _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this._handleResponse,
      this._handleError
    );
  };

  private _handleResponse = ({ data }: AxiosResponse) => data;

  protected _handleError = (error: any) => Promise.reject(error);

  public get baseURL(): string {
    return this._baseURL;
  }
}

export default HttpClient;
