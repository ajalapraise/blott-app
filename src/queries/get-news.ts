import { API_URL } from '../utils/endpoints';

export const getAllNews = async () => {
    console.log(process.env.NEXT_PUBLIC_API_KEY, 'key');
    const url = `${API_URL}?category=general&token=${process.env.NEXT_PUBLIC_API_KEY}`;
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching news:', error);
        throw error;
    }
}