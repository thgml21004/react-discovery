import React from 'react'
import { Title } from '../styleComponent'
import { Link } from 'react-router-dom'

function Curation() {
    return (
        <section id="curation">
            <div className="row container-1620 inner">
                <Title className="col-xl-4">
                    <h3>당신만을 위한<br />
                        스타일 추천 스타일 큐레이션</h3>
                    <p>나와 비슷한 사용자들은 어떤 스타일에<br />
                        관심이 있는지, 사용자가 처한 상황에 따라<br />
                        어떤 스타일을 매치할 수 있는지 맞춤 추천을<br />
                        기반으로 제공</p>
                </Title>
                <div className="col-xl-8 row product-wrap">
                    <div className="col-xl-6 main">
                        <Link to="#">
                            <span><b>쾌적하고 가벼운 착용감</b>#바람막이 #패커블</span>
                            <img src="img/curationMainImg.jpg" alt="쾌적하고 가벼운 착용감" />
                        </Link>
                    </div>
                    <div className="col-xl-6 row item-wrap">
                        <div className="col-6">
                            <Link to="#">
                                <span>
                                    <img src="img/curationImgOuter.png" alt="바람막이" />
                                </span>
                            </Link>
                            <p>경량 패커블 포켓 배색 바람막이</p>
                        </div>
                        <div className="col-6">
                            <Link to="#">
                                <span>
                                    <img src="img/curationImgBottom.png" alt="하의" />
                                </span>
                            </Link>
                            <p>디테쳐블 루즈 카고팬츠</p>
                        </div>
                        <div className="col-6">
                            <Link to="#">
                                <span>
                                    <img src="img/curationImgShoes.png" alt="운동화" />
                                </span>
                            </Link>
                            <p>고프코어 트레킹V</p>
                        </div>
                        <div className="col-6">
                            <Link to="#">
                                <span>
                                    <img src="img/curationImgBag.png" alt="가방" />
                                </span>
                            </Link>
                            <p>아웃도어 슬링백</p>
                        </div>
                    </div>
                </div>
            </div>        
        </section>
    )
}

export default Curation
