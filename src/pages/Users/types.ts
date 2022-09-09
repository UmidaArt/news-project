export interface IUsers {
    users: Array<usersItemTypes>
}
interface usersItemTypes {
    createdAt: number,
    name: string,
    surname: string,
}