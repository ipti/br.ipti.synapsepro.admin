import { DataTable } from "primereact/datatable"
import { Container, Padding } from "../../Styles/styles"
import { Column } from "primereact/column"
import UsersProvider, { UsersContext } from "../../Context/Users/context"
import { useContext } from "react"
import { UsersTypes } from "../../Context/Users/type"
import { Button } from "primereact/button"
import { useNavigate } from "react-router-dom"


const ListUsers = () => {
    return (
        <UsersProvider>
            <ListUsersPage />
        </UsersProvider>
    )
}

const ListUsersPage = () => {

    const props = useContext(UsersContext) as UsersTypes
    const history = useNavigate()
    return (
        <Container>
            <h3>
                Usuários
            </h3>
            <Padding padding="16px" />
            <Button label="Criar usuário" onClick={() => history("/users/criar")} />
            <Padding padding="16px" />
            <DataTable value={props.users} tableStyle={{ minWidth: '50rem' }}>
                <Column field="id" header="Code"></Column>
                <Column field="name" header="Nome"></Column>
                <Column field="category" header="Tipo"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </Container>
    )
}

export default ListUsers