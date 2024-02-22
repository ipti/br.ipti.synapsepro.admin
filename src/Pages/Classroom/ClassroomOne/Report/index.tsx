import { Tooltip } from "primereact/tooltip"
import { Container } from "../../../../Styles/styles"
import { DataTable } from "primereact/datatable"
import { Column } from "primereact/column"
import { Button } from "primereact/button"
import { useRef } from "react"
import data from "./../../../../Data/students.json"


interface ColumnMeta {
    field: string;
    header: string;
}

const Report = () => {
    return (
        <ReportPage />
    )
}

const ReportPage = () => {

    const dt = useRef<any>(null);

    const cols: ColumnMeta[] = [
        { field: 'category', header: 'Category' },
        { field: 'quantity', header: 'Quantity' }
    ];

    const exportColumns = cols.map((col) => ({ title: col.header, dataKey: col.field }));


    const exportCSV = (selectionOnly: any) => {
        dt.current.exportCSV({ selectionOnly });
    };

    const exportPdf = () => {
        import('jspdf').then((jsPDF) => {
            import('jspdf-autotable').then(() => {
                // const doc = new jsPDF.default(0, 0);

                // doc.autoTable(exportColumns, products);
                // doc.save('products.pdf');
            });
        });
    };

    const exportExcel = () => {
        import('xlsx').then((xlsx) => {
            const worksheet = xlsx.utils.json_to_sheet(data);
            const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
            const excelBuffer = xlsx.write(workbook, {
                bookType: 'xlsx',
                type: 'array'
            });

            saveAsExcelFile(excelBuffer, 'products');
        });
    };

    const saveAsExcelFile = (buffer: any, fileName: any) => {
        import('file-saver').then((module) => {
            if (module && module.default) {
                let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
                let EXCEL_EXTENSION = '.xlsx';
                const data = new Blob([buffer], {
                    type: EXCEL_TYPE
                });

                module.default.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
            }
        });
    }

    const header = (
        <div className="flex align-items-center justify-content-end gap-2">
            {/* <Button type="button" icon="pi pi-file" rounded onClick={() => exportCSV(false)} data-pr-tooltip="CSV" /> */}
            <Button type="button" icon="pi pi-file-excel" severity="success" rounded onClick={exportExcel} data-pr-tooltip="XLS" />
            <Button type="button" icon="pi pi-file-pdf" severity="warning" rounded onClick={exportPdf} data-pr-tooltip="PDF" />
        </div>
    );
    return (
        <Container>
            <div className="card">
                <Tooltip target=".export-buttons>button" position="bottom" />
                <DataTable ref={dt} value={data} header={header} tableStyle={{ minWidth: '50rem' }}>
                    <Column field={"name"} header={"Nome"} />
                    {cols.map((col, index) => (
                        <>
                            <Column key={index} field={col.field} header={col.header} />
                        </>
                    ))}
                    <Column field={"name"} header={"Total"}  />
                </DataTable>
            </div>
        </Container>
    )
}

export default Report