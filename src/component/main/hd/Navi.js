import React from 'react';
import menuData from '../../../data/menu.json'; // 메뉴 데이터의 경로
import { Link } from 'react-router-dom';

// 3단계 메뉴를 렌더링하는 컴포넌트

const Navi = () => {
    return (
        <ul className="gnb">
            {menuData.map((item, index) => (
                <li key={index}>
                    <Link to={`/${item.url}`}>{item.name}</Link>
                    {item.sub_menu && item.sub_menu.length > 0 && (
                        <div className="category-wrap">
                            <div className="container-1820">
                                <ul className="category-menu">
                                    {item["sub_menu"].map((item2, index2) => (
                                        <li key={index2}>
                                            <Link to={`/${item2.url}`}>{item2.name}</Link>
                                            {item2.sub_menu && item2.sub_menu.length > 0 && (
                                                <ul>
                                                    {item2["sub_menu"].map((item3, index3) => (
                                                        <li key={index3}>
                                                            <Link to={`/${item3.url}`}>{item3.name}</Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default Navi;
