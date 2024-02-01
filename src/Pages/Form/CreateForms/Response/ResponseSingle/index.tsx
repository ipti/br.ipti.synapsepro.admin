import { Paginator } from 'primereact/paginator';
import { useContext, useState } from "react";
import { CreateOrEditFormContext } from '../../../../../Context/Form/CreateOrEditForm/context';
import { CreateOrEditFormTypes } from '../../../../../Types/types';
import { Column, Padding, Row } from '../../../../../Styles/styles';
import RenderViewTextField from '../../../../../Components/ComponentsForm/ComponentTextFiled/View';
import RenderViewTextLong from '../../../../../Components/ComponentsForm/ComponentTextLong/View';
import RenderRadioButtonCard from '../../../../../Components/ComponentsForm/ComponentMulti/View';
import RenderCheckBoxCard from '../../../../../Components/ComponentsForm/ComponentCheckbox/View';


const ResponseSingle = () => {
    const [first, setFirst] = useState(0);

    const onPageChange = (event: any) => {
        setFirst(event.first);
    };

    const props = useContext(CreateOrEditFormContext) as CreateOrEditFormTypes
    return (
        <>
            <div className='card'>
                <Padding padding="16px">
                    <h2>{props?.responses?.resposne[first]?.title}</h2>
                    {props?.responses?.resposne[first]?.description ? (
                        <>
                            <Padding padding="8px" />
                            <p>{props?.responses?.resposne[first]?.description}</p>
                        </>
                    ) : null}
                </Padding>
            </div>
            <div className="card">
                <Paginator first={first} rows={1} template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink" totalRecords={props.responses.resposne.length} onPageChange={onPageChange} />
                {props.responses.resposne[first].question.map((item, index) => {
                    return (
                        <div>
                            <Padding>
                                <Row id="space-between">
                                    <Column id="center">
                                        <p>{item.label}</p>
                                    </Column>
                                </Row>
                            </Padding>
                            <Padding>
                                {item?.type === "textfield" ? (
                                    <RenderViewTextField
                                        item={item}
                                        disabled
                                    />
                                ) : item?.type === "textlong" ? (
                                    <RenderViewTextLong
                                        item={item}
                                        disabled
                                    />
                                ) : item?.type === "mult" ? (
                                    <div>
                                        <RenderRadioButtonCard
                                            options={item.options}
                                            item={item}
                                            disabled
                                        />
                                    </div>
                                ) : item?.type === "checklist" ? (
                                    <div>
                                        <RenderCheckBoxCard
                                            options={item?.options}
                                            item={item}
                                            disabled
                                        />
                                    </div>
                                ) : null}
                            </Padding>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default ResponseSingle