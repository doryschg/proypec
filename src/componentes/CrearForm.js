import React, {Component} from 'react';

class CrearForm extends Component  {
  
 constructor()
  { 
super();
this.state={
  titulo:'',
  nota:''
};
this.administrarInput=this.administrarInput.bind(this);
this.administrarSubmit=this.administrarSubmit.bind(this);
}

administrarInput(e){
const {value,name}=e.target;
this.setState({
  [name]:value
})
console.log(this.state);
}

administrarSubmit(e)
{
e.preventDefault();
this.props.agregarNota(this.state);
console.log('enviando datos');

}

  render() {

    return (
      <div className="card">
        <form className="card-body" onSubmit={this.administrarSubmit}>
          <div className="form-group">
            <input
            type="text"
            name="titulo"
            onChange={this.administrarInput}
            className="form-control"
            placeholder="Titulo"
            />
          </div>
          <div className="form-group">
            <textarea
            name="nota"
            className="form-control"
            onChange={this.administrarInput}
            placeholder="Escribe la nota......................."
            />
          </div>
         
          <button type="submit" className="btn btn-primary">
            Agregar
          </button>
        </form>
      </div>
    )
  }

  }

export default CrearForm;