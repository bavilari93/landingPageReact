import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import Display from './components/Display'
import Item from './components/Item'
import About from './components/About'
import Form from './components/Form'

class App extends Component {
  constructor(){
    super();
    this.state={
      mode:'', 
      photoData:[], 
      project:[]
    }
  }

  componentDidMount(){
      fetch('https://api.unsplash.com/photos/?page=22&per_page=6&query=flatlay&client_id=a697a3f1971a87feb8280b49b969dfed2c0e03a803128d24f47dc7aa18a95909' )
      .then(res => res.json())
      .then(data =>{
          this.setState({
            photoData: this.parsedResults(data)
          })
        })
      .catch(err =>{
        console.log('error in gettin data', err)
      });
  }

  parsedResults(data){
    console.log(data)
    return data.filter(img =>{
      return img.urls? true : false
    }).map(url =>{
      return{
        small: url.urls.regular
      }
    })
  }
  projectDisplay(data){
    this.setState({
      project: data,
      mode:'project'
    })
    console.log(data)
  }

  modeChange(mode){
   this.setState({
    mode:mode
   })
  }

  renderView(mode){
    if(mode === 'about'){
     return(<About/>)
    }else if(mode === 'contact'){
      return(
        <Form/>)
    }else if(mode === 'project'){
      return(
        <Item
        url={this.state.project}
        />)
    }else{
      return(
        <Display
        data={this.state.photoData}
        project={this.projectDisplay.bind(this)}
        />)
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
