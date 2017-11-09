import {Genre} from '../../genres/shared/genre.model';

export class Video {
  id?: number;
  videoName: string;
  genres: Genre[];
  year: string;
  available: boolean;
}
