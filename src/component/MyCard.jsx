import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MyCard(props) {
  return (
    <Card style={{ width: '' }}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1707343848723-bd87dea7b118?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
       
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        <Button variant="danger" className='ms-2'>Like</Button>
      </Card.Body>
    </Card>
  );
}

export default MyCard;