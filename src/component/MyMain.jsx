import { Col, Container, Row } from "react-bootstrap"
import MyCard from "./MyCard"

function MyMain(){

return(<>

<Container>
    <Row className='h-100 border mt-2 p-3'>
            <h1 className="display-4">Romantic</h1>
        <Col xs={6} md={4} lg={3}>
            <MyCard></MyCard>
        </Col>
        <Col xs={6} md={4} lg={3}>
            <MyCard></MyCard>
        </Col>
        <Col xs={6} md={4} lg={3}>
            <MyCard></MyCard>
        </Col>
        <Col xs={6} md={4} lg={3}>
            <MyCard></MyCard>
        </Col>
    </Row>
    {/* ///////////////////////////////////////////////////////2 row */}
    <Row className='h-100 border mt-2 p-3'>
            <h1 className="display-4">War</h1>
        <Col xs={6} md={4} lg={3}>
            <MyCard></MyCard>
        </Col>
        <Col xs={6} md={4} lg={3}>
            <MyCard></MyCard>
        </Col>
        <Col xs={6} md={4} lg={3}>
            <MyCard></MyCard>
        </Col>
        <Col xs={6} md={4} lg={3}>
            <MyCard></MyCard>
        </Col>
    </Row>
</Container>


</>)


}
export default MyMain