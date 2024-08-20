import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../img/logo.svg'

function Header() {
    return (
        <div id="header">
            <div className="container-1820 inner">
                <h1 className="logo"><a href="/"><img src={logo} alt="디스커버리 로고" /></a></h1>
                <ul className="gnb">
                    <li><Link to="/">MEN</Link></li>
                    <li><Link to="/">WOMEN</Link></li>
                    <li><Link to="/">SHOES</Link></li>
                    <li><Link to="/">ACC</Link></li>
                    <li><Link to="/">KIDS</Link></li>
                </ul>
                <ul className="promotion-menu">
                    <li><Link to="/">OUTLET</Link></li>
                    <li><Link to="/">PROMOTION</Link></li>
                    <li><Link to="/">LAUNCHES</Link></li>
                    <li><Link to="/">ON VACATION</Link></li>
                    <li><Link to="/">TREND</Link></li>
                </ul>
                <ul className="icon-menu">
                    <li>
                        <div className="search-wrap">
                            <input type="text" placeholder="검색어를 입력해주세요." />
                            <img src="/img/icon-search.png" alt="검색" />
                        </div>
                    </li>
                    <li><img src="/img/icon-cart.png" alt="장바구니" /></li>
                    <li><img src="/img/icon-mypage.png" alt="마이페이지" /></li>
                </ul>
            </div>
        </div>
    )
}

export default Header
