import { Button } from "primereact/button";
import { ROLE } from "../../../Controller/controllerGlobal";
import { Container, Row } from "../../../Styles/styles";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AplicationContext } from "../../../Context/Aplication/context";
import { PropsAplicationContext } from "../../../Types/types";
import ProjectListProvider, {
  ProjectListContext,
} from "../../../Context/Project/ProjectList/context";
import { ProjectListTypes } from "../../../Context/Project/ProjectList/type";
import CardClassroom from "../../../Components/Card/CardClassroom";

const ProjectsList = () => {
  return (
    <ProjectListProvider>
      <ProjectsListPage />
    </ProjectListProvider>
  );
};

const ProjectsListPage = () => {
  const history = useNavigate();
  const propsAplication = useContext(
    AplicationContext
  ) as PropsAplicationContext;

  const props = useContext(ProjectListContext) as ProjectListTypes;
  return (
    <Container>
      {(propsAplication.user?.role === ROLE.ADMIN ||
        propsAplication.user?.role === ROLE.COORDINATORS) && (
        <Row id="end" style={{ width: "100%" }}>
          <Button
            label="Criar Projeto"
            icon={"pi pi-plus"}
            onClick={() => history("/projetos/criar")}
          />
        </Row>
      )}
      <div className="grid">
        {props.tsOne?.project?.map((item, index) => {
          return (
            <div className="col-12 md:col-6 lg:col-4">
              <CardClassroom
                title={item.name}
                year={item.social_technology_id.toString()}
                id={item.id}
              />
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default ProjectsList;
