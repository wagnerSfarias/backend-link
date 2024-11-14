import { NextFunction, Request, Response } from "express";

import { UrlServices } from "../services/url.service";
import { UrlRepository } from "../repositories/url.repository";
import { CreateUrlDTO } from "../dto/url.dto";
import { StatusCodes } from "http-status-codes";

export class UrlController {

    async create(req: Request<unknown, unknown, CreateUrlDTO>, res: Response, next: NextFunction) {
        try {

            const { longUrl, clicks } = req.body
            const repository = new UrlRepository()

            const service = new UrlServices(repository)

            const url = await service.create({ longUrl, clicks })

            return res.status(StatusCodes.CREATED).json(url)

        } catch (err) {
            next(err)
        }
    }

    async index(_: Request, res: Response, next: NextFunction) {
        try {
            const repository = new UrlRepository()

            const service = new UrlServices(repository)

            const result = await service.index()

            return res.status(StatusCodes.OK).json(result)

        } catch (err) {
            next(err)
        }
    }

    async findBySlug(req: Request, res: Response, next: NextFunction) {
        try {
            const slug = req.params.id

            const repository = new UrlRepository()
            const service = new UrlServices(repository)

            const result = await service.findBySlug({ slug })

            return res.redirect(result as string)

        } catch (err) {
            next(err)
        }
    }

    async updateClicks(req: Request, res: Response, next: NextFunction) {
        try {
            const slug = req.params.id
            const { clicks } = req.body

            const repository = new UrlRepository()
            const service = new UrlServices(repository)

            const result = await service.updateClicks({ slug, clicks })

            return res.status(StatusCodes.OK).json(result)

        } catch (err) {
            next(err)
        }
    }
}