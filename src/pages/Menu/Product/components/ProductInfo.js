import React from 'react';
import AddToCart from './AddToCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleQuestion,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import './ProductInfo.scss';

const ProductInfo = ({
  name,
  description,
  serving,
  cookTime,
  prepTime,
  spice,
  price,
}) => {
  return (
    <section className="productInfo">
      <div className="productContent">
        <h2 className="productDescription">{description}</h2>
        <h2 className="productTitle">{name}</h2>
        <p className="productOrigin">원산지 : 상품정보 참조</p>
      </div>

      <div className="productPrep">
        <p className="productAmount">{`${serving}인분`}</p>
        <p className="productTime">조리 {cookTime}분</p>
        <p className="productPreparation">준비 {prepTime}분</p>
        <FontAwesomeIcon icon={faCircleQuestion} className="questionIcon" />
        <p className="spiceLevel">
          {spice === true ? `${spice} 매운맛` : null}
        </p>
      </div>

      <div className="productDetail">
        <div className="priceBox">
          <h4 className="price">판매가</h4>
          <p className="productPrice">{price.toLocaleString()}원</p>
        </div>

        <div className="pointsBox">
          <h4 className="gray">포인트적립</h4>
          <div className="flex">
            <p>
              CJ ONE 포인트 <span className="yellow">0.2% 적립</span>
            </p>
            <FontAwesomeIcon icon={faCircleQuestion} />
          </div>
        </div>

        <div className="deliveryMethodBox">
          <h4 className="gray">배송방법</h4>
          <div className="flex">
            <p>새벽배송</p>
            <FontAwesomeIcon icon={faCircleQuestion} />
            <FontAwesomeIcon icon={faLocationDot} title="새창" />
            <p className="emphasize">배송가능여부 조회</p>
          </div>
        </div>

        <div className="deliveryPriceBox">
          <h4 className="gray">배송비</h4>
          <p>
            3,000원 <span className="lighter">4만원 이상 구매 시 무료배송</span>
          </p>
        </div>
      </div>

      <div className="cartSection">
        <AddToCart price={price} name={name} />
      </div>
    </section>
  );
};

export default ProductInfo;
