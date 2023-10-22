import { formatDate } from "@/utils/const";
import { Article } from "@/utils/types";
import xml2js from "xml2js";

interface RawArticle {
  title: string[];
  link: string[];
  pubDate: string[];
  enclosure: { $: { url: string } }[];
}

interface RSSChannel {
  item: RawArticle[];
}

interface RSSResult {
  rss: {
    channel: RSSChannel[];
  };
}

export async function fetchZennArticles(): Promise<Article[]> {
  try {
    const response = await fetch("https://zenn.dev/feed");

    if (!response.ok) {
      throw new Error("Failed to fetch articles: " + response.statusText);
    }

    const xmlText = await response.text();

    const result: RSSResult = await new Promise((resolve, reject) => {
      xml2js.parseString(xmlText, (err, result) => {
        if (err) {
          reject("Failed to parse XML: " + err);
        } else {
          resolve(result);
        }
      });
    });

    const rawArticles = result.rss.channel[0].item;
    const zennArticles: Article[] = rawArticles.map(
      (rawArticle: RawArticle) => ({
        title: rawArticle.title[0],
        link: rawArticle.link[0],
        pubDate: formatDate(rawArticle.pubDate[0]),
        image: rawArticle.enclosure[0].$.url,
      }),
    );

    return zennArticles;
  } catch (error) {
    console.error(error);
    return [];
  }
}
