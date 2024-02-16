import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Container } from '../../../../Styles/styles';

const Student = () => {

    return (
        <Container>
            <h3>
                Turma
            </h3>
            <DataTable value={[]} scrollable scrollHeight="400px" className="mt-4">
                <Column field="name" header="Name" style={{ minWidth: '200px' }} frozen className="font-bold"></Column>
                <Column field="activity" header="Activity" style={{ minWidth: '200px' }}></Column>
                <Column field="representative.name" header="Representative" style={{ minWidth: '200px' }}></Column>
                <Column field="balance" header="Balance"style={{ minWidth: '200px' }} alignFrozen="right" ></Column>
            </DataTable>
        </Container>
    )
}

export default Student;