import { Router } from "express";

export const baseRoutes = Router()

baseRoutes.get('/', (_, res)=>{
    res.json("Servidor encontrando.")
})