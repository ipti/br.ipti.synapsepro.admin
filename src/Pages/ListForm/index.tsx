import { useContext } from "react"
import CardForm from "../../Components/CardForm"
import ListFormProvider, { ListFormContext } from "../../Context/ListForm/context"
import { Container } from "../../Styles/styles"

const ListForm = () => {
    return (
        <ListFormProvider>
            <ListFormPage />
        </ListFormProvider>
    )
}


const ListFormPage = () => {

    const props = useContext(ListFormContext)


    return (
        <Container>
            <div className="grid -mt-3 -ml-3 -mr-3">
                {props?.forms?.form.map((item, index) => {
                    return (
                        <div className="col-12 md:col-6 lg:col-4">
                            <CardForm item={item} />
                        </div>
                    )
                })}
            </div>
        </Container>
    )
}

export default ListForm