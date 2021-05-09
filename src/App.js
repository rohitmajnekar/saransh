import Header from './components/Header'
import {NewsSource} from './components/NewsSource'
import React, {useState} from 'react'

function App() {

  const deleteFun = (article) =>{
    console.log(article.id)
    
    setNews(news.filter((e)=>{
      return e !== article
    }))
  }

  const getArticle = (article) =>{
    console.log(article)
    setNews([{ id:1,
    source: 'http://Nonono.com',
    content: 'ping pong'
  },
  { id:2,
    source: 'http://Yoyoyo.com',
    content: 'scriddlet'
  }])
  }
  let initial = [{ id:1,
    source: 'http://sss.com',
    content: 'peepee poopoo'
  },
  { id:2,
    source: 'http://mmm.com',
    content: 'peepee poopoo'
  }]


  const [news, setNews] = useState(initial);
  return (
    <div className="App">

     <Header />
     <NewsSource data = {news} deleteFun = {deleteFun} getArticle={getArticle}/>
    </div>
  );
}

export default App;
