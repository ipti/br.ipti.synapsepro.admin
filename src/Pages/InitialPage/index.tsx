import CardQuant from "../../Components/Chart/CardQuant";
import { Container } from "../../Styles/styles";

const InitialPage = () => {
  return (
    <Container>
      <div className="grid">
        <div className="col-12 md:col-4 lg:col-4">
          <CardQuant title="Total de Ts" quant={5} />
        </div>
        <div className="col-12 md:col-4 lg:col-4">
          <CardQuant title="Total de Projetos" quant={7} />
        </div>

        <div className="col-12 md:col-4 lg:col-4">
          <CardQuant title="Total de Turmas" quant={20} />
        </div>
      </div>
      <div className="grid">

        <div className="col-12 md:col-4 lg:col-4">
          <CardQuant title="Total de matriculas" quant={78} />
        </div>
        <div className="col-12 md:col-4 lg:col-4">
          <CardQuant title="Total de matriculas confirmadas" quant={63} />
        </div>
        <div className="col-12 md:col-4 lg:col-4">
          <CardQuant title="Total de encontros" quant={40} />
        </div>
      </div>
    </Container>
  );
};

export default InitialPage;
