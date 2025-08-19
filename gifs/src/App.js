import React, {Component} from 'react';
import './App.css';
import GifList from './GifList';
import GifSearch from './GifSearch';

class App extends Component{

  state = {
    keyword: 'dog',
    count: 12,
  }

  onSearch = (keyword) => {
    this.setState({keyword})
  }

  addGifs = (prevState) => {
    this.setState({count: prevState + 12})
  }

  render() {
    return (
      <>
        <GifSearch onSearch={this.onSearch} />
        <GifList keyword={this.state.keyword} />  
        <button onClick={this.addGifs}>click</button>
      </>
    );
  }
}

export default App;


