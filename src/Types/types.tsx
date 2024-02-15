import { DropdownChangeEvent } from "primereact/dropdown";
import { InputNumberValueChangeEvent } from "primereact/inputnumber";
import { RadioButtonChangeEvent } from "primereact/radiobutton";
import { SelectItemOptionsType } from "primereact/selectitem";
import { ChangeEventHandler, Dispatch, FocusEventHandler, SetStateAction } from "react";

export interface PropsInputText {
    value?: string,
    onChange?: ChangeEventHandler<HTMLInputElement> | undefined,
    placeholder?: string | undefined,
    disabled?: boolean | undefined,
    onBlur?: FocusEventHandler<HTMLInputElement> | undefined,
    name?: string
}

export interface PropsInputNumber {
    value?: number,
    onChange?(event: InputNumberValueChangeEvent): void
    placeholder?: string | undefined,
    disabled?: boolean | undefined,
    onBlur?: FocusEventHandler<HTMLInputElement> | undefined,
    name?: string
}

export interface PropsInputCalendar {
    value?: any,
    onChange: any,
    placeholder?: string | undefined,
    disabled?: boolean | undefined,
    onBlur?: FocusEventHandler<HTMLInputElement> | undefined,
    name?: string,
    view?: "date" | "month" | "year",
    dateFormat?: string
}

export interface PropsInputArea {
    value?: string,
    onChange?: ChangeEventHandler<HTMLTextAreaElement> | undefined,
    placeholder?: string | undefined,
    disabled?: boolean | undefined,
    onBlur?: FocusEventHandler<HTMLTextAreaElement> | undefined
}

export interface PropsRadioButton {
    value?: string,
    onChange?(event: RadioButtonChangeEvent): void,
    checked?: boolean,
    placeholder?: string | undefined,
    disabled?: boolean | undefined,
    label?: string,
    name?: string
}
export interface PropsRadioButtonCardCreate {
    options?: Array<any>,
    index: number,
    form: any,
    setform: any
}

export interface PropsCheckBoxCardView {
    options?: Array<any>,
    item?: any,
    handleChange?: (e: any, id: number, idOptions: number) => void,
    form?: any,
    setform?: any,
    disabled?: boolean
}

export interface PropsRadioButtonCardView {
    options?: Array<any>,
    item?: any,
    handleChange?: (e: any, id: number) => void,
    form?: any,
    setFormResp?: any,
    disabled?: boolean
}

export interface PropsTextFieldCardView {
    item?: any,
    form?: any,
    setFormResp?: any,
    disabled?: boolean
}

export interface PropsDropdown {
    value?: any,
    onChange?(event: DropdownChangeEvent): void,
    options?: SelectItemOptionsType | undefined,
    placerholder?: string
}

export interface PropsForm {
    title?: string, description?: string, question?: Array<any>, id?: string
}

export interface PropsAplicationContext {
    form: PropsForm,
    setform: any,
    project: any;
}

export interface FormsJson {
    form: Array<PropsForm>
}

export interface CreateOrEditFormTypes {
    form: PropsForm | undefined,
    setform: Dispatch<SetStateAction<PropsForm | undefined>>,
    responses: Responses
}


export interface Responses {
    response: Response[]
}

export interface Response {
    id: string
    title: string
    description: string
    response: Response2[]
}

export interface Response2 {
    question: Question[]
}

export interface Question {
    type: string
    label: string
    id: string
    required: boolean
    value: any
    options?: Option[]
}

export interface Option {
    value: number
    label: string
}


export interface ViewFormTypes {
    form: PropsForm | undefined,
    setform: Dispatch<SetStateAction<PropsForm | undefined>>
}


export interface FormListContextTypes {
    forms: FormsJson | undefined
}

export interface PropsComponentForm {
    name: string,
    type: string,
    component: ({ form, index, item, setform }: PropsComponets) => JSX.Element
}

export interface PropsComponets {
    index?: number,
    form?: any,
    item?: any,
    setform?: any,

}

export interface CardFormTypes {
    item: PropsForm
}

export interface SchoolIdentification {
    register_type: string
    inep_id: string
    manager_cpf: string
    manager_name: string
    manager_role: any
    manager_email: string
    manager_access_criterion: string
    manager_contract_type: number
    situation: number
    initial_date: string
    final_date: string
    number_ato: string
    name: string
    latitude: string
    longitude: string
    cep: string
    address: string
    address_number: string
    address_complement: string
    address_neighborhood: string
    edcenso_uf_fk: number
    edcenso_city_fk: number
    edcenso_district_fk: number
    ddd: string
    phone_number: string
    public_phone_number: any
    other_phone_number: string
    fax_number: any
    email: string
    edcenso_regional_education_organ_fk: string
    administrative_dependence: number
    location: number
    id_difflocation: any
    linked_mec: any
    linked_army: any
    linked_helth: any
    linked_other: any
    private_school_category: any
    public_contract: any
    private_school_business_or_individual: any
    private_school_syndicate_or_association: any
    private_school_ong_or_oscip: any
    private_school_non_profit_institutions: any
    private_school_s_system: any
    private_school_organization_civil_society: any
    private_school_maintainer_cnpj: any
    private_school_cnpj: any
    regulation: any
    regulation_organ: any
    regulation_organ_federal: boolean
    regulation_organ_state: boolean
    regulation_organ_municipal: boolean
    offer_or_linked_unity: number
    inep_head_school: string
    ies_code: string
    logo_file_name: string
    logo_file_type: string
    logo_file_content: LogoFileContent
    act_of_acknowledgement: string
  }

  export interface LogoFileContent {
    type: string
    data: number[]
  }
  