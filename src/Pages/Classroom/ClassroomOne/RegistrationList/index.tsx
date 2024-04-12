import { useContext } from "react";
import { useParams } from "react-router-dom";
import CardRegistration from "../../../../Components/Card/CardRegistration";
import RegistartionClassroomProvider, {
  RegistrationClassroomContext,
} from "../../../../Context/Classroom/RegistrationsList/context";
import {
  RegistrationClassroomTypes
} from "../../../../Context/Classroom/RegistrationsList/type";
import { useFetchRequestClassroomOne } from "../../../../Services/Classroom/query";
import { Container, Padding } from "../../../../Styles/styles";
import Empty from "../../../../Components/Empty";
import Loading from "../../../../Components/Loading";

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
  const {id} = useParams()
  const { data: classroom } = useFetchRequestClassroomOne(parseInt(id!))

  if (props.isLoading) return <Loading />;

  return (
    <Container>
      <h2>{classroom?.name}</h2>
      <Padding padding="16px" />
      {props?.registrations?.length! > 0 ? <div className="grid">
        {props.registrations?.map((item, index) => {
          return (
            <div className="col-12 md:col-6 lg:col-4" key={index}>
              <CardRegistration title={item.id.toString()} subtitle={item.name} idRegistration={item.id} status={item.status} />
            </div>
          );
        })}
      </div> : <Empty title="Matriculas" />}
    </Container>
  );
};

export default RegistrationList;
