import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { getMovie } from '../redux/action';

function MyCard(props) {
  const reduxstate=useSelector(state=>state.allMovies)

const dispatch=useDispatch()

const myfunction=()=>{

  dispatch(getMovie(props.oggetto))
}



  return (
    <Card style={{ width: '' }}>
      <Card.Img variant="top" src={props.Poster} />
      <Card.Body>
        <Card.Title>{props.titolo}</Card.Title>
        <Card.Text>
       
        </Card.Text>
        <Button variant="success" className='ms-2'
        onClick={()=>myfunction()}
        
        
        
        
        >Like</Button>
      </Card.Body>
    </Card>
  );
}

export default MyCard;