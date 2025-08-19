import React, { Component } from "react";
import axios from "axios";
import './GifList.css'

const Loader = () => {
  return (
    <div className="LoaderOverlay">
      <div className="Spinner"></div>
    </div>
  );
};

class GifList extends Component {
  state = {
    gifsArr: [],
    loading: false,
  };

  async fetchGifs(keyword, count) {
    this.setState({ loading: true });
    try {
      const apiUrl = "https://api.giphy.com/v1/gifs/search?";
      const apiKey = "1Xuto0LkLNqJaIQKUqPKW8Bw2xLcjyT7";
      const res = await axios.get(`
        ${apiUrl}api_key=${apiKey}&q=${keyword}&limit=${count}&lang=en
        `);
      this.setState({ gifsArr: res.data.data });
    } catch (error) {
      console.error("Error", error);
    } finally {
      this.setState({ loading: false });
    }
  }

  componentDidMount() {
    this.fetchGifs(this.props.keyword, this.props.count);
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.keyword !== this.props.keyword ||
      prevProps.count !== this.props.count
    ) {
      this.fetchGifs(this.props.keyword, this.props.count);
    }
  }

  render() {
    const { gifsArr, loading } = this.state;
    return (
      <>
        {loading && <Loader />}

        <ul className="list">
          {gifsArr.map((gif) => (
            <li className="item" key={gif.id}>
              <img src={gif.images.fixed_height.url} alt={gif.title} />
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default GifList;