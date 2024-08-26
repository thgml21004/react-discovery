import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div id="footer">
            <div className="container-1820">
                <div className="about-wrap d-flex justify-content-between align-items-center">
                    <ul className="d-flex justify-content-between align-items-center">
                        <li><Link to="#">ABOUT DISCOVERY</Link></li>
                        <li><Link to="#">공지사항</Link></li>
                        <li><Link to="#">고객센터</Link></li>
                        <li><Link to="#">매장안내</Link></li>
                    </ul>
                    <ul className="sns d-flex justify-content-between align-items-center">
                        <li><a href="#"><img src="./img/snsInstaBtn.png" alt="인스타그램" /></a></li>
                        <li><a href="#"><img src="./img/snsYoutubeBtn.png" alt="유튜브" /></a></li>
                        <li><a href="#"><img src="./img/snsFaceBtn.png" alt="페이스북" /></a></li>
                    </ul>
                </div>
                <div className="company-wrap">
                    <h2>(주) 에프앤에프 </h2>
                    <p>대표: 김창수 / 서울특별시 강남구 언주로 541 에프앤에프빌딩 <i></i> 사업자 등록번호: 153-81-02451 <i></i> 사업자정보 확인 <i></i> 통신판매업 신고번호 : 제2021-서울강남-03353호 <i></i> 개인정보보호 책임자 : 류영석</p>
                    <p>교환・반품 반송처 : 경기도 이천시 대월면 초지리 57 F&F 물류센터 디스커버리 물류부</p>
                    <p>고객센터 : 080-820-8802 / 운영시간 : 평일 오전 9시 ~ 오후 6시(토/일/공휴일 휴무)</p>
                    <ul className="d-flex justify-content-start align-items-center">
                        <li><a href="#">이용약관</a></li>
                        <li><a href="#">개인정보처리방침</a></li>
                        <li><a href="#">KCP안전구매서비스 기업</a></li>
                    </ul>
                    <p className="copyright">Copyright © F&F Corp. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
