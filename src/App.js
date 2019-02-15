import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    posts: []
  }

  handleErrors = (response) => {
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response;
  }

  

  componentDidMount() {
    fetch('https://pfc.xxr.mybluehost.me/wp-json/wp/v2/posts/1')
    // .then(this.handleErrors)
    .then(response => response.json() )
    .then(response => { 
      this.setState({ posts: this.state.posts.concat(response) });
      console.log()
    })
    .catch(function(error) {
      console.log('There has been a problem with your fetch operation: ', error.message);
    });
  }

  renderPostTitle = () => {
    return this.state.posts.map( post => {
      console.log(post)
      return(
        <p key={post}>Title: {post.title.rendered} </p>
      )
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello World! This is a test! one more Test
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <main id='post'>
            {this.renderPostTitle()}
        </main>
      </div>
    );
  }

  
}

export default App;
