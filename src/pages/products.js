import * as React from "react"
import HeadNavbar from "../components/navbar"
import ProductCards from "../components/productCards"
import 'bootstrap/dist/css/bootstrap.min.css';

// styles

const styles = {
  header: {
    padding: '2%'
  }
}
// markup
const ProductsPage = () => {
    return (
      <main >
        <HeadNavbar></HeadNavbar>
        <div style={styles.header}>
          <h1  className="text-center">Products</h1>

          <ProductCards></ProductCards>

        </div>

      </main>
    )
  }

  export default ProductsPage