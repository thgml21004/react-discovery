import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import { Link } from 'react-router-dom';

import { Title, TabList } from '../styleComponent';

function Recommend() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <section id="Recommend">
            <div className="container-1620">
                <div className="d-flex justify-content-between align-items-center">
                    <Title>
                        <h3>이번주 추천 키워드</h3>
                    </Title>
                    <TabList>
                        <li>데일리자켓</li>
                        <li>트레이닝셋업</li>
                        <li className="active">러닝/워킹화</li>
                        <li>바람막이</li>
                        <li>코어텍스자켓</li>
                        <li>하이킹슈즈</li>
                        <li>반팔티</li>
                    </TabList>
                </div>                
                <div className="row item-wrap">
                    <div className="col-md-10 item">
                        <Swiper
                                className="reSwiper"
                                slidesPerView="1"
                                modules={[Thumbs]}
                                thumbs={{ swiper: thumbsSwiper }}
                                direction="vertical"
                            >
                            <SwiperSlide>
                                <Link to="#">
                                    <img src="./img/keywordMainImg.png" alt="조거 플렉스" />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to="#">
                                    <img src="./img/keywordSample.png" alt="조거 플렉스" />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to="#">
                                    <img src="./img/keywordMainImg.png" alt="조거 플렉스" />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to="#">
                                    <img src="./img/keywordSample.png" alt="조거 플렉스" />
                                </Link>
                            </SwiperSlide>
                        </Swiper>                        
                    </div>
                    <div className="col-md-2 item-list">
                        <Swiper
                                className="thumbsSwiper"
                                direction="vertical"
                                spaceBetween={20}
                                slidesPerView="auto"
                                loop={true}
                                modules={[Thumbs]}
                                onSwiper={setThumbsSwiper}
                                watchSlidesVisibility={true}
                                watchSlidesProgress={true}
                            >
                            <SwiperSlide>
                                <Link to="#">
                                    <img src="./img/keywordProductImg.png" alt="상품명" className="img-fluid-y" />
                                    <span>조거 플렉스</span>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to="#">
                                    <img src="./img/keywordProductImg.png" alt="상품명" className="img-fluid-y" />
                                    <span>조거 플렉스</span>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to="#">
                                    <img src="./img/keywordProductImg.png" alt="상품명" className="img-fluid-y" />
                                    <span>조거 플렉스</span>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to="#">
                                    <img src="./img/keywordProductImg.png" alt="상품명" className="img-fluid-y" />
                                    <span>조거 플렉스</span>
                                </Link>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Recommend
