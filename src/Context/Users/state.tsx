import { useEffect, useState } from "react";
import { useFetchRequestUsers } from "../../Services/Users/query";
import { ControllerUser } from "../../Services/Users/controller";
import { CreateUser } from "./type";

export const UsersState = () => {
  const [users, setusers] = useState<any>();

  const { data: userRequest } = useFetchRequestUsers();

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
        username: data.username,
        password: data.password,
        role: data.role,
        project: GetId(data.project)
    }
    props.requestUserMutation.mutate(body);
  };

  useEffect(() => {
    if (userRequest) {
      setusers(userRequest);
    }
  }, [userRequest]);

  return { users, CreateUser };
};
