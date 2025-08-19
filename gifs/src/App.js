import React, { Component } from "react";
import "./App.css";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

class App extends Component {
  state = {
    keyword: "animal",
    count: 24,
  };

  onSearch = (keyword) => {
    this.setState({ keyword, count: 24 });
  };

  addGifs = () => {
    this.setState((prevState) => ({ count: prevState.count + 24 }));
  };

  render() {
    return (
      <>
        <GifSearch onSearch={this.onSearch} />
        <GifList keyword={this.state.keyword} count={this.state.count} />
        <button className="load-more" onClick={this.addGifs}>
          click
        </button>
      </>
    );
  }
}

export default App;
