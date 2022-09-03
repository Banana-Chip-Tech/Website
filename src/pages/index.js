import * as React from "react"
import HeadNavbar from "../components/navbar"
import RSSReader from "../components/RSSReader"
import Helmet from "react-helmet"
// styles
import ConvertKitForm from 'convertkit-react'

const MY_FORM_ID = 2649600

// markup
const IndexPage = () => {


  return (
    <main >
      <HeadNavbar></HeadNavbar>
      <div className="bg-light p-5 rounded-lg m-3">
        <h1 className="display-4">Banana Chip Tech</h1>
        <p className="lead">Optimizing Healthcare through Computational Means</p>
        <hr className="my-4"></hr>
        <p>Banana Chip Tech is dedicated to improving healthcare through computational means. Check out our list of available products!</p>
        <a className="btn btn-primary btn-lg" href="products" role="button">Products</a>
      </div>
      <RSSReader style={{width:"100%"}}></RSSReader>
      <div style={{marginLeft:'25%',alignItems:"center"}}>
      <ConvertKitForm formId={MY_FORM_ID}  template="Mills"/>
      </div>







    </main>
  )
}

export default IndexPage
