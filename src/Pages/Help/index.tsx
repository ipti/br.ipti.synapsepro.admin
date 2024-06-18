import CardHelp from "../../Components/Card/CardHelp";
import { Container, Padding } from "../../Styles/styles";

const Help = () => {
    return(
        <Container>
            <h1>Ajuda</h1>
            <Padding padding="16px" />
            <div className="grid">
                <div className="col-12 md:col-6">
                    <CardHelp  />
                </div>
            </div>
        </Container>
    )
}

export default Help;