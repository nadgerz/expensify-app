import React from 'react';
import Modal from 'react-modal';


const OptionModal = ( props ) => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel={'Selected Option'}
    ariaHideApp={false}
  >
    <h3>Selected Option: {props.selectedOption}</h3>
  </Modal>

);

export default OptionModal;