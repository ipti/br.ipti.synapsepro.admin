
export interface UsersTypes {
  users: any;
  CreateUser: (data: CreateUser) => void
  DeleteUser: (id: number) => void
  UpdateUser: (data: CreateUser, id: number) => void
  isLoading: boolean,
  error: unknown
}

export interface CreateUser {
  name: string;
  user_name: string;
  password?: string;
  school_id?: number;
  user_type_id?: number
}

export interface User {
  id: number
  name: string
  username: string
  active: boolean
  role: string
}