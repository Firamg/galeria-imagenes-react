

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards({image,title,description}) {
  return (
    <Card style={{ width: '18rem' }}>
      
     
      
      <Card.Img variant="top" src={image}/>
      
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="success">GET IT!</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;