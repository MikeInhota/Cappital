import React, { PureComponent } from 'react';
import './meta.css';
import {  PieChart, Pie, Legend, Tooltip,} from 'recharts';

const data01 = [
  { name: 'Salario', value: 40 }, { name: 'Saldo', value:10 },
  { name: 'Gastos', value: 300 }, 
{ name: 'Meta', value: 0 }, ];

const grafico= data01.map((value,index)=>({
 value:"" ,
 name:"",
}));

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/k9jkog04/';
  state = {
    Salario: [],
    Gastos: [],
    Metas: [],
    Saldo: [],
  }
  render() {
    return (<div className='Charts'>
        <h1>Meta de Gastos</h1>
        <form>
        <input name="salario" placeholder="Salario" type="number" />
        <input name="meta" placeholder="Meta" type="number" />
        <input name="gastos" placeholder="Gastos" type="number" />
        <input name="saldo" placeholder="Saldo" type="number" />
        </form>
        <button>Salvar</button>
      <PieChart width={400} height={400}>
       <Pie dataKey="value" isAnimationActive={false} data={data01} cx={200} cy={200} outerRadius={80} fill=" #0B3073" label />
       <Tooltip />
      </PieChart></div>
      
    );
  }
}
