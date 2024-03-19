export interface UsersTypes {
    users: any;
    CreateUser: (data: CreateUser) => void
}

export interface CreateUser {
    name: string;
    username: string;
    password: string;
    project: number[];
    role: string
  }