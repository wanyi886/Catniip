import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { loadOneProduct } from '../../store/products'
import { addToCart, updateCount } from '../../store/cart'
import Reviews from '../Reviews'

import './ProductDetail.css';

function ProductDetail () {
  const dispatch = useDispatch();
  const history = useHistory();


  const { id } = useParams();

  useEffect(() => {
    dispatch(loadOneProduct(id))

  }, [dispatch])


  const productPageData = useSelector(state => state.productsState)
  const product = productPageData[id];
  // console.log("product in product detail", product)
  const reviews = product?.Reviews
  // console.log("reviews in product detail", reviews)

  const cartData = useSelector(state => state.cart);
  const cartArray = Object.values(cartData)


  const handleClick = async () => {
    const targetItemInCart = cartArray.find(item => item.id === product?.id)

    if (!targetItemInCart) {
      dispatch(addToCart(product?.id))
    } else {

      if (targetItemInCart.count + 1 > product?.inventory ) {

        dispatch(updateCount(product?.id, product?.inventory ))
      } else {
        dispatch(updateCount(product?.id, targetItemInCart.count + 1 ))

      }

    }
    history.push('/cart')
  }

  return (
      <div className="product-detail-page-body">

      <div className="product-detail-info-area">
        <div className="product-img-container">
          <img src={`${product?.imgUrl}`}/>
        </div>
        <div className="non-image-container">
          {/* <div>Product Id: {product?.id}</div> */}
          <div className="product-detail-title">{product?.title}</div>
          <div className="product-detail-price">$ {product?.price}</div>
          <div className="product-detail-des">{product?.description}</div>
          <div className="product-detail-btn-container">
            {product?.inventory < 1?
            ( <h2 className="product-detail-out-of-stock">Out of Stock</h2> ) :
            ( <button onClick={handleClick} className="product-detail-cart-btn">
                <i class="fa-solid fa-cart-plus"></i>
                  Add to Cart
              </button>
            )
            }
          </div>
        </div>
      </div>
      <Reviews productId={id}/>
    </div>

    )


}

export default ProductDetail;
