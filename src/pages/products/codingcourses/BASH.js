import * as React from "react"
import HeadNavbar from "../../../components/navbar"

import ModuleCard from "../../../components/Module"
import {Card,Accordion,Button,Container,Row,Col,ListGroup} from "react-bootstrap"

// styles

/*const video_release_dates = {
  h1: new Date(6,9,2022)
}
const today = new Date()


// Based off of https://stackoverflow.com/questions/60764233/how-to-optimize-this-if-else-block-to-compare-date-in-simple-react-app
function compareDateWithoutTime(dateA, dateB) {
  let date1 = new Date(dateA);
  let date2 = new Date(dateB);
  date1.setHours(0, 0, 0, 0);
  date2.setHours(0, 0, 0, 0);
  return date2.getTime() - date1.getTime();
}
*/



// markup
const CodingPage = () => {

  return (
    <main>
      <HeadNavbar></HeadNavbar>
      <div className="bg-light p-5 rounded-lg m-3">
        <h1 className="display-4">BASH for Biomedical Research</h1>

        <hr className="my-4"></hr>
        <p>

          Each lesson is described below and the video playlist for this course can be accessed on <a href='https://www.youtube.com/watch?v=QZgGpCXGH54&list=PLsisEWxVRoyhEfXIsGJzFx2Xse7tQ3GGf'>YouTube</a>.
        </p>
      </div>
      <Accordion style={{margin:"1%"}}defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Lesson 1: Introduction to BASH
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
            <h3 style={{textAlign:"center"}}>Lesson 1 Resources</h3>
              <Container>
                <Row style={{paddingBottom:"2%"}}>
                  <Col >{/*<iframe width="560" height="315" src="https://www.youtube.com/embed/NaLtBvxNIPE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  */}<p>Video lecture coming soon! Be sure to subscribe to our <a href='https://www.youtube.com/watch?v=QZgGpCXGH54&list=PLsisEWxVRoyhEfXIsGJzFx2Xse7tQ3GGf'>YouTube</a> channel to get the latest news on video releases.</p></Col>
                  <Col style={{margin:"1.5%"}}>
                  <p>This lesson introduces the following BASH concepts!</p>
                  <ul>
                    <li>What is BASH?</li>
                    <li>Why is it useful for Biomedical Research?</li>
                  </ul>

                  <p>Refer to the following resources for written tutorials!</p>
                  <ListGroup>
                    <ListGroup.Item >
                    <a href="https://medium.com/codex/introduction-to-bash-for-biomedical-research-part-1-3-cf7b512ade2a">Introduction to BASH</a>
                    </ListGroup.Item>

                  </ListGroup>
                  </Col>
                </Row>
                </Container>

            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <ModuleCard
          lessonNumber={2}
          lessonName="Paths and Basic Commands"
          concepts={["Paths","Basic Commands"]}
          lessonLink=""
          hwvideo=""
          hw={[
            <p>Starting from your HOME directory, navigate to your Desktop. Print out all of the files on your Desktop.</p>,
            <p>Copy a file from one location on your computer to another.</p>,
          ]}
          articles={[{"name":"Paths and Basic Commands","link":"https://medium.com/codex/introduction-to-bash-for-biomedical-research-part-2-3-62daa725fe53"}]}
          lessonReleaseDate={new Date(2021,6,25)}
          hwReleaseDate={new Date(2021,6,28)}
        />
         <ModuleCard
          lessonNumber={3}
          lessonName="Scripts and Popular Programs"
          concepts={["Scripts","Popular Programs"]}
          lessonLink=""
          hwvideo=""
          hw={[
            <p>Write a simple BASH script prints out hello world. Be sure to test and run the script.</p>,
            <p>Download one of the command line programs talked about in this tutorial. Try to write a script that uses the program.</p>
          ]}
          articles={[{"name":"Paths and Basic Commands","link":"https://medium.com/codex/introduction-to-bash-for-biomedical-research-part-2-3-62daa725fe53"}]}
          lessonReleaseDate={new Date(2021,6,25)}
          hwReleaseDate={new Date(2021,6,28)}
        />
        </Accordion>






</main>
)
}

export default CodingPage