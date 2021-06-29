import React from "react";
import axios from "axios"
import { Button} from "react-bootstrap";

const style = {
    textstyle: {
        textAlign: "center"
    },
    divstyle:{
        paddingLeft: "5%",
        paddingRight: "5%",
        paddingTop: "3%",
        justifyContents:"center",
        alignItems: "center"

    },
    flexer : {
        display: 'flex',
        flexDirection: 'row'
    },

    img:{
        maxWidth:"250px",
        maxHeight:"250px"
    },
    button:{
        paddingRight:"4%",
        paddingLeft:"4%",

    },


}
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
                desc = desc.substring(0,125) + "..."

                theArray[index] = {
                   author: element["author"],
                   category: element["categories"].join(", "),
                   title: element["title"],
                   date: element["pubDate"],
                   image:element["thumbnail"],
                   link: element["link"],
                   description: desc,
                   key: index
                }

            })
            this.setState({data:res["data"]["items"].splice(0,10)})



        })


    }

   render(){


       return(
        <div >
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <Button href="https://bananachiptech.medium.com" style={style.button} size="lg" variant="outline-dark">Blog</Button>{' '}
        </div>
        <div style={style.divstyle}>
        {this.state.data.map(e =>{
            return (
                <div class="card flex-row flex-wrap" style={{marginBottom:"2%"}}>
                    <div class="card-header border-0 i">
                        <img style={style.img} src={e["image"]} alt=""></img>
                    </div>
                <div class="card-block px-4" style={{padding:"2%"}}>
                    <a style={{color:"black"}} href={e["link"]}><h4 class="card-title">{e["title"]}</h4></a>
                    <span class="card-text">
                    {e["description"]}

                    </span>

                </div>
                <div class="w-100">

                </div>
                <div class="card-footer w-100 text-muted">
                    {e["category"]}
                </div>
            </div>



            )
        })}
        </div>
        </div>




       )

   }
}
