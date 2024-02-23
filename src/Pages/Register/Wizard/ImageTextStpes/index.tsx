import { Row } from "../../../../Styles/styles"

const ImageTextSteps = ({ img, title, subTitle }: { img: string, title: string, subTitle: React.ReactNode }) => {
    return (
        <>
            <div className="col-12">
                <Row id="center">
                    <img className="imageRegistration" src={img} alt="" />
                </Row>
            </div>
            <div className="col-12">
                <Row id="center">
                    <h1>{title}</h1>
                </Row>
                <Row id="center">
                    <p>
                        {subTitle}
                    </p>
                </Row>
            </div>
        </>
    )
}

export default ImageTextSteps;