import React from 'react';
import '../Footer/Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faPhone } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
  return (
    <footer id="footer">
      <div className="footerWrap">
        <div className="footerContent">
          <div className="footerLeft">
            <div className="logo">
              <img
                className="namba1"
                src="/images/logo/namba1_logo.png"
                alt="namba1"
              />
            </div>
          </div>
          <div className="footerCenter">
            <div className="footerMenu">
              <p>이용약관 </p>
              <p>개인정보처리 방침</p>
              <p>법적고지 </p>
              <p>사업자정보 확인 </p>
            </div>
            <div className="footerInfo">
              <div className="footerInfoContent">
                <div className="infoContent1">
                  <p>NAMBAWAN CORPORATION</p>
                  <p>대표이사 : 최현민, 임한구, 박주영, 천은별, 김혜수</p>
                </div>
                <div className="infoContent2">
                  <p>주소 : 서울 중구 동호로 330 CJ제일제당 센터 (우) 04560</p>
                  <p>통신판매업신고 중구 제 07767호</p>

                  <p>개인정보보호책임자 : 류화정</p>
                </div>
                <div className="infoContent3">
                  <p>이메일 : nambawan@gmail.com </p>
                  <p>호스팅제공자 : NAMBAWAN(주) </p>
                </div>
                <div className="infoContent4">
                  <p>
                    고객님은 안전거래를 위해 현금등으로 결제시 LG U+ 전자 결제의
                    매매보호(에스크로) 서비스를 이용하실 수 있습니다.
                  </p>
                  <br />
                </div>
                <span>가입 사실 확인</span>
                <p className="copyright">
                  © NAMBAWAN CORP. ALL RIGHTS RESERVED.
                </p>
              </div>
            </div>
          </div>
          <div className="footerRight">
            <div className="cjGroup">
              <span className="cjGroupText">
                CJ그룹계열사 바로가기
                <div className="icon1">
                  <FontAwesomeIcon icon={faAngleDown} />
                </div>
              </span>
              <div className="cjGroupInfo">
                <span className="cjGroupCs">고객행복센터</span>
              </div>
              <div className="icon2">
                <FontAwesomeIcon icon={faPhone} />
                <span className="cjGroupCsNumber">1688-1920</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
