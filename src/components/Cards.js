import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "./Cards.css";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Pies from './Pies';
import Scatters from "./Scatter";


function Cards() {
  return (
    
    <CardGroup className='card-group'>
      <Card>
        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
        <Card.Body className='card-one' >
          <Card.Title className='card-title'>Our progress over a month</Card.Title>
          {/* <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text> */}
          <h6 className='progress-statement'>Basic</h6>
          <ProgressBar striped variant="success" now={40} />
          <h6 className='progress-statement'>Medium</h6>
          <ProgressBar striped variant="info" now={20} />
          <h6 className='progress-statement'>Pro</h6>
          <ProgressBar striped variant="warning" now={60} />
          <h6 className='progress-statement'>Total increase from previous month</h6>
          <ProgressBar striped variant="danger" now={80} />
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card >
        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
        <Card.Body className="card-two">
          <Card.Title>Our Stats across the country</Card.Title>
          
          <Pies/>
          {/* <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text> */}
          
          
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
        <Card.Body className="card-three">
          <Card.Title className='card-title'>Increase in our Investors over the week</Card.Title>
         <Scatters/>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default Cards;