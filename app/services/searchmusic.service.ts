import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { Artist } from './vo/artist';
import { Album } from './vo/album';

@Injectable()
export class SearchMusicService {

    constructor( private _http: Http ){

    }

    searchMusic( input: string, type='artist' )
    {
        let url = 'https://api.spotify.com/v1/search?query='+input+
                    '&offset=0&limit=20' + 
                    '&type=' + type + '&market=US';
        console.log('URL >> '+ url );
        return this._http.get( url ).map( data => data.json() );
    }

    getArtist( id: string ) : Observable<Artist>{
        let url = 'https://api.spotify.com/v1/artists/' + id;
        return this._http.get( url ).map( data => data.json() );
    }

    getAlbums( id: string ): Observable<Album[]> {
        
        let url = 'https://api.spotify.com/v1/artists/' + id + '/albums';
        console.log( 'Calling getAlbums service...  ' + url );

        return this._http.get( url ).map( data => data.json().items );
    }

    getAlbum( id: string ): Observable<Album> {
        let url = 'https://api.spotify.com/v1/albums/' + id;
        console.log( 'Calling getAlbum service api : ' + url );

        return this._http.get( url ).map( data => data.json() );
    }
}