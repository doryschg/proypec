import React, {Component} from 'react';

class Navegacion extends Component  {
  render()
  {
  	return (

  	  <nav className="navbar-dark bg-dark">
      <a href="" className="text-white">
      {this.props.titulo}
      <span className="badge badge-pill badge-light ml-2">
       {this.props.tamaño}
      </span>
      </a>
      
      </nav>
  	);
}
}

export default Navegacion;
