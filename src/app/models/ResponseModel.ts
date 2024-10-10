export default class ResponseModel<T> {
  info: Info;
  results: T[];

  constructor(data: ResponseModel<T>) {
    this.info = data.info;
    this.results = data.results;
  }
}

interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string | null;
}
