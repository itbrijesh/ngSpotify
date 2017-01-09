"use strict";
var artist_1 = require('./artist');
var Album = (function () {
    function Album() {
        this.artists = new artist_1.Artist();
    }
    return Album;
}());
exports.Album = Album;
//# sourceMappingURL=album.js.map