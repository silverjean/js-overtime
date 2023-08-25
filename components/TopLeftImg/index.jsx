import Image from 'next/image'

import { ImageDiv } from './style'

const TopLeftImg = () => {
    return (
        <ImageDiv>
            <Image src="/top-left-img.png" width={400} height={400} />
        </ImageDiv>
    )
}

export default TopLeftImg
