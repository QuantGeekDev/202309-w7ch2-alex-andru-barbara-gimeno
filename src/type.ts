export interface CharacterData {
  id: number;
  name: string;
  height: string;
  avatarUrl: string;
  mass: string;
  created: string;
  url: string;
}

export interface StarWarsApiResponse {
  count: number;
  next: string;
  previous: string;
  results: CharacterData[];
}
