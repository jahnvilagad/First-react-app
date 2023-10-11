import React from 'react';

import BlogItem from './BlogCard';

import { isArrayEmpty } from './Utills';

import './App.css';

function App() {

  const blogArr = [
    {
      id: '1',
      title: 'Blog Title 1',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      id: '2',
      title: 'Blog Title 2',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      id: '3',
      title: 'Blog Title 3',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }
  ]

  const blogCards = isArrayEmpty(blogArr) ? [] : blogArr.map((item , pos) => {
    console.log(item);

    return (
      <BlogItem key={pos} title={item.title} description={item.description} id={item.id}/>
      // <div className='BlogCard' key={item.id}>
      //   <h3>{item.title}</h3>
      //   <p>{item.description}</p>
      //   {<button onClick={btnclick}>Hide</button> }
      // </div>
    )
  })

  return (
    <div className="App">
      {blogCards}
    </div>
  );
}
export default App;
