
import { PrismaClient } from '@prisma/client';
import { Url } from '../entities/url.entity';

import { UpdateClicksDTO } from '../dto/url.dto';

const prisma = new PrismaClient();

export class UrlRepository {


    async create({ longUrl, clicks }: Url) {

        const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

        let slug = '';

        for (let i = 0; i < 6; i++) {
            slug += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        const baseUrl = process.env.BASE_URL

        const newUser = await prisma.url.create({
            data: {
                slug,
                longUrl,
                clicks
            }
        })

        return { ...newUser, 'shortenedUrl': baseUrl + slug }

    }

    async index() {
        const newUser = await prisma.url.findMany()

        const baseUrl = process.env.BASE_URL

        const newUrl = newUser.map((item) => {
            return { ...item, 'shortenedUrl': baseUrl + item.slug }
        })

        return newUrl

    }

    async findBySlug(slug: string): Promise<string | undefined> {

        const newUser = await prisma.url.findUnique({
            where: {
                slug
            }
        })

        return newUser?.longUrl

    }

    async updateClicks({ slug, clicks }: UpdateClicksDTO): Promise<Url | undefined> {

        const newUser = await prisma.url.update({
            where: {
                slug
            },
            data: {
                clicks
            }
        })

        return newUser

    }
}