import styled from 'styled-components';

import { textColor, backgroundColor, primaryColor, backgroundGradient } from '../../stylesVariables'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: ${backgroundColor};
  color:${textColor}

`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  border: 1px solid black;
  background-color: ${backgroundColor};

  h1{
      margin: 5px
  }
  h3{
      font-size:16px
      font-weight: 300;
      margin:0;
      padding-left:10px;
      margin-botom:5px;
  }
`;
export const Info = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    padding: 0;
    border: 0px solid black;
    border-radius: 5px;
    margin-top:10px
    
    ${backgroundGradient}
    align-items:center;
    
    color:${textColor}

    h3 {
        margin: 5px
    }

`

export const Temperature = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0;
    align-items: center;

    h1 , h3 {
        margin: 5px
    }
    h1 {
        font-size:40px;
    }
`

export const TemperatureData = styled.div`
    display: flex;
    flex-direction: row;
    height:fit-content
    h1 , h3 {
        margin: 5px
        
    }
    h1 {
        font-size:40px;
    }
`
export const Data = styled.div`
    width:50%;
    display: flex;
    flex-direction: column;
    padding: 0;

    h3 {
        margin: 5px
        font-weight: 300;

    }
`

