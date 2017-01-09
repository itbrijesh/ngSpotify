import { Artist } from './artist';

export class Album {
    id: string;
    name: string;
    artists = new Artist();
}