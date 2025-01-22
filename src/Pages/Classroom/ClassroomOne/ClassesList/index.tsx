import { Button } from "primereact/button"
import { useContext, useState } from "react"
import ContentPage from "../../../../Components/ContentPage"
import DropdownComponent from "../../../../Components/Dropdown"
import ClassesClassroomProvider, { ClassesClassroomContext } from "../../../../Context/Classroom/ClassesList/context"
import { Discipline } from "../../../../Context/Classroom/ClassesList/type"
import http from "../../../../Services/axios"
import { Padding, Row } from "../../../../Styles/styles"

const ClassesList = () => {
    return (
        <ClassesClassroomProvider>
            <ClassesListPage />
        </ClassesClassroomProvider>
    )
}

const ClassesListPage = () => {

    const [discipline, setDicipline] = useState<Discipline | undefined>()
    const [task, setTask] = useState<number | undefined>()


    const downloadCSV = async (row: any) => {

        try {
            const response = await http.get('/performance/report-one-line-student/' + row.lesson_id)

            // Criar um link para download
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'synapse-' + row.lesson_id + '.csv'); // Nome do arquivo
            document.body.appendChild(link);
            link.click();

            // Remover o link
        } catch (error) {
            console.error('Erro ao baixar o arquivo:', error);
        }
    };


    const props = useContext(ClassesClassroomContext)

    return (
        <ContentPage title="Lições" description="Exporte dados da sua lições">
            <Row id="end">

            <Button label="Exportar" disabled={!task} icon={"pi pi-download"}
              onClick={() => {
                  downloadCSV(task);
                }} />
                </Row>
                <Padding padding="16px" />
            <div className="grid">
                <div className="col-12 md:col-6">
                    <label>Disciplinas</label>
                    <Padding />
                    <DropdownComponent value={discipline} placerholder="Selecione disciplina" options={props?.classes} optionsLabel="discipline.name" onChange={(e) => setDicipline(e.target.value)} />
                </div>
                <div className="col-12 md:col-6">
                <label>Lições</label>
                <Padding />
                    <DropdownComponent placerholder="Selecione disciplina" value={task} options={discipline?.lessons} optionsLabel="lesson_id" onChange={(e) => setTask(e.target.value)} />
                </div>
            </div>
            {/* <DataTable
          value={props?.classes}
          tableStyle={{ minWidth: "50rem" }}
          paginator
          rows={10}
        >
          <Column field="id" header=""></Column>
          <Column
            field="discipline.name"
            header="Nome"
          ></Column>
          <Column header="Ações" body={ActionBeneficiariesBody}></Column>
        </DataTable> */}
        </ContentPage>
    )
}

export default ClassesList