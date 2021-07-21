import * as React from "react"
import HeadNavbar from "../../components/navbar"
import {Card,Button,CardGroup} from "react-bootstrap"
import logo from '../../images/ProductImage.png'
import logo2 from '../../images/bfbmr.png'

import 'bootstrap/dist/css/bootstrap.min.css';
// styles




// markup
const CodingPage = () => {


  return (
    <main>
      <HeadNavbar></HeadNavbar>
      <div className="bg-light p-5 rounded-lg m-3">
        <h1 className="display-4">Coding Crash Courses</h1>

        <hr className="my-4"></hr>
        <p>Banana Chip Tech firmly believes that the future of healthcare depends on the successful integration of computation into healthcare delivery.
         To achieve this goal, Banana Chip Tech has created a series of courses targeted towards science students that aim to provide an introduction to important biotech coding concepts.
        </p>
      </div>
     <CardGroup>
      <Card className="text-center" style={{ width: '18rem' ,alignItems: 'center',justifyContent: 'center',margin:'1%'}}>
           <Card.Img style={{ width: '18rem' }} variant="top" src={logo} />
            <Card.Body>
              <Card.Title>Python Crash Course</Card.Title>
              <Card.Text>
                Join Banana Chip Tech for our video course on python programming!
              </Card.Text>
              <Button variant="primary" href="/products/codingcourses/python">View Course</Button>
            </Card.Body>
      </Card>

     <Card className="text-center" style={{ width: '18rem' ,alignItems: 'center',justifyContent: 'center',margin:'1%'}}>
           <Card.Img style={{ width: '18rem' }} variant="top" src={logo2} />
            <Card.Body>
              <Card.Title>BASH for Biomedical Research</Card.Title>
              <Card.Text>
                Join Banana Chip Tech for our course on using BASH for scientific research!
              </Card.Text>
              <Button variant="primary" href="/products/codingcourses/BASH">View Course</Button>
            </Card.Body>
      </Card>
  </CardGroup>





    </main>
  )
}

export default CodingPage
