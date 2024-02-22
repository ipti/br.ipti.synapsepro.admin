import { Button } from "primereact/button";
import CardMeeting from "../../../../Components/Card/CardMeeting";
import { Container, Padding } from "../../../../Styles/styles";
import { useNavigate, useParams } from "react-router-dom";

const MeetingList = () => {
  const meeting = [
    { name: "Encontro I", data: "2024-02-13" },
    { name: "Encontro II", data: "2024-02-14" },
    { name: "Encontro III", data: "2024-02-15" },
    { name: "Encontro IV", data: "2024-02-15" },
  ];

  const { id } = useParams()

  const history = useNavigate()
  return (
    <Container>
      <h2>Encontros</h2>
      <Padding padding="16px" />
      <Button label="Criar encontro" onClick={() => history(`/turma/${id}/encontros/criar`)}/>
      <Padding padding="16px" />
      <div className="grid">
        {meeting.map((item, index) => {
          return (
            <div className="col-12 md:col-6 lg:col-4" key={index}>
              <CardMeeting title={item.name} data={item.data} />
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default MeetingList;
