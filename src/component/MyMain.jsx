import { Col, Container, Row } from "react-bootstrap"
import MyCard from "./MyCard"
import { useEffect, useState } from "react";

function MyMain(props) {

    const [harry, setHarry] = useState([])
    const [titanic, setTitanic] = useState([])

    const getFetch = (nome, parametro) => {
        fetch(`https://www.omdbapi.com/?apikey=96932c7f&s=${nome}`)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Problema nella chiamata API");
                }
            })
            .then((obj) => {
                console.log(obj);
                parametro(obj.Search)
            })
            .catch((error) => {
                console.log("ERRORE", error);
            });
    };

    useEffect(() => {
        getFetch("harry", setHarry)
        getFetch("titanic", setTitanic)
    }, [])

    return (<>
        <Container>
            <Row className='h-100 border mt-2 p-3'>
                <h1 className="display-4">Romantic</h1>

                {harry.length > 0 && (
                    harry.slice(0, 4).map((e, index) =>
                        <Col xs={6} md={4} lg={3} key={index}>
                            <MyCard Poster={e.Poster} titolo={e.Title} oggetto={e}></MyCard>
                        </Col>
                    ))}
            </Row>

            {/* ///////////////////////////////////////////////////////2 row */}
            <Row className='h-100 border mt-2 p-3'>
                <h1 className="display-4">titanic</h1>
                {titanic.length > 0 && (
                    titanic.slice(0, 4).map((e, index) =>
                        <Col xs={6} md={4} lg={3} key={index}>
                            <MyCard Poster={e.Poster} titolo={e.Title} ></MyCard>
                        </Col>
                    ))}
            </Row>
        </Container>


    </>)


}
export default MyMain