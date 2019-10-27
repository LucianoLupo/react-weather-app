import React from 'react'

import { FullPageContainer, Background } from './block-page.styles';
import Loading from '../loading/Loading';

const BlockPage = () => {
    return(
        <FullPageContainer>
            <Background/>
            <Loading/>
        </FullPageContainer>
    )
}

export default BlockPage