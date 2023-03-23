import React,{useContext} from 'react'
import { ProductsContext } from '../context/Products'

function FeaturedProducts() {
    let products = useContext(ProductsContext)
    console.log(products)
  return (
    <div>FeaturedProducts</div>
  )
}

export default FeaturedProducts