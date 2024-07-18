import { Button } from "primereact/button";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CardTs from "../../../Components/Card/CardTs";
import ContentPage from "../../../Components/ContentPage";
import Empty from "../../../Components/Empty";
import Loading from "../../../Components/Loading";
import { AplicationContext } from "../../../Context/Aplication/context";
import { Padding, Row } from "../../../Styles/styles";
import { PropsAplicationContext } from "../../../Types/types";

const TecnologySocial = () => {
  const history = useNavigate();
  const propsAplication = useContext(
    AplicationContext
  ) as PropsAplicationContext;

  if (!propsAplication.project) return <Loading />;
  return (
    <ContentPage title="Escolas" description="Visualização das escolas.">
      <Padding padding="16px" />

      {!propsAplication?.user?.teacher?.id && (
        <Row id="end" style={{ width: "100%" }}>
          <Button
            label="Criar Escola"
            icon={"pi pi-plus"}
            onClick={() => history("/escolas/criar")}
          />
        </Row>
      )}
      <Padding padding="16px" />
      {propsAplication.project.length > 0 ? (
      <div className="grid">
        {propsAplication.project?.map((item, index) => {
          return (
            <div key={index} className="col-12 md:col-6 lg:col-4">
              <CardTs title={item.name} id={item.id} />
            </div>
          );
        })}
      </div>) : (
        <Empty title="Escolas" />
      )}
    </ContentPage>
  );
};

export default TecnologySocial;
