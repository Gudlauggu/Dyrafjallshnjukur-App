import {Genre} from '../../genres/shared/genre.model';

export class Video {
  id?: number;
  videoName: string;
  genre: Genre;
  year: string;
  available: boolean;
}
