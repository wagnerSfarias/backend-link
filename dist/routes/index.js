"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const url_routes_1 = require("./url.routes");
exports.routes = (0, express_1.Router)();
exports.routes.use('/', url_routes_1.urlRoutes);
