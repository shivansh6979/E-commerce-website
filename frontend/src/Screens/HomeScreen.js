import React from 'react'
import products from '../products'
import { Row, Col} from 'react-bootstrap'
import Element from '../Components/Element'
import { useState,useEffect} from 'react'
import axios from 'axios'

const HomeScreen = () => {

  const [products,setProducts] =useState([])

  useEffect(() =>{
    const fetchProducts = async () =>{
    const {data} = await axios.get('https://fakestoreapi.com/products')
      setProducts(data)
    }
       fetchProducts()
  },[])

console.log('products',products)
  return (
    <>
    <h1>Latest Products</h1>
    <Row>
         {products.map(product =>{ 
            return(
            <Col sm={12} mg={6} lg={4} xl={3}>
              <Element product={product}/>
            </Col>
         )})}

    </Row>

    </> 
  )
}

export default HomeScreen