import { Router} from "express";

// import { baseRoutes } from "./base.routes";
import { urlRoutes } from "./url.routes";

export const routes = Router();

// routes.use('/', baseRoutes)
routes.use('/', urlRoutes)
// routes.use('/url', urlRoutes)


  