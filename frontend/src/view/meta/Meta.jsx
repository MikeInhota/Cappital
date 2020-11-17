import React, { Component, PureComponent } from 'react';
import './meta.css';
import {  PieChart, Pie, Legend, Tooltip,} from 'recharts';

const data01 = [
  { name: 'Salario', value:25}, { name: 'Saldo', value:5 },
  { name: 'Gastos', value:  25}, 
  { name: 'Meta', value:20  },
 ];



export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/k9jkog04/';
  

   mudarGrafico(datao1){
 console.log(data01)
   }

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
    this.props.mudarGrafico(this.state)
      }
  render() {
    return (
      <>
      <section>
        <data01 mudarGrafico={this.mudarGrafico.bind(this)}/>
      </section>
    <section>
    <div className='Charts'>
        {data01.map(data01 =><data01 value={data01.value}/>)}
        
        <h1>Meta de Gastos</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
        <input name="salario" placeholder="Salario" type="number" onChange={this.handleChangeSalario.bind(this)}/>
        <input name="meta" placeholder="Meta" type="number" onChange={this.handleChangeMeta.bind(this)}/>
        <input name="gastos" placeholder="Gastos" type="number" onChange={this.handleChangeGastos.bind(this)}/>
        <input name="saldo" placeholder="Saldo" type="number" onChange={this.handleChangeSaldo.bind(this)}/>
        <button>Salvar</button>
        </form>
      <PieChart width={400} height={400}>
      <Pie dataKey={this.props.value} isAnimationActive={false} data={data01} cx={200} cy={200} outerRadius={80} fill=" #0B3073" label />
      <Tooltip />
      </PieChart>
      </div>
      </section>
      </>
    );
  }
}
