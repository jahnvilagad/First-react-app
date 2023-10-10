import './App.css';

function App() {
  
  const blogobj = {
    title: 'Blog Title 1'
  }

  const style = {
    color: 'red',
    fontSize: '2rem'
  }


  return (
    <div className="App">
      <div style={style}>
        <h3>{blogobj.title}</h3>
      </div>
    </div>
  );
}

export default App;
