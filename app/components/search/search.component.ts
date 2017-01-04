import { Component } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { SearchMusicService } from './../../services/searchmusic.service';
@Component({
    moduleId: module.id,
    selector: 'search',
    template: `
        
            <h1> Need Music?</h1>
            <p> Use ngSpotify app to browse new releases and find your favorite songs</p>
            <p> Enter text to search albums.</p>

            <form [formGroup]='myForm'>
                <input type='input' name='searchMusic' class='form-control' placeHolder='Search your favorite music.'
                [(ngModel)]='searchMusic' formControlName='searchMusic' (keyup)='searchMusicOnSpotify()' />
            </form>
        
    `
})
export class SearchComponent {

    myForm: FormGroup;
    searchMusic: AbstractControl;

    constructor( private _fb: FormBuilder, 
    private _service: SearchMusicService ) 
    {
        this.myForm = this._fb.group({
                            searchMusic: ['']
                      })
        this.searchMusic = this.myForm.controls['searchMusic'];
    }
  
    searchMusicOnSpotify() {
        console.log( ' Searching music for >> ' + this.searchMusic.value );
        this._service.searchMusic( this.searchMusic.value );
    }

}