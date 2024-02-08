import { useNavigate, } from "react-router-dom"
import { Container, Text } from "./style";
import { Column, Padding, Row } from "../../../Styles/styles";
import Icon from "../../Icon";

interface Propsitem {
    icon: string,
    path: string,
    text: string,
    active: boolean,
    funcActiv: any
}


const Item = ({ icon, path, text, active, funcActiv }: Propsitem) => {
    const history = useNavigate();

    const Event = () => {
        history(`${path}`);
        funcActiv()
    }

    return (
        <Container onClick={Event} active={active}>
            <Row style={{ height: "35px" }}>
                <Padding />
                <Text active={active}>
                    <Column id="center">
                        <Icon size="1.2rem" icon={icon} />
                    </Column>
                    <Padding />
                    <Column id="center">
                        {text}
                    </Column>
                </Text>
            </Row>
        </Container>
    )
}

export default Item