import xml2js from 'xml2js';

type ZennArticle = {
    title: string;
    link: string;
    pubDate: string;
    image: string;
};

export async function fetchZennArticles(): Promise<ZennArticle[]> {
    try {
        const response = await fetch('https://zenn.dev/feed');

        if (!response.ok) {
            throw new Error('Failed to fetch articles: ' + response.statusText);
        }

        const xmlText = await response.text();

        const result: any = await new Promise((resolve, reject) => {
            xml2js.parseString(xmlText, (err, result) => {
                if (err) {
                    reject('Failed to parse XML: ' + err);
                } else {
                    resolve(result);
                }
            });
        });

        const rawArticles = result.rss.channel[0].item;
        const zennArticles: ZennArticle[] = rawArticles.map((rawArticle: any) => ({
            title: rawArticle.title[0],
            link: rawArticle.link[0],
            pubDate: rawArticle.pubDate[0],
            image: rawArticle.enclosure[0].$.url
        }));

        return zennArticles;

    } catch (error) {
        console.error(error);
        return [];
    }
}
