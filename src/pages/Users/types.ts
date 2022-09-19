export interface IUsers {
    users: Array<usersItemTypes>
}
interface usersItemTypes {
    id: any;
    createdAt: number,
    name: string,
    surname: string,
}