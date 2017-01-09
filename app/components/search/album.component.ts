import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchMusicService } from '../../services/searchmusic.service';
import { Album } from '../../services/vo/album';

@Component({
    moduleId: module.id,
    selector: 'album',
    templateUrl: 'album.component.html'
})
export class AlbumComponent implements OnInit {
    id: string;
    album: Album;

    constructor( private _service: SearchMusicService, 
                 private _router: ActivatedRoute ) {
        
    }

    ngOnInit( ) {
        this._router.params.subscribe( data => this.id = data['id'] );

        this._service.getAlbum( this.id ).subscribe( 
            data => { this.album = data }
         )
    }
}