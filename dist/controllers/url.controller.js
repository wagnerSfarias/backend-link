"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlController = void 0;
const url_service_1 = require("../services/url.service");
const url_repository_1 = require("../repositories/url.repository");
const http_status_codes_1 = require("http-status-codes");
class UrlController {
    async create(req, res, next) {
        try {
            const { longUrl, clicks } = req.body;
            const repository = new url_repository_1.UrlRepository();
            const service = new url_service_1.UrlServices(repository);
            const url = await service.create({ longUrl, clicks });
            return res.status(http_status_codes_1.StatusCodes.CREATED).json(url);
        }
        catch (err) {
            next(err);
        }
    }
    async index(_, res, next) {
        try {
            const repository = new url_repository_1.UrlRepository();
            const service = new url_service_1.UrlServices(repository);
            const result = await service.index();
            return res.status(http_status_codes_1.StatusCodes.OK).json(result);
        }
        catch (err) {
            next(err);
        }
    }
    async findBySlug(req, res, next) {
        try {
            const slug = req.params.id;
            const repository = new url_repository_1.UrlRepository();
            const service = new url_service_1.UrlServices(repository);
            const result = await service.findBySlug({ slug });
            return res.redirect(result);
        }
        catch (err) {
            next(err);
        }
    }
    async updateClicks(req, res, next) {
        try {
            const slug = req.params.id;
            const { clicks } = req.body;
            const repository = new url_repository_1.UrlRepository();
            const service = new url_service_1.UrlServices(repository);
            const result = await service.updateClicks({ slug, clicks });
            return res.status(http_status_codes_1.StatusCodes.OK).json(result);
        }
        catch (err) {
            next(err);
        }
    }
}
exports.UrlController = UrlController;
