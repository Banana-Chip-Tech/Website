import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Accordion,Button,Container,Row,Col,ListGroup} from "react-bootstrap"
import { useAccordionButton } from 'react-bootstrap/AccordionButton'

const style ={
  color: "white"
}

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log('totally custom!'),
    );

    return (
      <button
        type="link"
        style={{ backgroundColor: 'pink' }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }

export default class Test extends React.Component{
   render() {
        var todays_date = new Date()
        return(
            <Card>
          <Card.Header>
            <CustomToggle eventKey={this.props.lessonNumber - 1}>
             Lesson {this.props.lessonNumber}: {this.props.lessonName}
            </CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey={this.props.lessonNumber - 1}>
          <Card.Body>
          <h3 style={{textAlign:"center"}}>Lesson {this.props.lessonNumber} Resources</h3>
          <Container>

                <Row style={{paddingBottom:"2%"}}>
                  <Col >
                  {this.props.lessonReleaseDate.getTime() <= todays_date.getTime() ?

                  <iframe style={{margin:"1.5%"}} width="560" height="315" src={this.props.lessonLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  : <p>Video lecture coming soon! Be sure to subscribe to our <a href='https://www.youtube.com/watch?v=QZgGpCXGH54&list=PLsisEWxVRoyhEfXIsGJzFx2Xse7tQ3GGf'>YouTube</a> channel to get the latest news on video releases.</p>
                  }
                  </Col>
                  <Col style={{margin:"1.5%"}}>
                  <p>This lesson introduces the following python concepts!</p>
                  <ul>
                    {this.props.concepts.map((elem) =>{
                        return(<li>{elem}</li>)
                    })}
                  </ul>

                  <p>Refer to the following resources for written tutorials!</p>
                  <ListGroup>
                      {this.props.articles.map( (elem) =>{
                            return(<ListGroup.Item >
                                <a href={elem["link"]}>{elem["name"]}</a>
                            </ListGroup.Item>)

                      })}



                  </ListGroup>
                  </Col>
                </Row>
                </Container>

        {this.props.noHW ? <div></div> : <div><h3 style={{textAlign:"center"}}>Homework {this.props.lessonNumber-1} </h3>
        <Container>
          <Row>
            <Col>
            <ListGroup>
                   {this.props.hw.map((elem) =>{
                       return(<ListGroup.Item>
                           {elem}
                       </ListGroup.Item>)
                   })}

            </ListGroup>
            </Col>
            <Col >
            {this.props.hwReleaseDate.getTime() <= todays_date.getTime() ?
             <iframe style={{margin:"1.5%"}} width="560" height="315" src={this.props.hwvideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            :   <p style={{margin:"1.5%"}}>HW video coming soon! Be sure to subscribe to our <a href='https://www.youtube.com/watch?v=QZgGpCXGH54&list=PLsisEWxVRoyhEfXIsGJzFx2Xse7tQ3GGf'>YouTube</a> channel to get the latest news on video releases.</p>        }

             </Col>
          </Row>
        </Container> </div>}
        </Card.Body>

          </Accordion.Collapse>
        </Card>)


     }
}