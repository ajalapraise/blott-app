import { useState, useEffect } from 'react';
import { getAllNews } from '@/queries/get-news';
export interface NewsArticleType {
    category: string;
    datetime: number;
    headline: string;
    id: number;
    image: string;
    related: string;
    source: string;
    summary: string;
    url: string;
}

const useNews = () => {
    const [news, setNews] = useState<NewsArticleType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchNews = async () => {
        try {
            setLoading(true);
            const newsData = await getAllNews();
            setNews(newsData);
        } catch (err) {
            console.error('Error fetching news:', err);
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNews();
    }, []);

    const refreshNews = () => {
        fetchNews();
    };

    return {
        news,
        loading,
        refreshNews,
        error: error,
    };
}

export default useNews;