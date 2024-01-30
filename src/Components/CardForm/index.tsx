
import { Card } from 'primereact/card';
import { CardFormTypes } from '../../Types/types';
import { useNavigate } from 'react-router-dom';


const CardForm = ({ item }: CardFormTypes) => {

    const history = useNavigate()
    return (
        <Card title={item.title} onClick={() => history(`/edit/${item.id}`)}>
            <p className="m-0">
                {item.description}
            </p>
        </Card>
    )
}

export default CardForm