import React from 'react';
import { useState } from 'react';
import './Form.css';

  const Forms =(props) => {
      const [name,setName] = useState();
       const [cpf,setCpf] = useState();
       const [bday,setBday] = useState(); 
       const [email,setEmail] = useState();
       const [tell,setTell] = useState();
       const [password, setPassword] = useState(); 
      console.log({name})
    return(
      <div className="Tried">
      <form>
       <div className="form-editUser">
       <h1>Dados do Usuario </h1>
        <input name="name" placeholder="Nome completo" type="text"  />
        <input name="cpf" placeholder="CPF" type="number" />
        <input name="bday" placeholder="Data de nascimento" type="date" />
        </div>
        </form>
        <form> 
        <div className="changes">    
        <h2>Dados alteravais</h2>      
        <input name="email" placeholder="Email" type="mail"/>
        <input name="social" placeholder="Como deseja ser chamado" type="text"/>
        <input name="tell" placeholder="Telefone" type="number"/>
        <input name="password" placeholder="Alterar Senha" type="password" />
        </div>
        </form>
        <button>Salvar</button>


      </div>
    )
  };
   export default Forms;