import * as React from "react"
import HeadNavbar from "../../../components/navbar"
import {Card,Accordion,Button,Container,Row,Col,ListGroup,Table} from "react-bootstrap"
import ModuleCard from "../../../components/ModuleCard"


// styles

// markup
const PythonPage = () => {
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
      <Accordion style={{margin:"1%"}} defaultActiveKey="0">
          <ModuleCard
          lessonNumber={1}
          lessonName="Introduction to python3"
          concepts={["What is programming?","What is a programming language?","What is python?","How to install python","Text Editors and IDEs for coding in python",]}
          lessonLink="https://www.youtube.com/embed/NaLtBvxNIPE"
          articles={[{name:"Introduction to Programming","link":"https://bananachiptech.medium.com/introduction-to-programming-dad44b524e05"}]}
          lessonReleaseDate={new Date(2021,6,11)}
          noHW={true}
        ></ModuleCard>
          <ModuleCard
          lessonNumber={2}
          lessonName="Input and Output"
          concepts={["Input","Output","Comments"]}
          lessonLink="https://www.youtube.com/embed/QZgGpCXGH54"
          hwvideo="https://www.youtube.com/embed/rRp4is2MExo"
          hw={[ <p>Write a program that prints hello world to the screen</p>,
            <p>Write a program that asks the user to input their name, age, and favorite food.</p>,
            <p>Write a program that asks the user for their name and prints it back out to the user.</p>,
            <p>Read information from the <a href="/HW1input.txt" download> input.txt</a> file. Display this information back out to the user.</p>
          ]}
          articles={[{name:"Input and Output","link":"https://bananachiptech.medium.com/dealing-with-input-and-output-in-python-e838f56fac90"},{"link":'https://bananachiptech.medium.com/input-and-output-practice-questions-6b22e961e03b',name:"Input/Output HW Solutions"}]}
          lessonReleaseDate={new Date(2021,6,11)}
          hwReleaseDate={new Date(2021,6,14)}
        ></ModuleCard>
          <ModuleCard
          lessonNumber={3}
          lessonName="Variables"
          concepts={["Basic Variable Types (int,float,boolean,char)","Data Structure Variable Types (string,list,tuple,dictionary)"]}
          lessonLink="https://www.youtube.com/embed/CsybBZ-TnSI"
          hwvideo="https://www.youtube.com/embed/w3wk6n_2eJY"
          hw={[<p>Ask the user for a number. Multiply the number by 10 and print it back out to the user</p>,
                <p>Ask the user for two numbers. Divide the first number by the second number and print out the result.</p>,
               <p>Ask the user for their name, age, and favorite food. Print out 1 message to the user with all of this information.</p>,
                <p>Ask the user for their year of birth. Calculate how old they are based on todays year. Return this result back out to the user</p>,
                <p>Ask the user for three numbers and make a list out of these numbers. Print out the resulting list.</p>,
                <p>Access the first and last element in a list and print it out to the screen. Make sure to test your code on lists of various sizes! Hint: <code>len(<em>your list variable</em>)</code> returns the number of elements in the list</p>,
                <div><p>Create a 10 element long list. Ask the user for a number between 1 and 10 and another number. Insert the second number into your created list at the position of the first number.</p>
                    <br></br>Example:
                    <br></br>
                    <code>
                    User Input: 3, 50<br></br>
                    samplestartinglist = [1,2,3,4,5,8,6,9,10]<br></br>
                    Program Output: [1,2,3,50,5,8,6,9,10]
                    </code>
                </div>
          ]}
          articles={[{name:"Basic Variable Types","link":"https://bananachiptech.medium.com/basic-variable-types-in-python-4a121326cfe4"},{"link":'https://medium.com/codex/data-structure-variable-types-666c837bec0f',name:"Data Structure Variable Types"}]}
          lessonReleaseDate={new Date(2021,6,11)}
          hwReleaseDate={new Date(2021,6,14)}
        ></ModuleCard>
        <ModuleCard
          lessonNumber={4}
          lessonName="Conditionals"
          concepts={["Conditional Statements (if/else/elif)"]}
          lessonLink="https://www.youtube.com/embed/PboWp9wgQsc"
          hwvideo="https://www.youtube.com/embed/z503pozNqgM"
          hw={[
            <p>Write a program that asks a user for their birthday (month day and year). Calculate how old the user is. Determine whether the user is an adult (18 years and older). Return your results to your user.</p>,
            <div><p>Write a program that creates three random numbers. Determine which number is the greatest and which number is the least. HINT: The following code snippet creates a random number.
            </p>
            <code>
            # Import the random module
            import random <br></br>

            # Use the random module to get a random number between 0 to 100.
            random.randint(0,100) <br></br>
            </code>
            </div>,
            <p>
            Write a program that presents 5 products with associated prices to the user. Have the user pick 2 products that they want to buy. Calculate the total cost for these products. Print out to the user the total cost of purchase.
            </p>,
            <div>BONUS QUESTION: The following three sequences come from the KRAS gene (https://www.ncbi.nlm.nih.gov/nuccore/NM_001369786.1?report=fasta).

              <code>
              GGCGGC
              TTTGCCATAAATAATACTAAATCATTT
              GAAACAAATTAATGAAGCTTTTGAATCATCCCTATTCTGTGTTTTATCTAGTCACATAAATGGATTAATT
              </code>

              Write a program that determine if the first three base pairs are equal to the last three base pairs for each sequence. Your code should be able to work on all test cases without modification. </div>,
              <div>
                <p>BONUS QUESTION: Using the following mRNA codon chart (https://www.shsu.edu/academics/agricultural-sciences-and-engineering-technology/documents/mRNAcodonchart.pdf), write a program that coverts a three base pair sequence to the corresponding an amino acid.
                </p>
                <p>Challenge: Can you do this without conditional statements?</p>
              </div>

          ]}
          articles={[{name:"Intro to Conditionals","link":"https://medium.com/codex/conditional-statements-in-python-c10ece3ef84"}]}
          lessonReleaseDate={new Date(2021,6,11)}
          hwReleaseDate={new Date(2021,6,14)}
        ></ModuleCard>

        <ModuleCard
          lessonNumber={5}
          lessonName="Loops"
          concepts={["While Loops","For Loops"]}
          lessonLink="https://www.youtube.com/embed/L2wxqzyoGlk"
          hwvideo="https://www.youtube.com/embed/zWAewXw6ITM"
          hw={[
                <p>Write a program that prints out a message until the user enters q.</p>,
                <p>Write a program that prints out "I like cheese" backwards. Challenge: Can you do this entire program in less than 3 lines of code? </p>,
                <div><p>Write a program that presents the user with 10 items and associated prices. Ask the user to pick 5 items. Calculate the total price of the items.</p>
                    <p>HINT: Using loops and some of the data structure type variables we talked about in previous lessons will make this program much easier! Be sure to check out the documentation for the data structures you use! There are some nifty functions that are super useful!</p>
                </div>,
                <div>
                      <p>Write a program that</p>
                      <ul>
                        <li>reads in the KRAS DNA sequence (found <a href="https://www.ncbi.nlm.nih.gov/nuccore/NM_004985.5?report=fasta">here</a>)</li>
                        <li>transcribes the DNA to mRNA</li>
                        <li>translates the mRNA sequence into a peptide chain</li>
                      </ul>
                     <p>Do this for all three reading frames. Assume that no processing of the mRNA occurs. Save your results to 3 files.
                     </p>
                     <p>HINT: The link provided links to the KRAS gene in the FAFSA file format on the NCBI website. Please note that the first line in FAFSA format contains a description of the sequence. For simplicity sake, delete this line in your file. Additionally, use this <a href="https://www.shsu.edu/academics/agricultural-sciences-and-engineering-technology/documents/mRNAcodonchart.pdf">mRNA codon chart </a>to translate the DNA. Finally, the following code segment will remove new lines in a string.
                     </p>
                    <code>striped_str = mystring.replace("\n","")</code>
                    </div>

          ]}
          articles={[{name:"Loops","link":"https://python.plainenglish.io/loops-in-python-9d32a9200bf1"}]}
          lessonReleaseDate={new Date(2021,6,11)}
          hwReleaseDate={new Date(2021,6,14)}
        ></ModuleCard>

        <ModuleCard
          lessonNumber={6}
          lessonName="Functions"
          concepts={["functions"]}
          lessonLink="https://www.youtube.com/embed/6t1-elfDQIA"
          hwvideo="https://www.youtube.com/embed/NHYhRcn3ILg"
          hw={[
            <p>Write a program using functions that takes in two numbers, multiplies them together, and prints the result back out to the user."</p>,
            <div><p>Write a program that uses functions to calculate any given number in the <a href="https://www.mathsisfun.com/numbers/fibonacci-sequence.html">Fibonacci sequence</a>.</p>
            <p>Is there a way to optimize this using a data structure that we talked about previously?</p></div>,
            <p>Write a function that takes in two lists. The first list contains the value of a card (2 through 10 and then Jack, Queen, King, Ace). The second list contains the suit of the card. Calculate the total value of the cards passed in. Face cards are worth 10 points each and Aces are worth 1 point. Return the results back out to where the function was called.</p>
          ]}
          articles={[{name:"Functions","link":"https://medium.com/codex/functions-in-python-71c8c120e853"}]}
          lessonReleaseDate={new Date(2021,6,11)}
          hwReleaseDate={new Date(2021,6,14)}
        ></ModuleCard>
        <ModuleCard
          lessonNumber={7}
          lessonName="Imports"
          concepts={["Modules","Packages"]}
          lessonLink="https://www.youtube.com/embed/eHQVpjseRg0"
          hwvideo="https://www.youtube.com/embed/qnSGzduH780"
          hw={[
            <p>Write a python program that generates 10 random numbers and prints them to the screen</p>,
            <div><p>Write a python program that prints the name of all of the files in the current folder.</p> HINT: You will have to google to find an appropriate <em>built in</em> module</div>,
            <p>BONUS: Use the <a href="https://pypi.org/project/pydealer/">Pydealer package</a> to simulate the game <a href="https://www.rockmusiclist.com/gyusef.htm">Yousef</a></p>,
          ]}
          articles={[{"name":"Packages","link":"https://python.plainenglish.io/handling-packages-in-python-b1b9d7d86291"},{"name":"Modules","link":"https://python.plainenglish.io/how-to-handle-modules-in-python-4c32357319b4"}]}
          lessonReleaseDate={new Date(2021,6,18)}
          hwReleaseDate={new Date(2021,6,21)}
        ></ModuleCard>
        <ModuleCard
          lessonNumber={8}
          lessonName="Classes"
          concepts={["Classes"]}
          lessonLink="https://www.youtube.com/embed/mw2yhAMKqGg"
          hwvideo=""
          hw={[
            <p>Create a python program that simulates the game of Yousef. Instructions as how to play the game can be found on this <a href="https://www.rockmusiclist.com/gyusef.htm">website </a></p>,
          ]}
          articles={[{"name":"Classes","link":"https://python.plainenglish.io/using-classes-in-python-9c53b4dc7e64"}]}
          lessonReleaseDate={new Date(2021,6,25)}
          hwReleaseDate={new Date(2021,6,28)}
        ></ModuleCard>

      </Accordion>

    </main>
  )
}

export default PythonPage
