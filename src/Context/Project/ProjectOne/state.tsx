import { useEffect, useState } from "react";
import { useFetchRequestProjectOne } from "../../../Services/Project/query";
import { useParams } from "react-router-dom";
import { ProjectController } from "../../../Services/Project/controller";
import { UpdateProject } from "../CreateList/type";

export const ProjectOneState = () => {
  const { id } = useParams();
  const { data, isLoading } = useFetchRequestProjectOne(parseInt(id!));
  const [project, setProject] = useState();
  const { requestUpdateprojectMutation } = ProjectController();

  useEffect(() => {
    if (data) {
      setProject(data);
    }
  }, [data]);

  const updateProject = (data: UpdateProject, id: number) => {
    console.log(id)
    requestUpdateprojectMutation.mutate({ data: data, id: id });
  };

  return {
    project,
    isLoading,
    updateProject,
  };
};
