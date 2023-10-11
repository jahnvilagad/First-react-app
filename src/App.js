import React from 'react';

import './App.css';

class App extends React.Component() {
  
  blogobj = {
    title: 'Blog Title 1'
  }

  style = {
    color: 'red',
    fontSize: '2rem'
  }


   btnclick = () => {
    alert('click');
  }

  render () {
    return (
      <div className="App">
      <div style={style}>
        <h3>{blogobj.title}</h3>
        <button onClick={btnclick}>Hide</button>
      </div>
    </div>
    );
  }

}

export default App;
