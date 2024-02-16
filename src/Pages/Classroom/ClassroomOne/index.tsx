import { useNavigate, useParams } from "react-router-dom"
import { Container } from "../../../Styles/styles"
import CardItensClassrooom from "./CardItensClassroom"

const ClassroomOne = () => {

    const history = useNavigate()
    const {id} = useParams()
    return (
        <Container>
            <div className="grid">
                <div className="col-12 md:col-6" onClick={() => history(`/turma/${id}/alunos`)}>
                    <CardItensClassrooom title="Alunos" description="Gerencia seus alunos" icon="pi pi-users" />
                </div>
                <div className="col-12 md:col-6" onClick={() => history(`/turma/${id}/encontros`)}>
                    <CardItensClassrooom title="Encontros" description="Gerencia seus encontros" icon="pi pi-home" />
                </div>
            </div>
        </Container>
    )
}

export default ClassroomOne