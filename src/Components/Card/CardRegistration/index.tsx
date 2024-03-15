import { ConfirmDialog } from "primereact/confirmdialog";
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import IconActive from "../../../Assets/images/activeRegistration.svg";
import IconClasMedia from "../../../Assets/images/iconClasMedia.svg";
import IconNotActive from "../../../Assets/images/notactiveRegistration.svg";
import { RegistrationClassroomContext } from "../../../Context/Classroom/RegistrationsList/context";
import { RegistrationClassroomTypes } from "../../../Context/Classroom/RegistrationsList/type";
import { Status } from "../../../Controller/controllerGlobal";
import { Column, Padding, Row } from "../../../Styles/styles";
import Icon from "../../Icon";
import { Container } from "./style";

const CardRegistration = ({
  title,
  subtitle,
  idRegistration,
  status,
}: {
  title: string;
  subtitle: string;
  idRegistration: number;
  status: string;
}) => {
  const [visible, setVisible] = useState(false);
  const history = useNavigate();

  const statuGlobal = Status;

  const {id} = useParams()

  const props = useContext(
    RegistrationClassroomContext
  ) as RegistrationClassroomTypes;

  return (
    <>
      <Container
        className="card cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          history(`/turma/${id}/aluno/${idRegistration}`);
        }}
      >
        <Row id="space-between">
          <h3>Aluno</h3>
          <div
            className="cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setVisible(true);
            }}
          >
            <Icon icon="pi pi-trash" size="1rem" />
          </div>
        </Row>
        <Padding padding="8px" />
        <Row>
          <div className={`boxQuantity`}>
            <Column id="center">
              <img
                src={
                  status === statuGlobal.APPROVED
                    ? IconActive
                    : status === statuGlobal.PENDING
                    ? IconClasMedia
                    : status === statuGlobal.REPROVED
                    ? IconNotActive
                    : ""
                }
                alt=""
                style={{ height: 40 }}
              />
            </Column>
          </div>
          <Padding />
          <Column>
            <div className={"boxDescriptionSchedule"}>
              {"Matricula - " + title}
            </div>
            <Padding />
            <div className={"boxDescriptionScheduleSubtitle"}>{subtitle}</div>
          </Column>
        </Row>
      </Container>
      <ConfirmDialog
        visible={visible}
        onHide={() => setVisible(false)}
        message="Are you sure you want to proceed?"
        header="Confirmation"
        icon="pi pi-exclamation-triangle"
        accept={() => props.DeleteRegistration(idRegistration)}
        reject={() => setVisible(false)}
      />
    </>
  );
};

export default CardRegistration;
