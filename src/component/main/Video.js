import React from 'react'

import { Title } from '../styleComponent';
import { Link } from 'react-router-dom';

function Video() {
    return (
        <section id="Video">
            <div className="container-1620">
                <Title>
                    <h3 className="more"><Link to="#">봄에 생기를 담은 바람막이 룩</Link></h3>
                </Title>                
                <div className="item-wrap">
                    <Link to="#">
                        <iframe width="1620" height="500" src="https://www.youtube.com/embed/sEEquonVXHk" title="여유롭고 자신 있게, 나다운 여정의 시작 ㅣ 디스커버리 24SS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Video
