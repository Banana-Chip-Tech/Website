import React from "react";
import axios from "axios"
import Helmet from "react-helmet"
export default class RSSReader extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data:""
        }
    }

   render(){
       return(
           <div>
            <Helmet>
              <script src="https://www.twilik.com/assets/retainable/rss-embed/retainable-rss-embed.js"></script>
            </Helmet>
            <h1 style={{textAlign:"center"}}>Blog</h1>
            <div id="retainable-rss-embed" data-rss="https://bananachiptech.medium.com/feed"
            data-maxcols="2"
            data-layout="slider"
            data-poststyle="inline"
            data-readmore="Read the rest"
            data-buttonclass="btn btn-primary"
            ></div></div>


       )

   }
}
