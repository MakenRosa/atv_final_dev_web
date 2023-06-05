import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function ModalComponent({ title, children, buttonLabel, buttonVariant }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant={buttonVariant} onClick={handleShow}>
        {buttonLabel}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
}

export default ModalComponent;
