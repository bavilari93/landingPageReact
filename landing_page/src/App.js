import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'


class App extends Component {
  constructor(){
    super();
    this.state={
      mode:''
    }
  }

  modeChange(mode){
   this.setState({
    mode:mode
   })
  }

  renderView(mode){
    console.log(mode);
    if(mode === 'portafolio'){
      console.log('porttafolio')
    }else if(mode === 'about'){
      console.log('about')
    }else if(mode === 'contact'){
      console.log('contact')
    }else{
      console.log('ts')
    }
  }

  render() {
    return (
      <div className="container">
      <Nav
      modeChange={this.modeChange.bind(this)}/>
        {this.renderView(this.state.mode)}
      </div>
    );
  }
}

export default App;
