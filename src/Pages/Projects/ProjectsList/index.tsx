import { Button } from "primereact/button";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CardProject from "../../../Components/Card/CardProject";
import Empty from "../../../Components/Empty";
import { AplicationContext } from "../../../Context/Aplication/context";
import ProjectListProvider, {
  ProjectListContext,
} from "../../../Context/Project/ProjectList/context";
import { ProjectListTypes } from "../../../Context/Project/ProjectList/type";
import { ROLE } from "../../../Controller/controllerGlobal";
import { Container, Padding, Row } from "../../../Styles/styles";
import { PropsAplicationContext } from "../../../Types/types";

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
      <h1>Projetos</h1>

      <Padding padding="16px" />

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
      <Padding padding="16px" />
      {props.tsOne?.project?.length! > 0 ? (<div className="grid">
        {props.tsOne?.project?.map((item, index) => {
          return (
            <div className="col-12 md:col-6 lg:col-4" key={index}>
              <CardProject title={item.name} id={item.id} />
            </div>
          );
        })}
      </div>) : (
        <Empty title="Tecnologias" />
      )}
    </Container>
  );
};

export default ProjectsList;
