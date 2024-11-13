"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlServices = void 0;
const http_status_codes_1 = require("http-status-codes");
const url_entity_1 = require("../entities/url.entity");
const app_error_1 = require("../errors/app.error");
class UrlServices {
    constructor(urlRepository) {
        this.urlRepository = urlRepository;
    }
    async create({ longUrl, clicks }) {
        const url = new url_entity_1.Url({
            longUrl,
            clicks
        });
        const createUrl = await this.urlRepository.create(url);
        return createUrl;
    }
    async index() {
        const urls = await this.urlRepository.index();
        return urls;
    }
    async findBySlug({ slug }) {
        const urlData = await this.urlRepository.findBySlug(slug);
        if (!urlData) {
            throw new app_error_1.AppError('Url not found', http_status_codes_1.StatusCodes.BAD_REQUEST);
        }
        return urlData;
    }
    async updateClicks({ slug, clicks }) {
        const urlData = await this.urlRepository.updateClicks({ slug, clicks });
        return urlData;
    }
}
exports.UrlServices = UrlServices;
