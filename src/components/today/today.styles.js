import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: #c1c1c1;

`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  border: 1px solid black;
  background-color: #c7c7c7;

  h1 , h3 {
      margin: 5px
  }
`;

export const Temperature = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0;
    border: 1px solid black;
    background-color: #5c5c5c;

    h1 , h3 {
        margin: 5px
    }
`

export const Data = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0;
    border: 1px solid black;
    background-color: #5c5c5c;

    h3 {
        margin: 5px
    }
`

export const Info = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    padding: 0;
    border: 1px solid black;
    background-color: #5c5c5c;

    h3 {
        margin: 5px
    }
`