import { Container, Padding } from "../../../../../Styles/styles"
import AttendanceList from "./AttendanceListArchives"
import Beneficiarios from "./Beneficiarios"
import UploadArchivesAttendanceList from "./UploadArchivesAttendanceList"

const Meeting = () => {
    return (
        <Container>
            <h2>Encontro I</h2>
            <Padding padding="16px" />
            {true ? <UploadArchivesAttendanceList />
                : <AttendanceList />}
            <Padding padding="16px" />

            <Beneficiarios />
        </Container>
    )
}

export default Meeting