import { Col, Container, Row } from "react-bootstrap"
import MyCard from "./MyCard"
import { useEffect, useState } from "react";

function MyMain() {

    const [harry, setHarry] = useState([])

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
                setHarry(obj.Search)
            })
            .catch((error) => {
                console.log("ERRORE", error);
            });
    };


    useEffect(() => {
        getFetch("harry")
        console.log(harry)
    }, [])

    return (<>
        <Container>
            <Row className='h-100 border mt-2 p-3'>
                <h1 className="display-4">Romantic</h1>

                {harry.length > 0 && (
                    harry.slice(0,4).map((e, index) =>
                            <Col xs={6} md={4} lg={3} key={index}>
                                <MyCard></MyCard>
                            </Col>
                    ))}
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