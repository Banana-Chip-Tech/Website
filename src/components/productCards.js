import React from "react"
import { Card,CardGroup,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/UnnamedIcon.png'

export default class ProductCards extends React.Component{
    render(){
        return (
            <CardGroup>
                <Card className="text-center" style={{ width: '18rem' ,alignItems: 'center',justifyContent: 'center'}}>
            <Card.Img style={{ width: '18rem' }} variant="top" src={logo} />
            <Card.Body>
              <Card.Title>Genetic Schedule Picker</Card.Title>
              <Card.Text>
                The schedule picker program uses a Genetic Algorithm to schedule <i>m</i> group leaders into groups with <i>n</i> total members.
              </Card.Text>
              <Button variant="primary" href="https://geneticschedulepicker.herokuapp.com">View Product</Button>
            </Card.Body>
          </Card>
          <Card className="text-center" style={{ width: '18rem' ,alignItems: 'center',justifyContent: 'center'}}>
            <Card.Img  style={{ width: '18rem' }} variant="top" src={logo} />
            <Card.Body>
              <Card.Title>BioTech Coding Crash Courses</Card.Title>
              <Card.Text>
                Join us for biotech coding crash courses! Click below to see a full list of
                courses offered.
              </Card.Text>
              <Button variant="primary" href="/products/codingcourses">View Courses</Button>
            </Card.Body>
          </Card>

            </CardGroup>

        )
    }
}