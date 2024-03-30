import { Col, Container, Row } from "react-bootstrap"
import MyCard from "./MyCard"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNewFetch } from "../redux/action";

function MyMain(props) {
    const dispatch=useDispatch()
    const harry1=useSelector(state=>state.fetch[0].Search ?state=>state.fetch[0].Search:state)
    const titanic1=useSelector(state=>state.fetch[1].Search ?state=>state.fetch[1].Search:state)

    // const [harry, setHarry] = useState([])
    // const [titanic, setTitanic] = useState([])

    // const getFetch = (nome, parametro) => {
    //     fetch(`https://www.omdbapi.com/?apikey=96932c7f&s=${nome}`)
    //         .then((response) => {
    //             if (response.ok) {
    //                 return response.json();
    //             } else {
    //                 throw new Error("Problema nella chiamata API");
    //             }
    //         })
    //         .then((obj) => {
    //             console.log(obj);
    //             parametro(obj.Search)
    //         })
    //         .catch((error) => {
    //             console.log("ERRORE", error);
    //         });
    // };

    useEffect(() => {
        // getFetch("harry", setHarry)
        // getFetch("titanic", setTitanic)
        dispatch(getNewFetch("harry"))
        dispatch(getNewFetch("titanic"))
    }, [])

    return (<>
        <Container>
            <Row className='h-100 border mt-2 p-3'>
                <h1 className="display-4">Romantic</h1>

                {harry1.length > 0 && (
                    harry1.slice(0, 4).map((e, index) =>
                        <Col xs={6} md={4} lg={3} key={index}>
                            <MyCard Poster={e.Poster} titolo={e.Title} oggetto={e}></MyCard>
                        </Col>
                    ))}
            </Row>

            {/* ///////////////////////////////////////////////////////2 row */}
            <Row className='h-100 border mt-2 p-3'>
                <h1 className="display-4">titanic</h1>
                {titanic1.length > 0 && (
                    titanic1.slice(0, 4).map((e, index) =>
                        <Col xs={6} md={4} lg={3} key={index}>
                            <MyCard Poster={e.Poster} titolo={e.Title} ></MyCard>
                        </Col>
                    ))}
            </Row>
        </Container>


    </>)


}
export default MyMain