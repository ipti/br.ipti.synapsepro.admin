import { Row } from "../../../Styles/styles";

const CardQuant = ({ title, quant }: { title: string; quant: number }) => {
  return (
    <div className="card">
      <Row id="space-between">
        <h3>{title}</h3>
        <h1>{quant}</h1>
      </Row>
    </div>
  );
};

export default CardQuant;
