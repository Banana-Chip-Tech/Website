import * as React from "react"
import HeadNavbar from "../../../components/navbar"
import {Accordion} from "react-bootstrap"
import ModuleCard from "../../../components/Module"

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
        <h1 className="display-4">Python Crash Course</h1>

        <hr className="my-4"></hr>
        <p>
          The Python Crash Course is a free course that teaches the basics of python programming.
          Topics covered in the course include variables, conditionals, loops, functions, classes, and tips for debugging.
          Each lesson is described below and the video playlist for this course can be accessed on <a href='https://www.youtube.com/watch?v=QZgGpCXGH54&list=PLsisEWxVRoyhEfXIsGJzFx2Xse7tQ3GGf'>YouTube</a>.
        </p>
      </div>
      <Accordion style={{margin:"1%"}} defaultActiveKey="2">
          <ModuleCard
          lessonNumber={0}
          lessonName="Why BASH"
          concepts={[""]}
          lessonLink=""
          hwvideo=""
          hw={[
            <p>Create a python program that simulates the game of Yousef. Instructions as how to play the game can be found on this <a href="https://www.rockmusiclist.com/gyusef.htm">website </a></p>,
          ]}
          articles={[{"name":"Modules","link":"https://python.plainenglish.io/how-to-handle-modules-in-python-4c32357319b4"},{"name":"Classes","link":"https://python.plainenglish.io/using-classes-in-python-9c53b4dc7e64"}]}
          lessonReleaseDate={new Date(2021,6,18)}
          hwReleaseDate={new Date(2021,6,21)}

          />
           <ModuleCard
          lessonNumber={1}
          lessonName="Basics of BASH"
          concepts={[""]}
          lessonLink=""
          hwvideo=""
          hw={[
            <p>Create a python program that simulates the game of Yousef. Instructions as how to play the game can be found on this <a href="https://www.rockmusiclist.com/gyusef.htm">website </a></p>,
          ]}
          articles={[{"name":"Modules","link":"https://python.plainenglish.io/how-to-handle-modules-in-python-4c32357319b4"},{"name":"Classes","link":"https://python.plainenglish.io/using-classes-in-python-9c53b4dc7e64"}]}
          lessonReleaseDate={new Date(2021,6,18)}
          hwReleaseDate={new Date(2021,6,21)}

          />
           <ModuleCard
          lessonNumber={2}
          lessonName="Basics of BASH"
          concepts={[""]}
          lessonLink=""
          hwvideo=""
          hw={[
            <p>Create a python program that simulates the game of Yousef. Instructions as how to play the game can be found on this <a href="https://www.rockmusiclist.com/gyusef.htm">website </a></p>,
          ]}
          articles={[{"name":"Modules","link":"https://python.plainenglish.io/how-to-handle-modules-in-python-4c32357319b4"},{"name":"Classes","link":"https://python.plainenglish.io/using-classes-in-python-9c53b4dc7e64"}]}
          lessonReleaseDate={new Date(2021,6,18)}
          hwReleaseDate={new Date(2021,6,21)}

          />
      </Accordion>






</main>
)
}

export default CodingPage