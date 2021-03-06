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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var SearchMusicService = (function () {
    function SearchMusicService(_http) {
        this._http = _http;
    }
    SearchMusicService.prototype.searchMusic = function (input, type) {
        if (type === void 0) { type = 'artist'; }
        var url = 'https://api.spotify.com/v1/search?query=' + input +
            '&offset=0&limit=20' +
            '&type=' + type + '&market=US';
        console.log('URL >> ' + url);
        return this._http.get(url).map(function (data) { return data.json(); });
    };
    SearchMusicService.prototype.getArtist = function (id) {
        var url = 'https://api.spotify.com/v1/artists/' + id;
        return this._http.get(url).map(function (data) { return data.json(); });
    };
    SearchMusicService.prototype.getAlbums = function (id) {
        var url = 'https://api.spotify.com/v1/artists/' + id + '/albums';
        console.log('Calling getAlbums service...  ' + url);
        return this._http.get(url).map(function (data) { return data.json().items; });
    };
    SearchMusicService.prototype.getAlbum = function (id) {
        var url = 'https://api.spotify.com/v1/albums/' + id;
        console.log('Calling getAlbum service api : ' + url);
        return this._http.get(url).map(function (data) { return data.json(); });
    };
    SearchMusicService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SearchMusicService);
    return SearchMusicService;
}());
exports.SearchMusicService = SearchMusicService;
//# sourceMappingURL=searchmusic.service.js.map