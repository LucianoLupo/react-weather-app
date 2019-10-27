

import styled from 'styled-components';

import { boxShadow, backgroundColor, primaryBackgroundGradient } from './stylesVariables'

export const AppContainer = styled.div`
    width:100vw;
    height:100vh;
    background-color: #f1f1f1;
    display: flex;
    align-items:center;
    justify-content: center;

    a{
        margin:10px
    }

`

export const Container = styled.div`
    width:fit-content;
    height:fit-content;
    background: ${backgroundColor};
    ${primaryBackgroundGradient}
    ${boxShadow}
`


export const InfoLinks = styled.div`
    position:fixed;
    width:100%
    top:0;
    display:flex;
    justify-content:space-between;
`