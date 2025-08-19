import React, { Component } from "react";
import axios from 'axios';

class GifList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifsArr: [],
      page: props.page,
      keyword: props.keyword,
    };
  }
  //https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${limit}&lang=en
  async fetchGifs(keyword, page) {
    try {
      const apiUrl = "https://api.giphy.com/v1/gifs/search?";
      const apiKey = "1Xuto0LkLNqJaIQKUqPKW8Bw2xLcjyT7";
      const res = await axios.get(`${apiUrl}api_key=${apiKey}&q=${keyword}&limit=${page}&lang=en`);
      this.setState({gifsArr: res.data.data})
    } catch (error) {
      console.error("Error");
    }
  }

  componentDidMount() {
    this.fetchGifs(this.state.keyword, this.state.page);
  }

  componentDidUpdate(prevState) {
    if (prevState.keyword !== this.state.keyword || prevState.page !== this.state.page) {
      this.fetchGifs(this.state.keyword, this.state.page);
    }
  }

  render() {
    const { gifsArr } = this.state;
    return (
      <ul>
        {gifsArr.map((gif) => (
          <li key={gif.id}>
            <img src={gif.images.fixed_height.url} alt={gif.title} />
          </li>
        ))}
      </ul>
    );
  }
}
export default GifList;
