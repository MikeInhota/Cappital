import React from "react";
import { Modal, Button } from "react-bootstrap";
import RadioButton from "../../Components/RadioButton/RadioButton";
import Label from '../../Components/Label/label';
import InputText from "../../Components/InputText/inputText";

const titulo = 'entrada'
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
        <div>
        <form>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <InputText id="inputEntrada" name="inputEntrada" value="Digite o valor"/>
              <InputText id="inputEntrada" name="inputEntrada" value="Digite o valor"/>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
                <RadioButton id="Entrada" name="Entrada" value="Entrada"/>
                <Label for="Entrada" label="entrada"/><br/>
            </div>
            <div className="col-sm">
                <RadioButton id="Saida" name="Saida" value="Saida"/>
                <Label for="Saida" label="Saida"/>
            </div>
          </div>
        </div>
        </form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Gravar</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalBalance;
