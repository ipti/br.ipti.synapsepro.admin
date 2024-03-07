import { useContext } from "react"
import DropdownComponent from "../../../../../../Components/Dropdown"
import MaskInput from "../../../../../../Components/InputMask"
import RadioButtonComponent from "../../../../../../Components/RadioButton"
import TextInput from "../../../../../../Components/TextInput"
import { Padding, Row } from "../../../../../../Styles/styles"
import { RegisterContext } from "../../../../../../Context/Register/context"
import { RegisterTypes } from "../../../../../../Context/Register/type"

const InputsEquals = ({ values, handleChange, errors, touched }: { values: any, handleChange: any, errors: any, touched: any }) => {

    const props = useContext(RegisterContext) as RegisterTypes;
    return (
        <>
            <Padding />
            <Padding padding={props.padding} />
            <div>
                <label>Data de Nascimento *</label>
                <Padding />
                <MaskInput mask="99/99/9999" placeholder="Data de Nascimento *" name="birthday" value={values.birthday} onChange={handleChange} />
            </div>
            {errors.birthday && touched.birthday ? (
                <div style={{ color: "red", marginTop: "8px" }}>{errors.birthday}</div>
            ) : null}
            <Padding padding={props.padding} />
            <div>
                <label>Sexo *</label>
                <Padding />
                <DropdownComponent placerholder="Sexo *" value={values.sex} options={props.sex} name="sex" onChange={handleChange} optionsLabel="label" />
            </div>
            {errors.sex && touched.sex ? (
                <div style={{ color: "red", marginTop: "8px" }}>{errors.sex}</div>
            ) : null}
            <Padding padding={props.padding} />
            <div>
                <label>Telefone *</label>
                <Padding />
                <TextInput placeholder="Telefone *" name="responsable_telephone" onChange={handleChange} value={values.responsable_telephone} />
            </div>
            {errors.responsable_telephone && touched.responsable_telephone ? (
                <div style={{ color: "red", marginTop: "8px" }}>{errors.responsable_telephone}</div>
            ) : null}
            <Padding padding={props.padding} />

            <div>
                <label>Zona *</label>
                <Padding />
                <Row className="gap-2">
                    <RadioButtonComponent value={1} checked={values.zone === 1} onChange={handleChange} name="zone" label="Rural" />
                    <RadioButtonComponent value={2} checked={values.zone === 2} onChange={handleChange} name="zone" label="Urbana" />
                </Row>
            </div>
            {errors.zone && touched.zone ? (
                <div style={{ color: "red", marginTop: "8px" }}>{errors.zone}</div>
            ) : null}
            <Padding padding={props.padding} />
        </>
    )
}

export default InputsEquals;