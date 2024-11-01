import React, {Component} from 'react';
import TabelaBody from './components/TabelaBody';
import TabelaHead from './components/TabelaHead';
import TabelaFoot from './components/TabelaFoot';
import { render } from '@testing-library/react';


class App extends Component {
  state = {
    livros:[]
  }
  //montagem do componente
  componentDidMount(){
    fetch("/api/livros.json")
    .then(response => response.json())
    .then(livros => this.setState({livros}))
    .catch(function(error){
      console.log("Erro na requisição");
      window.alert("erro fudido")
    })

    .finally(function(){
      console.log("Requisição finalizada - sempre retorna")
    });
    
  }

  handleOrdemCrescente = (titulo) =>{
    const livrosCrescentes = [...this.state.livros].sort((a,b) => {
      if (a[titulo] > b[titulo]) return 1;
      if (a[titulo] < b[titulo]) return -1; 
    })
    this.setState({livros: livrosCrescentes})
  }

  handleOrdemDecrescente = (titulo) =>{
    const livrosdecrescente = [...this.state.livros].sort((a,b) => {
      if (a[titulo] > b[titulo]) return -1;
      if (a[titulo] < b[titulo]) return 1; 
    })
    this.setState({livros: livrosdecrescente})
  }

  handleRemoverLinha = (id) =>{
    const livros = this.state.livros.filter(livro => livro.id !== id)
    this.setState({livros});
  };

  render(){
    return (
      <table className='tabela'>
        <TabelaHead
        organizarTabelaCrescente = {this.handleOrdemCrescente} 
        organizarTabelaDecrescente = {this.handleOrdemDecrescente}/>
        <TabelaBody 
        livros ={this.state.livros}
        
        removerLinha = {this.handleRemoverLinha}/>
        
        <TabelaFoot qdelivros = {this.state.livros.length}/>
      </table>
    );
  }
}
  
export default App;