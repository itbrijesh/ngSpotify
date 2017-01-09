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
var router_1 = require('@angular/router');
var searchmusic_service_1 = require('../../services/searchmusic.service');
var AlbumComponent = (function () {
    function AlbumComponent(_service, _router) {
        this._service = _service;
        this._router = _router;
    }
    AlbumComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router.params.subscribe(function (data) { return _this.id = data['id']; });
        this._service.getAlbum(this.id).subscribe(function (data) { _this.album = data; });
    };
    AlbumComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'album',
            templateUrl: 'album.component.html'
        }), 
        __metadata('design:paramtypes', [searchmusic_service_1.SearchMusicService, router_1.ActivatedRoute])
    ], AlbumComponent);
    return AlbumComponent;
}());
exports.AlbumComponent = AlbumComponent;
//# sourceMappingURL=album.component.js.map