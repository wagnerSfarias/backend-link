 type UrlProps = {
    id?: string;
    slug?: string;
    longUrl: string;
    clicks: number;
}

export class Url {
    public id?: string;
    public slug?: string;
    public longUrl: string;
    public clicks: number;

    constructor({ id, slug, longUrl, clicks }: UrlProps) {
        this.id = id
        this.slug = slug
        this.longUrl = longUrl
        this.clicks = clicks
    }
}

