import { Component, OnInit } from '@angular/core';
import { Artist } from '../../services/vo/artist';
import { Album } from '../../services/vo/album';
import { SearchMusicService } from '../../services/searchmusic.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'artist',
    templateUrl: 'artist.component.html'
})
export class ArtistComponent implements OnInit {

    artist: Artist;
    albums: Album[];
    artistId: string;

    constructor( private _service: SearchMusicService, 
                 private _router: ActivatedRoute ) {

    }

    ngOnInit() {
        
        /*
        this._router.params.subscribe( data => { this.artistId = data['id']; } );

        this._service.getArtist( this.artistId ).subscribe( 
            data => { this.artist = data; } 
        )

        this._service.getAlbums( this.artistId ).subscribe(
            data => { this.albums = data }
        )
        */
        this._router.params.map( params => params['id'] )
                    .subscribe(
                        id => { 
                            this._service.getArtist(id).subscribe( data => this.artist = data );
                            this._service.getAlbums(id).subscribe( data => this.albums = data );
                        }
                    );
    }
}