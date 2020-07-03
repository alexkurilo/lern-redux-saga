const newsUrl = 'https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc';

const fetchNews = () => {
    return fetch(newsUrl)
        .then(response => response.json());
};

export {
    fetchNews,
}