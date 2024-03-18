import { MultiSelect } from "primereact/multiselect"
import DropdownComponent from "../../../Components/Dropdown"
import TextInput from "../../../Components/TextInput"
import PasswordInput from "../../../Components/TextPassword"
import { ROLE } from "../../../Controller/controllerGlobal"
import { useFetchRequestProjectLists } from "../../../Services/Project/query"
import { Container, Padding } from "../../../Styles/styles"
import { Button } from "primereact/button"
import { Form, Formik } from "formik"

const CreateUser = () => {

    const { data: projects } = useFetchRequestProjectLists()

    

    return (
        <Container>
            <Padding padding="8px" />
            <h3>Criar usuários</h3>
            <Padding />
            <Formik initialValues={{name: "", username: "", role: "", password: "", projects: ""}} onSubmit={() => {}}>
                {({values, handleChange }) => {
                    return (
                        <Form>
                            <div className="grid">
                                <div className="col-12 md:col-6">
                                    <label>Nome</label>
                                    <Padding />
                                    <TextInput
                                        placeholder="Nome"
                                        value={values.name}
                                        onChange={handleChange}
                                        name="name"
                                    />
                                </div>
                                <div className="col-12 md:col-6">
                                    <label>Usuário</label>
                                    <Padding />
                                    <TextInput
                                        placeholder="Usuário"
                                        value={values.username}
                                        onChange={handleChange}
                                        name="name"
                                    />
                                </div>
                            </div>{" "}
                            <div className="grid">
                                <div className="col-12 md:col-6">
                                    <label>Tipo de usuário</label>
                                    <Padding />
                                    <DropdownComponent
                                        name="role"
                                        placerholder="Tipo de usuário"
                                        optionsLabel=""
                                        value={values.role}
                                        options={[
                                            ROLE.ADMIN,
                                            ROLE.USER,
                                            ROLE.COORDINATORS,
                                            ROLE.REAPPLICATORS,
                                        ]}
                                    />
                                </div>
                                <div className="col-12 md:col-6">
                                    <label>Projetos</label>
                                    <Padding />
                                    <MultiSelect options={projects} optionLabel="name" name="projects"
                                        filter placeholder="Projetos" maxSelectedLabels={3} className="w-full" />
                                </div>
                            </div>
                            <div className="grid">
                                <div className="col-12 md:col-6">
                                    <label>Senha</label>
                                    <Padding />
                                    <PasswordInput
                                        placeholder="Senha"
                                        name="password"
                                    />
                                </div>
                                <div className="col-12 md:col-6">
                                    <label>Confirmar senha</label>
                                    <Padding />
                                    <PasswordInput
                                        placeholder="Senha"
                                        name="password"
                                    />
                                </div>
                            </div>{" "}
                            <Padding padding="16px" />
                            <Button label="Criar" />
                        </Form>
                    )
                }}


            </Formik>
        </Container>
    )
}

export default CreateUser