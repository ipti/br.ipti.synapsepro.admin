import { useEffect, useState } from "react";
import { useFetchRequestUsers } from "../../Services/Users/query";
import { ControllerUser } from "../../Services/Users/controller";
import { CreateUser } from "./type";

export const UsersState = () => {
  const [users, setusers] = useState<any>();
  const [role, setRole] = useState<string | undefined>()

  const { data: userRequest, isLoading } = useFetchRequestUsers(role);

  const props = ControllerUser();

  const GetId = (data: any) => {
    const array = [];
    for (const project of data) {
      array.push(project.id);
    }

    return array;
  };

  const CreateUser = (data: CreateUser) => {
    const body = {
      name: data.name,
      user_name: data.user_name,
      password: data.password,
      user_type_id: data.user_type_id,
      school_id: 2
    }
    props.requestUserMutation.mutate(body);
  };

  const UpdateUser = (data: CreateUser, id: number) => {
    const body = {
      name: data.name,
      user_name: data.user_name,
      user_type_id: data.user_type_id,
      school_id: data.school_id
    }
    props.requestUpdateUserMutation.mutate({ data: body, id: id });
  };

  const DeleteUser = (id: number) => {
    props.requestDeleteUserMutation.mutate(id)
  }

  useEffect(() => {
    setRole("TODOS")
  }, [])

  useEffect(() => {
    if (userRequest) {
      setusers(userRequest);
    }
  }, [userRequest, role]);

  return { users, CreateUser, DeleteUser, UpdateUser, isLoading, role, setRole };
};
