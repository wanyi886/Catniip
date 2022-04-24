import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { loadOneProduct } from '../../store/products'
import { addToCart, updateCount } from '../../store/cart'


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
  const cartData = useSelector(state => state.cart);
  const cartArray = Object.values(cartData)

  const handleClick = async () => {
    const targetItem = cartArray.find(item => item.id === product?.id)

    if (!targetItem) {
      await dispatch(addToCart(product?.id))
    } else {
      await dispatch(updateCount(product?.id, targetItem.count + 1 ))
    }
    history.push('/cart')
  }

  let component;

  if (product?.inventory < 1) {
    component = (
      <div className="product-detail-page-body">
      {/* <h1>Product Detail</h1> */}
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
            <h2 className="product-detail-out-of-stock">Out of Stock</h2>
          </div>
        </div>
      </div>

      <div className="reviews-area">
        <h1 className="review-h1">Reviews</h1>
        <div className="no-review">No Reviews for this product now</div>
      </div>
    </div>

    )
  } else {
    component = (
      <div className="product-detail-page-body">
      {/* <h1>Product Detail</h1> */}
      <div className="product-detail-info-area">
        <div className="product-img-container">
          <img
            src={`${product?.imgUrl}`}
            onError={(event) => {
              event.target.src = "/imgs/paw.png";
              event.onerror = null;
            }}
          />
        </div>
        <div className="non-image-container">
          <div className="product-detail-title">{product?.title}</div>
          <div className="product-detail-price">$ {product?.price}</div>
          <div className="product-detail-des">{product?.description}</div>
          <div className="product-detail-btn-container">
            <button onClick={handleClick} className="product-detail-cart-btn">
              <i class="fa-solid fa-cart-plus"></i>
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="reviews-area">
        <h1 className="review-h1">Reviews</h1>
        <div className="no-review">No Reviews for this product now</div>
      </div>
    </div>

    )
  }

  return component

}

export default ProductDetail;
