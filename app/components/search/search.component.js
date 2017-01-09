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
        //this.searchMusic = this.myForm.controls['searchMusic'];
    }
    SearchComponent.prototype.searchMusicOnSpotify = function () {
        var _this = this;
        console.log(' Searching music for >> ' + this.searchMusic);
        this._service.searchMusic(this.searchMusic).subscribe(function (data) {
            _this.searchResults = data.artists.items;
            console.log(_this.searchResults);
        });
    };
    SearchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'search',
            templateUrl: 'search.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, searchmusic_service_1.SearchMusicService])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map