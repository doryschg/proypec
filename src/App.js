import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Navegacion from './componentes/Navegacion';
import CrearForm from './componentes/CrearForm';

import {notas} from './notas.json'

class App extends Component {
  constructor()
  {
    super();
    this.state={
      notas
    };
    this.agregarNotas=this.agregarNotas.bind(this);
  }
agregarNotas(nota)
{
this.setState(
{
  notas: [...this.state.notas,nota]
})
}

eliminarNota(index){
  if(window.confirm('Estas seguro de eliminar'))
  {
    this.setState(
  {
    notas:this.state.notas.filter((e,i)=>{
      return i !== index
    })
  })
  }
  console.log('index');
}

  render(){
    const notas=this.state.notas.map((nota, i)=>{
      return(
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h3> {nota.titulo}</h3>
            </div>
            <div className="card-body">
            <p> {nota.nota}</p>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.eliminarNota.bind(this,i)}
                >
                Eliminar
              </button>
            </div>
          </div>
        </div>
        )
    })

  return (
    <div className="App">
      <Navegacion titulo="Notas" 
      tamaño={this.state.notas.length}/>
      <div className="container">
        <div className= "row mt-4">
          <div className="col-md-4 text-center">
          <CrearForm agregarNota={this.agregarNotas}/>
          </div>
          <div className="col-md-8">
            <div className="row">
              {notas}
            </div>
          </div>
        </div>
      </div>

      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}
}

export default App;
