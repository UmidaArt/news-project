export interface INews {
    news: Array<newsItemTypes>
}

interface newsItemTypes {
    title: string,
    content: string,
    author: string,
    createdAt: number,
    likes: number
}