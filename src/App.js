import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import './App.css';
import News from './components/News/News';

function App() {
  const[articles, setArticles] = useState([]);
  useEffect( () => {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=88eb4e12c97c42569e06cca4f705d490';
    fetch(url)
    .then(res => res.json())
    .then( data => setArticles(data.articles))
  }, []);
  //console.log(articles);
  return (
    <div >
      <h2>Articles: {articles.length}</h2>
      {
        articles.map( article => <News article={article}></News>)
      }
    </div>
  );
}

export default App;
