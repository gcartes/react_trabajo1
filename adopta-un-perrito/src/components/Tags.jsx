import Badge from 'react-bootstrap/Badge';

export default function Tags({color,texto}){

    return(
        <>
            <Badge pill bg={color}>{texto}</Badge>         
        </>
    );
}