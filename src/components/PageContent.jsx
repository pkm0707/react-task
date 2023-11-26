import Card from 'react-bootstrap/Card';
function PageContent({image,title}){
    return(
        
        <Card >
        <Card.Img variant="top" src={image} alt={title}/>
        <Card.Body>
          <Card.Text>
          {title}
          </Card.Text>
        </Card.Body>
      </Card>
     
    );
}

export default PageContent;