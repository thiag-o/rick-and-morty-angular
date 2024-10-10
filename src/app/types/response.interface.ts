export interface BaseResponseInterface<T> {
  info: Info;
  results: T[];
}

interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string | null;
}
