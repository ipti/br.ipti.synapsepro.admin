import { ConfirmDialog } from "primereact/confirmdialog";
import { useContext, useState } from "react";
import IconActive from "../../../Assets/images/activeRegistration.svg";
import { RegistrationClassroomContext } from "../../../Context/Classroom/RegistrationsList/context";
import { RegistrationClassroomTypes } from "../../../Context/Classroom/RegistrationsList/type";
import { Column, Padding, Row } from "../../../Styles/styles";
import { Container } from "./style";

const CardRegistration = ({
  title,
  subtitle,
  idRegistration
}: {
  title: string;
  subtitle: string;
  idRegistration: number;
}) => {
  const [visible, setVisible] = useState(false);
  const props = useContext(
    RegistrationClassroomContext
  ) as RegistrationClassroomTypes;

  return (
    <>
      <Container
        className="card cursor-pointer"
        // onClick={(e) => {
        //   e.stopPropagation();
        //   if ((1 === ROLE.ADMIN ||
        //     2 === ROLE.Coordenador)) {
        //     history(`/turma/${id}/aluno/${idRegistration}`);
        //   }
        // }}
      >
        <Row id="space-between">
          <h3>{subtitle}</h3>
          {/* {(1 === ROLE.ADMIN ||
            2 === ROLE.Coordenador) && <div
              className="cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setVisible(true);
              }}
            >
              <Icon icon="pi pi-trash" size="1rem" />
            </div>} */}
        </Row>
        <Padding padding="8px" />
        <Row>
          <div className={`boxQuantity`}>
            <Column id="center">
              <img
                src={ IconActive
                }
                alt=""
                style={{ height: 40 }}
              />
            </Column>
          </div>
          <Padding />
          <Column id="center">
            <div className={"boxDescriptionSchedule"}>
              {"Matricula - " + title}
            </div>
          </Column>
        </Row>
      </Container>
      <ConfirmDialog
        visible={visible}
        onHide={() => setVisible(false)}
        message="Tem certeza de que deseja prosseguir?"
        header="Confirmation"
        icon="pi pi-exclamation-triangle"
        accept={() => props.DeleteRegistration(idRegistration)}
        reject={() => setVisible(false)}
      />
    </>
  );
};

export default CardRegistration;
