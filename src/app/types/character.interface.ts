type Status = 'Alive' | 'Dead' | 'unknown';
type Gender = 'Female' | 'Male' | 'Genderless' | 'unknown';

interface LocationProps {
  name: string;
  url: string;
}

export interface ICharacter {
  id: number;
  name: string;
  status: Status;
  species: string;
  gender: Gender;
  origin: LocationProps;
  location: LocationProps;
  image: string;
  episode: string[];
  url: string;
  created: string;
}
