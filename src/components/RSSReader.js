import React from "react";
import axios from "axios"
import {List} from "react-easy-blog-post"
import logo from '../images/UnnamedIcon.png'
import { Row,Col,Container} from "react-bootstrap";

export default class RSSReader extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data:[]
        }

    }

    componentDidMount(){
        axios.get("https://api.rss2json.com/v1/api.json?rss_url=http://bananachiptech.medium.com/feed").then(res =>{
            console.log(res["data"]["items"])
            res["data"]["items"].forEach(function(element, index, theArray) {
                let tmp = document.createElement("DIV");
                tmp.innerHTML = element["description"];
                var desc = tmp.textContent || tmp.innerText || "";
                desc = desc.substring(0,400) + "..."

                theArray[index] = {
                   author: element["author"],
                   category: "python",
                   title: element["title"],
                   date: element["pubDate"],
                   image:element["thumbnail"],
                   link: element["link"],
                   description: desc
                }

            })
            this.setState({data:res["data"]["items"]})



        })


    }

   render(){
       console.log(this.state.data)
       var rows = this.state.data.reduce(function (rows, key, index) {
        return (index % 2 == 0 ? rows.push([key])
          : rows[rows.length-1].push(key)) && rows;
      }, []);




       return(


            <Container>
                {this.state.data.map(elem =>{
                    return (<Row>
                    <Col><a  style={{textDecoration: "none"}}>
                        <List article={elem[0]} theme={{imagePosition: "left",width: "50%",
                    }} showCategory={true} />
                    </a>

                    </Col>
                    <Col>
                    <a style={{textDecoration: "none"}}><List article={elem[1]} theme={{imagePosition: "left",width: "50%",
                    }} showCategory={true} /></a>
                    </Col>

                </Row>)


               })}


            </Container>








       )

   }
}
