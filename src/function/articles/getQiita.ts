import { formatDate } from "@/utils/const";
import { Article } from "@/utils/types";
import xml2js from "xml2js";

interface RawArticle {
  title: string[];
  link: { $: { href: string } }[];
  published: string[];
}

interface XMLResult {
  feed: {
    entry: RawArticle[];
  };
}

export async function fetchArticles(): Promise<Article[]> {
  try {
    const response = await fetch("https://qiita.com/popular-items/feed");

    if (!response.ok) {
      throw new Error("Failed to fetch articles: " + response.statusText);
    }

    const xmlText = await response.text();

    const result: XMLResult = await new Promise((resolve, reject) => {
      xml2js.parseString(xmlText, (err, result) => {
        if (err) {
          reject("Failed to parse XML: " + err);
        } else {
          resolve(result);
        }
      });
    });

    const rawArticles = result.feed.entry;
    const quiitaArticles: Article[] = rawArticles.map(
      (rawArticle: RawArticle) => ({
        title: rawArticle.title[0],
        link: rawArticle.link[0].$.href,
        pubDate: formatDate(rawArticle.published[0]),
      }),
    );

    return quiitaArticles;
  } catch (error) {
    console.error(error);
    return [];
  }
}
