import React, { Component } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import Load from '../Loader/Loader';
import Modal from '../Modal/Modal';
import axios from 'axios';
import './App.css';

class App extends Component { 

state = {
  pictures: [],
  loading: false,
  error: null,
  query: '',
  page: 1,
  target: '',
  isOpen: false,
};

componentDidUpdate = (prevProps, prevState) => {

  const prevQuery = prevState.query;
  const nextQuery = this.state.query;

  if(prevQuery !== nextQuery) {
    this.getFetch();
  }

};
  
onSubmit = (query, page) => {

  this.setState({query: query, page: 1, pictures: []});

};

getFetch = () => {

  const {query, page} = this.state;
  this.setState({loading: true});

  axios.get(`https://pixabay.com/api/?key=18951897-f7110a11ebc58b866f93acf70&q=${query}&image_type=photo&page=${page}&orientation=horizontal&per_page=12`)
    .then(res => {
      this.setState(prevState => ({pictures: [...prevState.pictures, ...res.data.hits], page: prevState.page + 1}))
    })
    .catch(error => this.setState({ error }))
    .finally(() => this.setState({ loading: false })
  );
};

scroll = () => {

  const toScroll = document.documentElement.scrollHeight
  this.getFetch();
  window.scrollTo({
    top: toScroll,
    behavior: 'smooth'
  });

};

openModal = (el) => {

  this.setState({isOpen: true, target: el.largeImageURL});

};

onClick = () => {
  this.setState({isOpen: false, target: ""});
}

onClose = ({key}) => {
  if (key === "Escape") {
    this.onClick();
  }
};

render () {
    return (
      <>
      <Searchbar onSubmit={this.onSubmit} />
      <ImageGallery openModal={this.openModal} pictures={this.state.pictures} />
      {this.state.loading && <Load />}
      {this.state.pictures.length > 0 && !this.state.loading && <Button onClick={this.scroll}/>}
      {this.state.isOpen && <Modal onClick={this.onClick} onClose={this.onClose} target={this.state.target} />}
      </>
    )
  };
};

export default App;
