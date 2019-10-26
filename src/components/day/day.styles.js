import styled from 'styled-components';
import { textColor, backgroundColor, primaryColor, backgroundGradient } from '../../stylesVariables'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  padding: 0;
  background-color: #c1c1c1;
  border-radius:5px;
  text-align:center;
  margin:5px;
  color:${textColor};
  ${backgroundGradient}
`;

export const MaxMinContainer = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  padding:5px;
`

export const MaxMin= styled.div`
  display:flex;
  flex-direction:column;
  
  p , h4 {
    margin:0;
  }
  p{
    font-size: 12px;
  }
  h4{
    font-size: 14px;
  }
`

