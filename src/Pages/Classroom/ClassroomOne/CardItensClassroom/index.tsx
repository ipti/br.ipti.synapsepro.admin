import styles from "../../../../Styles"
import { Column, Padding, Row } from "../../../../Styles/styles"

const CardItensClassrooom = ({ icon, title, description }: { icon: string, title: string, description: string }) => {
    return (
        <div className="card cursor-pointer">
            <Row>
                <Column id="center">
                    <i className={icon} style={{ fontSize: "2rem", color: styles.colors.colorsBaseProductNormal }}></i>
                </Column>
                <Padding padding="8px" />
                <Column id="space-between">
                    <h2>{title}</h2>
                    <Padding />
                    <p style={{ color: styles.colors.grayClear, fontSize: "12px" }}>{description}</p>
                </Column>
            </Row>
        </div>
    )
}

export default CardItensClassrooom