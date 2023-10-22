import axios from 'axios';
interface Article {
    title: string;
    link: string;
    pubDate: string | number;
};

export const getTrendingQuestions = async () : Promise<Article[]>  => {
  try {
    const response = await axios.get('https://api.stackexchange.com/2.3/questions', {
      params: {
        site: 'stackoverflow',
        sort: 'hot',
        order: 'desc',
      },
    });
    const overflows: Article[] = response.data.items.map((overflow: any) => ({
        title: overflow.title,
        link: overflow.link,
        pubDate: overflow.creation_date,
    }))
    return overflows;
  } catch (error) {
    console.error(error);
    return [];
  }
};