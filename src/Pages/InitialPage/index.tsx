import { useContext } from "react";
import CardQuant from "../../Components/Chart/CardQuant";
import ContentPage from "../../Components/ContentPage";
import Loading from "../../Components/Loading";
import { AplicationContext } from "../../Context/Aplication/context";
import { useFetchRequestUsersChart } from "../../Services/Users/query";
import { Padding } from "../../Styles/styles";
import { PropsAplicationContext } from "../../Types/types";

export interface Chart {
  totalUserSocialTechnologies: number;
  totalProjects: number;
  totalClassrooms: number;
  totalRegisterClassrooms: number;
  approvedRegisterClassrooms: number;
  totalMeetings: number;
}

const State = () => {
  const { data, isLoading, isError } = useFetchRequestUsersChart();

  var chart: Chart | undefined = data;

  return {
    chart,
    isLoading,
    isError,
  };
};

const InitialPage = () => {
  const propsAplication = useContext(AplicationContext) as PropsAplicationContext
  const props = State();

  if (props.isLoading) return <Loading />;
  return (
    <ContentPage title={"Bem vindo, " + propsAplication.user?.name + "!"} description="Visualização dos dados gerais do meuBen.">
      <Padding />
      <h1> </h1>
      <Padding padding="16px" />
      <div className="grid">
        <div className="col-12 md:col-4 lg:col-4">
          <CardQuant title="Total de Ts" quant={props.chart?.totalUserSocialTechnologies!} color="navy_blue" />
        </div>
        <div className="col-12 md:col-4 lg:col-4">
          <CardQuant title="Total de Projetos" quant={props.chart?.totalProjects!} color="blue" />
        </div>

        <div className="col-12 md:col-4 lg:col-4">
          <CardQuant title="Total de Turmas" quant={props.chart?.totalClassrooms!} color="orange" />
        </div>
      </div>
      <div className="grid">
        <div className="col-12 md:col-4 lg:col-4">
          <CardQuant title="Total de matriculas" quant={props.chart?.totalRegisterClassrooms!} color="orange" />
        </div>
        <div className="col-12 md:col-4 lg:col-4">
          <CardQuant title="Total de matriculas confirmadas" quant={props.chart?.approvedRegisterClassrooms!} color="navy_blue" />
        </div>
        <div className="col-12 md:col-4 lg:col-4">
          <CardQuant title="Total de encontros" quant={props.chart?.totalMeetings!} color="blue" />
        </div>
      </div>
    </ContentPage>
  );
};

export default InitialPage;
