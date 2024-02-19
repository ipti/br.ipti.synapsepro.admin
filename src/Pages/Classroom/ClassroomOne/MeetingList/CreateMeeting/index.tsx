import TextInput from "../../../../../Components/TextInput"
import { Container, Padding } from "../../../../../Styles/styles"

const CreateMeeting = () => {
    return(
        <Container>
            <h2>Criar Encontro</h2>
            <Padding padding="16px" />
            <div className="card">
                <div className="grid">
                    <div className="col-12 md:col-6">
                        <label>Nome</label>
                        <TextInput placeholder="Nome" />
                    </div>
                    <div className="col-12 md:col-6">
                        <label>Responsavel</label>
                        <TextInput placeholder="Responsavel" />
                    </div>
                </div>
                <div className="grid">
                    <div className="col-12 md:col-6">
                        <label>Data do encontro</label>
                        <TextInput placeholder="Nome" />
                    </div>
                </div>

            </div>
        </Container>
    )
}

export default CreateMeeting