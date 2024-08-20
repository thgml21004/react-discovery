import React from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';

import { Title } from '../styleComponent';


function NewPd() {
    return (
        <section id="new-product">
            <div className="container-1620">
                <Title>
                    <h3 className="more"><Link to="#">만나는 신상</Link></h3>
                </Title>
                <div className="item-wrap">
                    <Swiper
                            spaceBetween={12}
                            slidesPerView={4}
                            scrollbar={{
                                draggable: true,
                            }}
                            modules={[Scrollbar]} // Scrollbar 모듈 추가
                            className="mySwiper"
                        >
                        <SwiperSlide>
                            <Link to="#">
                                <span>
                                    <img src="img/newProductImg.png" className="img-fluid" alt="패딩 베스트" />
                                </span>
                                <p>마일즈 다운 패딩 베스트 <span>139,300원</span></p>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="#">
                                <span>
                                    <img src="img/newProductImg.png" className="img-fluid" alt="패딩 베스트" />
                                </span>
                                <p>마일즈 다운 패딩 베스트 <span>139,300원</span></p>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="#">
                                <span>
                                    <img src="img/newProductImg.png" className="img-fluid" alt="패딩 베스트" />
                                </span>
                                <p>마일즈 다운 패딩 베스트 <span>139,300원</span></p>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="#">
                                <span>
                                    <img src="img/newProductImg.png" className="img-fluid" alt="패딩 베스트" />
                                </span>
                                <p>마일즈 다운 패딩 베스트 <span>139,300원</span></p>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="#">
                                <span>
                                    <img src="img/newProductImg.png" className="img-fluid" alt="패딩 베스트" />
                                </span>
                                <p>마일즈 다운 패딩 베스트 <span>139,300원</span></p>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="#">
                                <span>
                                    <img src="img/newProductImg.png" className="img-fluid" alt="패딩 베스트" />
                                </span>
                                <p>마일즈 다운 패딩 베스트 <span>139,300원</span></p>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="#">
                                <span>
                                    <img src="img/newProductImg.png" className="img-fluid" alt="패딩 베스트" />
                                </span>
                                <p>마일즈 다운 패딩 베스트 <span>139,300원</span></p>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="#">
                                <span>
                                    <img src="img/newProductImg.png" className="img-fluid" alt="패딩 베스트" />
                                </span>
                                <p>마일즈 다운 패딩 베스트 <span>139,300원</span></p>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="#">
                                <span>
                                    <img src="img/newProductImg.png" className="img-fluid" alt="패딩 베스트" />
                                </span>
                                <p>마일즈 다운 패딩 베스트 <span>139,300원</span></p>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="#">
                                <span>
                                    <img src="img/newProductImg.png" className="img-fluid" alt="패딩 베스트" />
                                </span>
                                <p>마일즈 다운 패딩 베스트 <span>139,300원</span></p>
                            </Link>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default NewPd
