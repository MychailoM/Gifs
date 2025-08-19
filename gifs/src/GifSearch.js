import React, {Component} from "react";

class GifSearch extends Component{
  state = {
    inputValue: "",    
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.setState.inputValue)
  }

  onChange = (e) => {
    this.setState({inputValue: e.target.value})
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="Пошук"
          value={this.state.inputValue}
          onChange={this.onChange}
        />
        <button type="submit"></button>
      </form>
    )
  }
}

export default GifSearch