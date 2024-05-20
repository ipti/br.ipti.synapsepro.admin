import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AplicationContext } from "../../../Context/Aplication/context";
import { PropsAplicationContext } from "../../../Types/types";
import { ROLE } from "../../../Controller/controllerGlobal";
import { Container, Padding, Row } from "../../../Styles/styles";
import { Button } from "primereact/button";
import CardClassroom from "../../../Components/Card/CardClassroom";
import TsOneProvider from "../../../Context/TecnologySocial/TecnologySocialOne/context";

const TecnologySocialOne = () => {
    return(
        <TsOneProvider>
            <TecnologySocial />
        </TsOneProvider>
    )
}


const TecnologySocial = () => {
  const history = useNavigate();
  const propsAplication = useContext(
    AplicationContext
  ) as PropsAplicationContext;
  return (
    <Container>
      {propsAplication.user?.role === ROLE.ADMIN && (
        <Row id="end" style={{ width: "100%" }}>
          <Button
            label="Criar Tecnologia Social"
            icon={"pi pi-plus"}
            onClick={() => history("/projetos/criar")}
          />
        </Row>
      )}
      <Padding />
      <div className="grid">
        {propsAplication.project?.map((item, index) => {
          return (
            <div className="col-12 md:col-6 lg:col-4">
              <CardClassroom
                title={item.name}
                id={item.id}
              />
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default TecnologySocialOne;
