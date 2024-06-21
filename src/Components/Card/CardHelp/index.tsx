import styles from "../../../Styles";

const CardHelp = ({
  title,
  description,
  link,
}: {
  title: string;
  description?: string;
  link?: string;
}) => {
  return (
    <div
      style={{ backgroundColor: styles.colors.colorCard, cursor: "pointer" }}
      className="card"
      onClick={() => window.open(link)}
    >
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default CardHelp;
