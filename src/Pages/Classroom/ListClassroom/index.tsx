import { Button } from "primereact/button";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CardClassroom from "../../../Components/Card/CardClassroom";
import ContentPage from "../../../Components/ContentPage";
import Empty from "../../../Components/Empty";
import Loading from "../../../Components/Loading";
import ClassroomProvider, {
  ClassroomContext,
} from "../../../Context/Classroom/context";
import { ClassroomTypes } from "../../../Context/Classroom/type";
import { ROLE } from "../../../Controller/controllerGlobal";
import { Column, Padding, Row } from "../../../Styles/styles";
import http from "../../../Services/axios";
import { GetIdTs } from "../../../Services/localstorage";

const ListClassroom = () => {
  return (
    <ClassroomProvider>
      <ListClassroomPage />
    </ClassroomProvider>
  );
};

const ListClassroomPage = () => {
  const history = useNavigate();

  const props = useContext(ClassroomContext) as ClassroomTypes;

  if (props.isLoading) return <Loading />;

  const downloadCSV = async () => {

    try {
      const response = await http.get('/performance/report/' + GetIdTs())

      // Criar um link para download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'synapse.csv'); // Nome do arquivo
      document.body.appendChild(link);
      link.click();

      // Remover o link
    } catch (error) {
      console.error('Erro ao baixar o arquivo:', error);
    }
  };

  return (
    <ContentPage title="Turmas" description="Visualização das turmas.">
      <Padding padding="16px" />
      <Row id="end" style={{ gap: "10px" }}>
        {/* <Column>
          <label>Projeto</label>
          <Padding />
          <div className="w-12rem md:w-16rem">
            <DropdownComponent placerholder="Escolha o projeto" options={[{name: "Todas",},...propsAplication.project!]} optionsLabel="name" optionsValue="id" value={props.project} onChange={(e) => { console.log(e.value); props.setProject(e.value); idProject(e.value) }} />
          </div>
        </Column> */}
         {(
            <Column id="end">
              <Button
                label="Gerar Relatório de lições"
                icon={"pi pi-file-export"}
                onClick={() => history("/aulas")}
              />
            </Column>
          )}
        {(1 === ROLE.ADMIN ||
          1 === ROLE.Coordenador) && (
            <Column id="end">
              <Button
                label="Gerar Relatório"
                icon={"pi pi-save"}
                onClick={downloadCSV}
              />
            </Column>
          )}
        {(1 === ROLE.ADMIN ||
          1 === ROLE.Coordenador) && (
            <Column id="end">
              <Button
                label="Criar turma"
                icon={"pi pi-plus"}
                onClick={() => history("/turma/criar")}
              />
            </Column>
          )}
      </Row>
      <Padding padding="32px" />
      {props?.classrooms?.length! > 0 ? (
        <div className="grid">
          {props.classrooms?.map((item: any, index: number) => {
            return (
              <div key={index} className="col-12 md:col-6 lg:col-4">
                <CardClassroom
                  title={item.name}
                  id={item.id}

                />
              </div>
            );
          })}
        </div>
      ) : (
        <Empty title="Turmas" />
      )}
    </ContentPage>
  );
};

export default ListClassroom;
