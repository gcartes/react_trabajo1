import Card from 'react-bootstrap/Card';
import Tags from './Tags';

export default function MyCard({imagen,nombre,detalle,colorTag, textoTag}){

    return(
        <>


            <Card style={{ width: '18rem' }} className="mx-auto my-2">
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
                <Card.Title><b>{nombre}</b></Card.Title>
                <Card.Text>{detalle}</Card.Text>
                <Tags color={colorTag} texto={textoTag}></Tags>
            </Card.Body>
            </Card>           
    
        </>
    );
}