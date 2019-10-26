import styled from 'styled-components';

import { textColor, backgroundColor, primaryColor, backgroundGradient } from '../../stylesVariables'


export const Container = styled.div`
display: flex;
flex-direction: row;
justify-content:space-between;
padding: 20px;
border: 1px solid black;
background-color: #c1c1c1;
color:${textColor};

 p, h4 {
   margin: 0;
 }

 p {
   font-size:12px
 }

`;
