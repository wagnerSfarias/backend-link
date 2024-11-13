"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlRoutes = void 0;
const express_1 = require("express");
const url_controller_1 = require("../controllers/url.controller");
exports.urlRoutes = (0, express_1.Router)();
const url = new url_controller_1.UrlController;
exports.urlRoutes.get('/', (_, res) => {
    res.json("Servidor encontrando.");
});
exports.urlRoutes.get('/urls', url.index);
exports.urlRoutes.post('/new', url.create);
exports.urlRoutes.get('/:id', url.findById);
exports.urlRoutes.put('/:id', url.updateClicks);
