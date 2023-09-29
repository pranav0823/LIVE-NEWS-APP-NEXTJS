export default function sortNewsByImage(news: NewsResponse) {
    if (!news || !news.data) {
      // Handle the case where news is null or doesn't have a data property
      return [];
    }
  
    const newsWithImage = news.data.filter((item) => item.image !== null);
    const newsWithoutImage = news.data.filter((item) => item.image === null);
  
    const sortedNewsResponse = {
      pagination: news.pagination,
      data: [...newsWithImage, ...newsWithoutImage]
    };
  
    return sortedNewsResponse;
  }
  