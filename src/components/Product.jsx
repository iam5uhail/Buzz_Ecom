import React from 'react'
import Link from 'next/link'

import { urlFor } from '../../lib/client'

const Product = ({ product }) => {
  const imgUrl = urlFor(product.image[0]).url()
  return (
    <div>
      <Link href={`/product/${product.slug.current}`}>
        <div className='product-card'>
          <img src={imgUrl} width={250} height={250} className='product-image' />
          <p className='product-name'>
            {product.name}
          </p>
          <p className='product-price'>
            ${product.price}
          </p>
        </div>
      </Link>
    </div>
  )
}

export default Product