import { InputText } from "primereact/inputtext";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import CardRegistration from "../../../../Components/Card/CardRegistration";
import ContentPage from "../../../../Components/ContentPage";
import Empty from "../../../../Components/Empty";
import Loading from "../../../../Components/Loading";
import RegistartionClassroomProvider, {
  RegistrationClassroomContext,
} from "../../../../Context/Classroom/RegistrationsList/context";
import { RegistrationClassroomTypes } from "../../../../Context/Classroom/RegistrationsList/type";
import { useFetchRequestClassroomOne } from "../../../../Services/Classroom/query";
import { Column, Padding, Row } from "../../../../Styles/styles";
import { Button } from "primereact/button";
import ModalAddStudent from "./ModalAddStudent";

const RegistrationList = () => {
  return (
    <RegistartionClassroomProvider>
      <RegistrationListPage />
    </RegistartionClassroomProvider>
  );
};

const RegistrationListPage = () => {
  const props = useContext(
    RegistrationClassroomContext
  ) as RegistrationClassroomTypes;
  const [visible, setVisible] = useState<any>()
  const { id } = useParams();
  const { data: classroom } = useFetchRequestClassroomOne(parseInt(id!));
  const [filter, setFilter] = useState("");
  if (props.isLoading) return <Loading />;


  const search = () => {
    if (filter !== "") {
      const buscaLowerCase = filter.toLowerCase();
      return props.registrations?.students?.filter((props) =>
        props.name.toLowerCase().includes(buscaLowerCase)
      );
    }
    return props.registrations?.students;
  };

  return (
    <ContentPage title={classroom?.name} description="Visualização das matriculas realizadas na turma.">
      <Padding />
      <Row id="space-between">

        <Column>
          <Button label="Adicionar Aluno" onClick={() => setVisible(true)} />
        </Column>
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            placeholder="Pesquise pelo nome"
            onChange={(e) => {
              setFilter(e.target.value);
            }}
            value={filter}
          />
        </span>
      </Row>
      <Padding padding="16px" />
      {props?.registrations?.students?.length! > 0 ? (
        <div className="grid">
          {search()?.map((item, index) => {
            return (
              <div className="col-12 md:col-6 lg:col-4" key={index}>
                <CardRegistration
                  title={item.id.toString()}
                  subtitle={item.name}
                  idRegistration={item.id}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <Empty title="Matriculas" />
      )}
      <ModalAddStudent visible={visible} onHide={() => setVisible(false)} />
    </ContentPage>
  );
};

export default RegistrationList;
