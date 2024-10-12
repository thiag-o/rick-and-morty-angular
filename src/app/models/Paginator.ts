import { HttpParams } from '@angular/common/http';
import { BaseResponseInterface } from '../types/response.interface';

export default class Paginator<T> {
  private _page: number;

  private _info?: Info;

  private _results: T[] = [];
  private _params?: { [key: string]: any };

  constructor(page?: number) {
    this._page = 1;
  }

  get info() {
    return this._info;
  }

  setData({ info, results }: BaseResponseInterface<T>) {
    this._results.push(...results);
    this._info = info;
  }
  get data() {
    return this._results;
  }

  get total() {
    return this._info?.count ?? -1;
  }

  set page(value: number) {
    this._page = value;
  }
  get page() {
    return this._page;
  }

  set params(value: GenericParams) {
    this._params = this._params ? Object.assign(this._params, value) : value;
    this._page = 1;
    this._results = [];
  }

  get params(): HttpParams {
    let httpParams = new HttpParams();
    if (this._params) {
      Object.keys(this._params).forEach((key) => {
        if (this._params && this._params[key])
          httpParams = httpParams.append(key, this._params[key]);
      });
    }

    if (this._page) {
      httpParams = httpParams.append('page', this._page);
    }

    return httpParams;
  }
}

type GenericParams = { [key: string]: any };
interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string | null;
}
