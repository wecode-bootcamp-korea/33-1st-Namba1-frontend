import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faCircleQuestion,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import './Product.scss';
import AddToCart from './AddToCart';

const Product = () => {
  return (
    <div className="product">
      <section className="productImages">
        <img
          className="bigImage"
          src="/images/menu/sweetPumpkinCreamPasta.jpg"
          alt="Sweet Pumpkin Cream Pasta"
        />
        <div className="smallImages">
          <FontAwesomeIcon icon={faChevronLeft} className="chevronIcon" />
          <img
            className="smallImage"
            src="/images/menu/sweetPumpkinCreamPasta1.jpg"
            alt="cream pasta"
          />
          <img
            className="smallImage"
            src="/images/menu/sweetPumpkinCreamPasta2.jpg"
            alt="cream pasta"
          />
          <img
            className="smallImage"
            src="/images/menu/sweetPumpkinCreamPasta3.jpg"
            alt="cream pasta"
          />
          <img
            className="smallImage"
            src="/images/menu/sweetPumpkinCreamPasta4.jpg"
            alt="cream pasta"
          />
          <img
            className="smallImage"
            src="/images/menu/sweetPumpkinCreamPasta5.jpg"
            alt="cream pasta"
          />
          <FontAwesomeIcon icon={faChevronRight} className="chevronIcon" />
        </div>
      </section>
      <section className="productSection">
        <div className="productContent">
          <h2 className="productDescription">
            단호박을 직접 으깨어 만든 파스타
          </h2>
          <h2 className="productTitle">단호박크림파스타</h2>
          <p className="productOrigin">원산지 : 상품정보 참조</p>
        </div>
        <div className="productPrep">
          <p className="productAmount">3인분</p>
          <p className="productTime">조리 40분</p>
          <p className="productPreparation">준비 15분&nbsp;</p>
          <FontAwesomeIcon icon={faCircleQuestion} />
        </div>
        <div className="productDetail">
          <div className="priceBox">
            <h4 className="price">판매가</h4>
            <p className="productPrice">21,800원</p>
          </div>
          <div className="pointsBox">
            <h4 className="gray">포인트적립</h4>
            <div className="flex">
              <p>
                CJ ONE 포인트 <span className="yellow">0.2% 적립&nbsp;</span>
              </p>
              <FontAwesomeIcon icon={faCircleQuestion} />
            </div>
          </div>
          <div className="deliveryMethodBox">
            <h4 className="gray">배송방법</h4>
            <div className="flex">
              <p>새벽배송&nbsp;</p>
              <FontAwesomeIcon icon={faCircleQuestion} />
              &nbsp;&nbsp;
              <FontAwesomeIcon icon={faLocationDot} title="새창" />
              &nbsp;
              <p className="emphasize">배송가능여부 조회</p>
            </div>
          </div>
          <div className="deliveryPriceBox">
            <h4 className="gray">배송비</h4>
            <p>
              3,000원{' '}
              <span className="lighter">4만원 이상 구매 시 무료배송</span>
            </p>
          </div>
        </div>
        <div className="cartSection">
          <AddToCart />
        </div>
      </section>
      <div className="top">TOP</div>
    </div>
  );
};

export default Product;
