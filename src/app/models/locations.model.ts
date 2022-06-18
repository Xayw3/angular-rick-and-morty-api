export interface LocationApi {
  info: LocationApiInfo;
  results: Location;
}

interface LocationApiInfo {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}