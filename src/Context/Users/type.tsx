export interface UsersTypes {
    users: any;
    CreateUser: (data: CreateUser) => void
}

export interface CreateUser {
    name: string;
    username: string;
    password: string;
    active: number;
    project: number[];
    role: 'USER' | 'ADMIN'; // Assuming role can only be USER or ADMIN
  }