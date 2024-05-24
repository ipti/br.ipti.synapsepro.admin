import { Form, Formik } from "formik";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import DropdownComponent from "../../../../Components/Dropdown";
import { useFetchRequestTsLists } from "../../../../Services/Project/query";
import { Column, Padding, Row } from "../../../../Styles/styles";
import { ClassroomContext } from "../../../../Context/Classroom/context";
import { ClassroomTypes } from "../../../../Context/Classroom/type";
import { useContext } from "react";
import { useParams } from "react-router-dom";

const ModalChange = ({
    onHide,
    visible,
}: {
    onHide(): void;
    visible?: boolean | undefined;
}) => {
    const { id } = useParams();

    const props = useContext(ClassroomContext) as ClassroomTypes;

    const { data: tsOneRequest } = useFetchRequestTsLists(undefined)

    return (
        <Dialog
            onHide={onHide}
            visible={visible}
            style={{ width: window.innerWidth < 800 ? "80vw" : "50vw" }}
        >
            <Formik
                initialValues={{
                    idProject: ""
                }}
                onSubmit={(values) => {
                    props.ChangeClassroom({idClassroom: id!, idProject: values.idProject})
                    onHide();
                }}
            >
                {({ values, handleChange }) => {
                    return (
                        <Form>
                            <div className="grid">
                                <div className="col-12 md:col-6">
                                    <label>Escolha um projeto</label>
                                    <Padding />
                                    <DropdownComponent
                                        value={values.idProject}
                                        options={tsOneRequest?.project}
                                        placerholder="Digite um nome"
                                        onChange={handleChange}
                                        optionsValue="id"
                                        name="idProject"
                                    />
                                </div>
                            </div>{" "}
                            <Padding padding="16px" />
                            <Column style={{ width: "100%" }}>
                                <Row id="end">
                                    <Button label="Salvar" />
                                </Row>
                            </Column>
                        </Form>
                    );
                }}
            </Formik>
        </Dialog>
    );
};

export default ModalChange;
