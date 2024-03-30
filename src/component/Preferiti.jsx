import { Col, Container, Row } from "react-bootstrap"
import MyCard from "./MyCard"

function Preferiti() {

    return (<>

        <Container >
            <Row className='h-100 border'>
                <h1 className="display-4">Preferiti</h1>
                <Col xs={12}>
                    <MyCard></MyCard>
                </Col>
            </Row>
        </Container>


    </>)
}
export default Preferiti