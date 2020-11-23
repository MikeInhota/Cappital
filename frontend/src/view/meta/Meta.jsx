import React, { Component, PureComponent } from 'react';
import './meta.css';
import {  PieChart, Pie, Legend, Tooltip,} from 'recharts';

export default class Example extends PureComponent{
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/k9jkog04/';
  constructor(props){
    super(props)
    this.state = [
    {name: 'Salario',value:25}, { name: 'Saldo', value:5 },
      { name: 'Gastos' ,value: 5}, 
      { name: 'Meta', value :2},
      { name: 'saldo' ,value:20 },
     ];
     }
     filter(state){
      this.setState({filter: state})
  }
   /*mudarGrafico(datao1){
 console.log(data01)
   }*/

 handleChangeSalario(event){
  this.setState({Salario: event.target.value,})
  }
handleChangeMeta(event){
  this.setState({Meta: event.target.value,})
  }
handleChangeGastos(event){
  this.setState({Gastos: event.target.value,})
  }
handleChangeSaldo(event){
  this.setState({Saldo: event.target.value,})
  }
  handleSubmit(event){
    event.preventDefault()
    /*this.props.mudarGrafico(this.state)*/
      }
      render() {
        return (
      <>
      <section>
        <data01 mudarGrafico={this.mudarGrafico.bind(this)}/>
      </section>
    <section>
    <div className='Charts'>
        
        
        <h1>Meta de Gastos</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
        <input name="salario" placeholder="Salario" type="number" onChange={this.handleChangeSalario.bind(this)}/>
        <input name="meta" placeholder="Meta" type="number" onChange={this.handleChangeMeta.bind(this)}/>
        <input name="gastos" placeholder="Gastos" type="number" onChange={this.handleChangeGastos.bind(this)}/>
        <input name="saldo" placeholder="Saldo" type="number" onChange={this.handleChangeSaldo.bind(this)}/>
        <button>Salvar</button>
        </form>
      <PieChart width={400} height={400}>
      <Pie dataKey={this.props.value} isAnimationActive={false} data={this.props.value.bind(this)}data01={this.props.name.bind(this)} cx={200} cy={200} outerRadius={80} fill=" #0B3073" label />
      <Tooltip />
      </PieChart>
      </div>
      </section>
      </>
    );
  }
}

                
