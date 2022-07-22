import React from 'react'
import { Card } from 'react-bootstrap'

import { Link } from 'react-router-dom'
import Rating from './Rating'

const Element = ({product}) => {
  console.log("first", product)
  return (
    <Card className=' my-3 p-3 rounded'>
        <Link to={`/product/${product.id}`}>
           <Card.Img src={product.image} variant='top'></Card.Img>
        </Link>
        

         <Card.Body>
           <Link to={`/product/${product.id}`}>
             <Card.Title as='div'>
                  <strong>{product.title}</strong>
             </Card.Title>
           </Link>
           

            <Card.Text as='div'>
                <Rating value={product?.rating?.rate} text={`${product?.rating?.count} reviews`} color ='#B2FFFF'/>
                
            </Card.Text>
            <Card.Text as='h3'>${product.price}</Card.Text>
         </Card.Body>



    </Card>
  )
}

export default Element