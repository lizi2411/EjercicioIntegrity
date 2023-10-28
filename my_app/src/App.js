import './App.css';
import DataTable, { createTheme } from 'react-data-table-component';
import React,{useState} from 'react';



const data =[
  {
    id:1,
    nombre:"Francisco",
    edad:23
  },
  {
    id:7,
    nombre:"Pedro",
    edad:20
  },
  {
    id:9,
    nombre:"Maria",
    edad:17
  },
  {
    id:6,
    nombre:"Ana",
    edad:19
  },

  {
    id:3,
    nombre:"Roberto",
    edad:16
  }
]
const columns =[
  {
    name: 'ID',
    selector: row => row.id
  },
  {
    name: 'NOMBRE',
    selector: row => row.nombre
  },
  {
    name: 'EDAD',
    selector: row => row.edad
  }
]
createTheme('solarized', {
  text: {
    primary: '#222222',
    secondary: '#2aa198',
  },
  background: {
    default: '#bba9bb',
  },
  context: {
    background: '#cb4b16',
    text: '#FFFFFF',
  },
  divider: {
    default: '#073642',
  },
  action: {
    button: 'rgba(0,0,0,.54)',
    hover: 'rgba(0,0,0,.08)',
    disabled: 'rgba(0,0,0,.12)',
  },
}, 'dark');

function App() {
  

  return (
    <div className='App'>
       <div class="form-group">
        <h1>Login</h1>
        <form name='form'>
          <div  class="form-group">
            <label for="exampleInputEmail1">Usuario:<input  class="form-control" type="text" name="name" /> </label>
          </div>
          <div  class="form-group">
            <label  for="exampleInputPassword1">Contraseña:<input  class="form-control"type="text" name="name" /> </label>
          </div>
          <div>
            <input class="btn btn-primary" type="submit" value="Ingresar" />
          </div>
       
        </form>

      </div>
      <h1>Personas</h1>
      <DataTable 
        columns={columns}
        data={data}
        theme='solarized' />
     

    </div>
  

  );
}

export default App;
