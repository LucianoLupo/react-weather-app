
import React from 'react';
import ReactDOM from 'react-dom';




const Modal = ({children, onClose, open}) => {
    return (
        open ?
        <>
          {(
              ReactDOM.createPortal(
                  <>
                  {children}
                  </> ,
              document.getElementById('modal')
              )
          )}
        </>
        :
        null
    );
}

export default Modal;
