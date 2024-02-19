import { Button } from "primereact/button";
import CardClassroom from "../../../../Components/Card/CardClassroom";
import { Container, Padding } from "../../../../Styles/styles";

const MeetingList = () => {
  const meeting = [
    { name: "Encontro I", data: "2024-02-13" },
    { name: "Encontro II", data: "2024-02-14" },
    { name: "Encontro III", data: "2024-02-15" },
    { name: "Encontro IV", data: "2024-02-15" },
  ];
  return (
    <Container>
      <h2>Encontros</h2>
      <Padding padding="16px" />
      <Button label="Criar encontro" />
      <Padding padding="16px" />
      <div className="grid">
        {meeting.map((item, index) => {
          return (
            <div className="col-12 md:col-6 lg:col-4">
              <CardClassroom title={item.name} year={item.data} />
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default MeetingList;
