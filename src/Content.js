import React, { Component } from 'react';
import { format } from 'path';

export default class Content extends Component {
  
  constructor() {
    super();
    this.state = {
      name: '',
      names: []
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({
      [e.target.name]: e.target.value 
    })
  }

  onSubmit(e){
    e.preventDefault();
    let list = this.state.names
    list.push({ name: this.state.name })
    this.setState({
      names : list
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label for="name">Nombre</label>
          <input
          type="text"
          name="name"
          id="name"
          onChange={this.onChange}
          /><br/>
          <button>Enviar</button>
        </form>
        <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
            Mostrando el nombre: {this.state.name}
            List names
            <ul>
            {
              this.state.names.map(elem=>{ 
                return(<li>{elem.name}</li>) 
              })
            }
            </ul>
        </p>
      </div>
    );
  }
}
