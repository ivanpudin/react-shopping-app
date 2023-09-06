import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

const Product = (props) => {

    const { id, title, category, price, description, image, rating } = props

    return (
        <Card className="Card">
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{category}</Card.Subtitle>
                <Card.Title>{price} €</Card.Title>
                <ListGroup variant="flush">
                    <ListGroup.Item>{description}</ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    );
};

export default Product;