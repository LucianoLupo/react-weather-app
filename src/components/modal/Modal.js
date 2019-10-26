
import React from 'react';
import ReactDOM from 'react-dom';

import Loading from '../loading/Loading';
import { FullPageContainer, Background } from './modal.styles';

const Content = () => {
    return(
        <FullPageContainer>
            <Background/>
            <Loading/>
        </FullPageContainer>
    )
}

const Modal = ({children, onClose, open}) => {
    return (
        open ?
        <>
          {(
              ReactDOM.createPortal(
                  <Content/>,
              document.getElementById('modal')
              )
          )}
        </>
        :
        null
    );
}

export default Modal;
