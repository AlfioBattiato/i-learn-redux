import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import MyNavbar from './component/MyNavbar';
import MyMain from './component/MyMain';
import Preferiti from './component/Preferiti';


function App() {
  return (
    <BrowserRouter>
      <MyNavbar></MyNavbar>
      <Routes>
        <Route path='/' element={

          <Container fluid className='h-100'>
            <Row>
              <Col xs={12} md={3}>
                <Preferiti></Preferiti>
                </Col>
              <Col xs={12} md={9}>
                <MyMain ></MyMain>
              </Col>
            </Row>




          </Container>


        }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
