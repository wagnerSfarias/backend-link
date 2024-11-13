
export type CreateUrlDTO = {
    longUrl: string;
    clicks: number;
}
export type NewUrlDTO = {
    id: string;
    slug: string;
    longUrl: string;
    clicks: number;
    shortenedUrl: string;
}

export type FindSlugDTO = {
    slug: string;
}

export type UpdateClicksDTO = {
    slug: string;
    clicks: number;
}