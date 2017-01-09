import { Component } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { SearchMusicService } from './../../services/searchmusic.service';
@Component({
    moduleId: module.id,
    selector: 'search',
    templateUrl: 'search.component.html'
})
export class SearchComponent {

    myForm: FormGroup;
    searchMusic: string;
    searchResults: any[];

    constructor( private _fb: FormBuilder, 
    private _service: SearchMusicService ) 
    {
        this.myForm = this._fb.group({
                            searchMusic: ['']
                      })
        //this.searchMusic = this.myForm.controls['searchMusic'];
    }
  
    searchMusicOnSpotify() {
        console.log( ' Searching music for >> ' + this.searchMusic );
        this._service.searchMusic( this.searchMusic ).subscribe(
            data => {
                this.searchResults = data.artists.items;
                console.log( this.searchResults );
            }
        );
    }

}