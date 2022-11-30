import React, { useState } from 'react';
import HeadNavbar from "../components/navbar"
import RSSReader from "../components/RSSReader"
// styles
import ConvertKitForm from 'convertkit-react'
import {Button,Row,Col} from "react-bootstrap"
const MY_FORM_ID = 2649600

var bar = {
  position: 'fixed',
  padding: '1%',
  bottom: 0,
  backgroundColor: '#eeeeee',
  width:'100%'
}
// markup
const IndexPage = () => {
  const [show,setShow] = useState(true)
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
      {show ? <div style={bar}>
            <Row>
              <Col xs={6} md={10}> <p >We use cookies to enhance user experience in accordance with our <a href="/termsofservice">Terms of Service</a> and <a href="/privacypolicy">Privacy Policy</a>. </p></Col>
               <Col className="float-right"><Button onClick={() =>{setShow(false)}} variant='success'>I understand </Button></Col>
            </Row>

        </div> :<></>}

    </main>
  )
}

export default IndexPage
