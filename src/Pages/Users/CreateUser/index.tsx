import DropdownComponent from "../../../Components/Dropdown"
import TextInput from "../../../Components/TextInput"
import PasswordInput from "../../../Components/TextPassword"
import { ROLE } from "../../../Controller/controllerGlobal"
import { useFetchRequestProjectLists } from "../../../Services/Project/query"
import { Container, Padding } from "../../../Styles/styles"

const CreateUser = () => {

    const {data: projects} = useFetchRequestProjectLists()
    return (
        <Container>
            <Padding padding="8px" />
            <h3>Criar usuários</h3>
            <Padding />
            <div className="grid">
                <div className="col-12 md:col-6">
                    <label>Nome</label>
                    <Padding />
                    <TextInput
                        placeholder="Nome"
                        name="name"
                    />
                </div>
                <div className="col-12 md:col-6">
                    <label>Usuário</label>
                    <Padding />
                    <TextInput
                        placeholder="Usuário"
                        name="name"
                    />
                </div>
            </div>{" "}
            <div className="grid">
                <div className="col-12 md:col-6">
                    <label>Tipo de usuário</label>
                    <Padding />
                    <DropdownComponent
                        name="status"
                        placerholder="Tipo de usuário"
                        optionsLabel=""
                        options={[
                            ROLE.ADMIN,
                            ROLE.USER,
                            ROLE.COORDINATORS,
                            ROLE.REAPPLICATORS,
                        ]}
                    />
                </div>
                <div className="col-12 md:col-6">
                    <label>Tipo de usuário</label>
                    <Padding />
                    <DropdownComponent
                        name="status"
                        placerholder="Projetos"
                        optionsLabel=""
                        options={projects}
                    />
                </div>
            </div>
            <div className="grid">
                <div className="col-12 md:col-6">
                    <label>Senha</label>
                    <Padding />
                    <PasswordInput
                        placeholder="Senha"
                        name="cpf"
                    />
                </div>
                <div className="col-12 md:col-6">
                    <label>Confirmar senha</label>
                    <Padding />
                    <PasswordInput
                        placeholder="Senha"
                        name="cpf"
                    />
                </div>
            </div>{" "}
        </Container>
    )
}

export default CreateUser