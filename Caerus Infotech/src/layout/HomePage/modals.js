import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const Modals = props => {
  const { className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button outline color="info" onClick={toggle} style={{ width: "100%" }}>
        Read More
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{props.title}</ModalHeader>
        <ModalBody>{props.content}</ModalBody>
        <ModalFooter>
          <Button outline color="info" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Modals;
