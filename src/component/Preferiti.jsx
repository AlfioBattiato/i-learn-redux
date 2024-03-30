import { Col, Container, Row } from "react-bootstrap"
import MyCard from "./MyCard"
import { useSelector } from "react-redux"

function Preferiti() {
    const reduxstate = useSelector(state => state.allMovies)

    return (<>

        <Container >
            <Row className='h-100 border'>
                <h1 className="display-4">Preferiti</h1>
                {reduxstate.map((e,index) =>
                 <Col xs={12} key={index}>
                    <MyCard Poster={e.Poster} titolo={e.Title}></MyCard>
                </Col>)}
            </Row>
        </Container>


    </>)
}
export default Preferiti