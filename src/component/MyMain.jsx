import { Col, Container, Row } from "react-bootstrap"
import MyCard from "./MyCard"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNewFetch } from "../redux/action";

function MyMain(props) {
    const dispatch=useDispatch()
    const fetchResults = useSelector(state => state.fetch)
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
    }, [dispatch])

    return (<>
 <Container>
            <Row className='h-100 border mt-2 p-3'>
                <h1 className="display-4">Romantic</h1>

                {fetchResults[0]?.Search?.length > 0 && (
                    fetchResults[0].Search.slice(0, 8).map((e, index) =>
                        <Col xs={6} md={4} lg={2} key={index}>
                            <MyCard Poster={e.Poster} titolo={e.Title} oggetto={e} />
                        </Col>
                    ))}
            </Row>

            <Row className='h-100 border mt-2 p-3'>
                <h1 className="display-4">Titanic</h1>
                {fetchResults[1]?.Search?.length > 0 && (
                    fetchResults[1].Search.slice(0, 8).map((e, index) =>
                        <Col xs={6} md={4} lg={2} key={index}>
                            <MyCard Poster={e.Poster} titolo={e.Title} oggetto={e} />
                        </Col>
                    ))}
            </Row>
        </Container>

    </>)


}
export default MyMain