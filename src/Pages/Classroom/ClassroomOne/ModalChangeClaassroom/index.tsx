import { Form, Formik } from "formik";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import DropdownComponent from "../../../../Components/Dropdown";
import { useFetchRequestTsLists } from "../../../../Services/Project/query";
import { Column, Padding, Row } from "../../../../Styles/styles";

const ModalChange = ({
    onHide,
    visible,
}: {
    onHide(): void;
    visible?: boolean | undefined;
}) => {

    const { data: tsOneRequest } = useFetchRequestTsLists(undefined)

    return (
        <Dialog
            onHide={onHide}
            visible={visible}
            style={{ width: window.innerWidth < 800 ? "80vw" : "50vw" }}
        >
            <Formik
                initialValues={{
                    name: ""
                }}
                onSubmit={(values) => {
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
                                        value={values.name}
                                        options={tsOneRequest?.project}
                                        placerholder="Digite um nome"
                                        onChange={handleChange}
                                        name="name"
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
