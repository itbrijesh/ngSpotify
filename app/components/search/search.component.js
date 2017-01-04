"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var searchmusic_service_1 = require('./../../services/searchmusic.service');
var SearchComponent = (function () {
    function SearchComponent(_fb, _service) {
        this._fb = _fb;
        this._service = _service;
        this.myForm = this._fb.group({
            searchMusic: ['']
        });
        this.searchMusic = this.myForm.controls['searchMusic'];
    }
    SearchComponent.prototype.searchMusicOnSpotify = function () {
        console.log(' Searching music for >> ' + this.searchMusic.value);
        this._service.searchMusic(this.searchMusic.value);
    };
    SearchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'search',
            template: "\n        \n            <h1> Need Music?</h1>\n            <p> Use ngSpotify app to browse new releases and find your favorite songs</p>\n            <p> Enter text to search albums.</p>\n\n            <form [formGroup]='myForm'>\n                <input type='input' name='searchMusic' class='form-control' placeHolder='Search your favorite music.'\n                [(ngModel)]='searchMusic' formControlName='searchMusic' (keyup)='searchMusicOnSpotify()' />\n            </form>\n        \n    "
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, searchmusic_service_1.SearchMusicService])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map