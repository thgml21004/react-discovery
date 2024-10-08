import React from 'react'
import MainBanner from './main/MainBanner'
import Curation from './main/Curation'
import Newpd from './main/NewPd'
import Promotion from './main/Promotion'
import Recommend from './main/Recommend'
import Video from './main/Video'

function Main() {
    return (
        <>
            <MainBanner />
            <Curation />
            <Newpd />
            <Promotion />
            <Recommend />
            <Video />
        </>
    )
}

export default Main
