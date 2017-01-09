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
var searchmusic_service_1 = require('../../services/searchmusic.service');
var router_1 = require('@angular/router');
var ArtistComponent = (function () {
    function ArtistComponent(_service, _router) {
        this._service = _service;
        this._router = _router;
    }
    ArtistComponent.prototype.ngOnInit = function () {
        var _this = this;
        /*
        this._router.params.subscribe( data => { this.artistId = data['id']; } );

        this._service.getArtist( this.artistId ).subscribe(
            data => { this.artist = data; }
        )

        this._service.getAlbums( this.artistId ).subscribe(
            data => { this.albums = data }
        )
        */
        this._router.params.map(function (params) { return params['id']; })
            .subscribe(function (id) {
            _this._service.getArtist(id).subscribe(function (data) { return _this.artist = data; });
            _this._service.getAlbums(id).subscribe(function (data) { return _this.albums = data; });
        });
    };
    ArtistComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'artist',
            templateUrl: 'artist.component.html'
        }), 
        __metadata('design:paramtypes', [searchmusic_service_1.SearchMusicService, router_1.ActivatedRoute])
    ], ArtistComponent);
    return ArtistComponent;
}());
exports.ArtistComponent = ArtistComponent;
//# sourceMappingURL=artist.component.js.map