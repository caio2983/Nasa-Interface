export interface ArticleResults {
    count: number;
    next: string;
    previous: string;
    results: Article[];
}

export interface Article {
    "id": number,
    "title": string,
    "url": string,
    "image_url": string,
    "news_site": string,
    "summary": string,
    "published_at": string,
    "updated_at": string,
}