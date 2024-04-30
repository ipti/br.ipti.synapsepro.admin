import { Button } from "primereact/button";
import { ROLE } from "../../../Controller/controllerGlobal";
import { Container, Row } from "../../../Styles/styles";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AplicationContext } from "../../../Context/Aplication/context";
import { PropsAplicationContext } from "../../../Types/types";

const ProjectsList = () => {
    return (
        <ProjectsListPage />
    )
}

const ProjectsListPage = () => {
    const history = useNavigate();
    const propsAplication = useContext(
        AplicationContext
    ) as PropsAplicationContext;
    return (
        <Container>
            {(propsAplication.user?.role === ROLE.ADMIN ||
                propsAplication.user?.role === ROLE.COORDINATORS) && (
                    <Row id="end" style={{ width: "100%" }}>
                        <Button
                            label="Criar Projeto"
                            icon={"pi pi-plus"}
                            onClick={() => history("/turma/criar")}
                        />
                    </Row>
                )}
            <>
                sald,msakms
            </>
        </Container>
    )
}

export default ProjectsList;