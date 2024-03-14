import { Button } from "primereact/button"
import { Column } from "primereact/column"
import { DataTable } from "primereact/datatable"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import data from "../../../../../../Data/students.json"
import { Padding } from "../../../../../../Styles/styles"

const Beneficiarios = () => {

    const [selectedProducts, setSelectedProducts] = useState<any>(null);
    const [rowClick, ] = useState(true);
    const history = useNavigate()

    return (
        <div className="card">
            <h3>Lista de presença</h3>
            <Padding padding="16px" />
            <Button label="Gerar Lista de presença" icon="pi pi-download" onClick={() => {history(`/turma/${1}/encontros/${1}/generate`)}} />
            <Padding padding="16px" />
            <DataTable value={data} selectionMode={rowClick ? null : 'checkbox'} selection={selectedProducts} onSelectionChange={(e: any) => setSelectedProducts(e.value)} dataKey="id" tableStyle={{ minWidth: '50rem' }}>
                <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                <Column field="id" align="center" header="Matricula"></Column>
                <Column field="name" align="center" header="Nome"></Column>
            </DataTable>
        </div>
    )
}

export default Beneficiarios