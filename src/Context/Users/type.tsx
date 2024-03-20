export interface UsersTypes {
    users: any;
    CreateUser: (data: CreateUser) => void
    DeleteUser: (id: number) => void
    UpdateUser: (data: CreateUser, id: number) => void
}

export interface CreateUser {
    name: string;
    username: string;
    password?: string;
    project: number[];
    role?: {name: string, id: string}
  }