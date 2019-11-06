import React from 'react';
// import Modal from 'react-bootstrap/Modal';
import ReactModal from 'react-modal';
import './ModalTry.css';

class ExampleApp extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    const { showModal } = this.state;
    return (
      <div>
        <button type="button" onClick={this.handleOpenModal}>
          Trigger Modal
        </button>
        <ReactModal isOpen={showModal} contentLabel="Minimal Modal Example">
          <button type="button" onClick={this.handleCloseModal}>
            Close Modal
          </button>
        </ReactModal>
      </div>
    );
  }
}

export default ExampleApp;
