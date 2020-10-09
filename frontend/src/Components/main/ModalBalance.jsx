import React from "react";
import { Modal, Button } from "react-bootstrap";

const ModalBalance = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Inserir movimentação
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <form>
          <input TYPE="RADIO" NAME="OPCAO" VALUE="op1">opção1</input>
          <input TYPE="RADIO" NAME="OPCAO" VALUE="op2">opção2</input>
        </form> */}
        <p>Teste Formulário que quebra apagina ¬¬  </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalBalance;
