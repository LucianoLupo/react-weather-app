import styled from 'styled-components';

import { textColor } from '../../stylesVariables'


export const Container = styled.div`
display: flex;
flex-direction: row;
justify-content:space-between;
padding: 20px;


`;


export const City = styled.div`
cursor:pointer;
padding: 10px;

color:${textColor};

 p, h4 {
   margin: 0;
 }

 p {
   font-size:12px
 }

`