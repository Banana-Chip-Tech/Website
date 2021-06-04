import * as React from "react"
import HeadNavbar from "../../../components/navbar"
import {Card,Accordion,Button} from "react-bootstrap"

// styles




// markup
const CodingPage = () => {


  return (
    <main>
      <HeadNavbar></HeadNavbar>
      <div className="bg-light p-5 rounded-lg m-3">
        <h1 className="display-4">Python Crash Course</h1>

        <hr className="my-4"></hr>
        <p>
          The Python Crash Course is a free multivideo tutorial that teaches the basics of python programming.
          Topics covered in the course include variables, conditionals, loops, functions, classes, and tips for debugging.
          Each lesson is described below and the video playlist for this course can be accessed on <a href='https://www.youtube.com/watch?v=QZgGpCXGH54&list=PLsisEWxVRoyhEfXIsGJzFx2Xse7tQ3GGf'>YouTube</a>.
        </p>
      </div>
      <Accordion style={{margin:"1%"}}>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Lesson 1: Introduction to python3
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>

            Topics Covered in this lesson
            <ul>
              <li>What is programming?</li>
              <li>What is a programming language?</li>
              <li>What is python?</li>
              <li>How to install python</li>
              <li>Text Editors and IDEs for coding in python</li>
            </ul>
            <br></br>
            <iframe title="Lesson1" width="420" height="315" src="https://youtu.be/NaLtBvxNIPE"> </iframe>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
             Lesson 2: Input and Output
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
            Topics Covered in this lesson
              <ul>
                <li>Input</li>
                <li>Output</li>
              </ul>
              <br></br>
              <iframe title="Lesson2" width="420" height="315" src="https://www.youtube.com/watch?v=QZgGpCXGH54"> </iframe>

            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
             Lesson 3: Variables
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
            Topics Covered in this lesson
              <ul>
                <li>Basic Variable Types
                  <ul>
                    <li>int</li>
                    <li>float</li>
                    <li>boolean</li>
                    <li>char</li>
                  </ul>
                </li>
                <li>Data Structure Variable Types
                  <ul>
                      <li>string</li>
                      <li>list</li>
                      <li>set</li>
                      <li>tuple</li>
                      <li>dictionary</li>
                    </ul>
                </li>
              </ul>
              <br></br>
              <iframe title="Lesson3" width="420" height="315" src="https://www.youtube.com/watch?v=CsybBZ-TnSI"> </iframe>

            </Card.Body>
          </Accordion.Collapse>
        </Card>
        {/*<Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
             Lesson 4
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
             Lesson 5
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
             Lesson 6
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
             Lesson 2
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
             Lesson 2
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
             Lesson 2
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>*/}
      </Accordion>






    </main>
  )
}

export default CodingPage
