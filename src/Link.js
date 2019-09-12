import React from 'react';
import './App.css';

class Link extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      textLink: "Learn React",
      textUrl: "https://reactjs.org",
    }
  }
  
  componentDidMount() {
    console.log('mounted');
  }
  
  componentWillUnmount() {
    console.log('unmounted');
  }
  
  render() {
    return (
      <a
        className="App-link"
        href={this.state.textUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {this.state.textLink + this.props.count}
      </a>
    );
  }
}

export default Link;