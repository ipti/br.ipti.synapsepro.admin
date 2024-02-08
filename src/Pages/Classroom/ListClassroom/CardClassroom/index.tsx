import { Row } from "../../../../Styles/styles"

const CardClassRoom = ({ item }: { item: any }) => {
    return (
        <div className="card">
            <h3>{item.name}</h3>
            <Row>
                <Row
                    id="space-between"
                    style={{ marginBottom: "-10px" }}
                >
                    <p>Inscrições: {item.subscribe}</p><p>{item.year}</p>
                </Row>
            </Row>
        </div>
    )
}

export default CardClassRoom