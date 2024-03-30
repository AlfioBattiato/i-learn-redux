import { Button, Col, Container, Row } from "react-bootstrap"
import MyCard from "./MyCard"
import { useSelector } from "react-redux"

function Preferiti() {
    const reduxstate = useSelector(state => state.allMovies)

    return (<>

        <Container >
            <Row className='h-100 border gy-2 gap-2 mt-2'>
                <h1 className="display-4">Preferiti</h1>
                {reduxstate.map((e,index) =>
                 <Col xs={5} key={index} className="border">
                   <img style={{width:"10rem",height:"15rem"}} src={e.Poster} alt="img"></img>
                 
                   <Button variant="danger" className="mt-1">Delete</Button>
                   {/* a sto bottone glielo dobbiamo dire che deve fare al click?????ATTENTO AGLI IMPORT qualche suggerimento te lo puo dare il fratello Mycard ;) */}
                </Col>)}
            </Row>
        </Container>


    </>)
}
export default Preferiti