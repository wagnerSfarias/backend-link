import { StatusCodes } from "http-status-codes";
import { CreateUrlDTO, FindSlugDTO, NewUrlDTO, UpdateClicksDTO } from "../dto/url.dto";
import { Url } from "../entities/url.entity";
import { AppError } from "../errors/app.error";
import { UrlRepository } from "../repositories/url.repository";


export class UrlServices {
    constructor(private urlRepository: UrlRepository) { }

    async create({ longUrl, clicks }: CreateUrlDTO): Promise<Url> {

        const url = new Url({
            longUrl,
            clicks
        })

        const createUrl = await this.urlRepository.create(url)


        return createUrl
    }

    async index(): Promise<NewUrlDTO[]> {
        const urls = await this.urlRepository.index()

        return urls
    }

    async findBySlug({ slug }: FindSlugDTO): Promise<string | null> {

        const urlData = await this.urlRepository.findBySlug(slug)

        if (!urlData) {
            throw new AppError('Url not found', StatusCodes.BAD_REQUEST)
        }

        return urlData
    }

    async updateClicks({ slug, clicks }: UpdateClicksDTO): Promise<Url | undefined> {

        const urlData = await this.urlRepository.updateClicks({ slug, clicks })

        return urlData
    }
}