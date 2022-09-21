export interface INews {
    news: newsItemTypes[],
    isLoading: boolean,
    error: string,
}

interface newsItemTypes {
    id: number | string,
    title: string,
    content: string,
    author: string,
    createdAt: number,
    likes: number
}