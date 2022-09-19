export interface INews {
    news: Array<newsItemTypes>
}

interface newsItemTypes {
    id: number,
    title: string,
    content: string,
    author: string,
    createdAt: number,
    likes: number
}