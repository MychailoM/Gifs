import './GifSearch.css'
import React, { Component } from "react";

class GifSearch extends Component {
  state = {
    inputValue: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state.inputValue);
  };

  onChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    return (
      <header className="header">
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Пошук"
            value={this.state.inputValue}
            onChange={this.onChange}
            className='input'
          />
          <button className='button' type="submit">Search</button>
        </form>
      </header>
    );
  }
}

<<<<<<< HEAD
export default GifSearch;
=======
export default GifSearch
>>>>>>> b47bfd8be668708cd8d9b34c0bd8f200b6ea529f
