import { Router } from "express";
import { UrlController } from "../controllers/url.controller";

export const urlRoutes = Router()

 const url = new UrlController
 
 urlRoutes.get('/', (_, res)=>{
    res.json("Servidor encontrando.")
})

urlRoutes.get('/urls', url.index)
urlRoutes.post('/new', url.create)
urlRoutes.get('/:id', url.findBySlug)
urlRoutes.put('/:id', url.updateClicks)

