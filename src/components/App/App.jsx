import React, { Component } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import axios from 'axios';
import './App.css';

class App extends Component { 

state = {
  query: "",
  page: 1,
  pictures: []
};

componentDidUpdate = (prevProps, prevState) => {
  const prevQuery = prevState.query;
  const nextQuery = this.state.query;

  if(prevQuery !== nextQuery) {
    this.getFetch();
  }
};
  
onSubmit = (query, page) => {

  this.setState({query: query, page: page});

};

getFetch = () => {

  const {query, page} = this.state;

  axios.get(`https://pixabay.com/api/?key=18951897-f7110a11ebc58b866f93acf70&q=${query}&image_type=photo&page=${page}&orientation=horizontal&per_page=12`)
  .then(res => this.setState({pictures: res.data.hits}));

};

render () {
    return (
      <>
      <Searchbar onSubmit={this.onSubmit} />
      <ImageGallery pictures={this.state.pictures} />
      </>
    )
  };
};

export default App;
