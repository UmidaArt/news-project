export interface IUsers {
    users: usersItemTypes[],
    isLoading: boolean,
    error: string,
}
interface usersItemTypes {
    id: number | string;
    createdAt: number,
    name: string,
    surname: string,
}