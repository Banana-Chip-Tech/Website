import * as React from "react"
import HeadNavbar from "../components/navbar"


// styles


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




    </main>
  )
}

export default IndexPage
