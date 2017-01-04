import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchMusicService {

    constructor( private _http: Http ){

    }

    searchMusic( input: string, type='artist' )
    {
        let url = 'https://api.spotify.com/v1/search?query='+input+
                    '&offset=0&limit=20' + 
                    '&type=' + type + '&market=US';
        this._http.get( url ).map( data => data.json() );
    }
}