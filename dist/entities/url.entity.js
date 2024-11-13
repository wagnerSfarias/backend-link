"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Url = void 0;
class Url {
    constructor({ id, slug, longUrl, clicks }) {
        this.id = id;
        this.slug = slug;
        this.longUrl = longUrl;
        this.clicks = clicks;
    }
}
exports.Url = Url;
