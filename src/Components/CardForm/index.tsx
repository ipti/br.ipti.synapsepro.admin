
import { Card } from 'primereact/card';
import { CardFormTypes } from '../../Types/types';
import { useNavigate } from 'react-router-dom';


const CardForm = ({ item }: CardFormTypes) => {

    const history = useNavigate()
    return (
        <Card title={item.title} style={{minHeight: "210px", cursor: "pointer"}} onClick={() => history(`/edit/${item.id}`)}>
            <p className="m-0">
                {item.description?.substring(0, 128)}{item?.description?.length! > 128 ? "..." : ""}
            </p>
        </Card>
    )
}

export default CardForm