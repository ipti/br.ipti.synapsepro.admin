import { Container } from "./style"
import IconSchedule from "./../../../Assets/images/Caderno.png";


const CardSchedule = ({title, subtitle}: {title: string, subtitle: string}) => {
    return(
        <Container>
      <div
        className={`boxQuantity`}
      >
        <img src={IconSchedule} alt="" style={{height:40}}  />
      </div>
      <div className="floatLeft">
        <div className={"boxDescriptionSchedule"}>{title}</div>
        <div className={"boxDescriptionScheduleSubtitle"}>{subtitle}</div>
      </div>
    </Container>
    )
}

export default CardSchedule