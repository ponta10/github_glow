import { Article } from "@/utils/types";
import axios from "axios";

export const getTrendingQuestions = async (): Promise<Article[]> => {
  try {
    const response = await axios.get(
      "https://api.stackexchange.com/2.3/questions",
      {
        params: {
          site: "stackoverflow",
          sort: "hot",
          order: "desc",
        },
      },
    );
    const overflows: Article[] = response.data.items.map((overflow: any) => ({
      title: overflow.title,
      link: overflow.link,
      pubDate: new Date(Number(overflow.creation_date) * 1000).toLocaleDateString(),
    }));
    return overflows;
  } catch (error) {
    console.error(error);
    return [];
  }
};
