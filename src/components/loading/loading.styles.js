

import styled from 'styled-components';
import { animated } from 'react-spring';

export const Block =  styled(animated.div)`
    width: 10px;
    height: 30px;
    background: black;
    margin: 5px;
    will-change: transform;
`;

export const Container =  styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    color: black;
    background: transparent;
`;

