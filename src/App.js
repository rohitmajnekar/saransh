import Header from './components/Header'
import {NewsSource} from './components/NewsSource'
import React, {useState} from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'


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
     <Router>
       <Switch>
         <Route key='2' path='/fav'>
            <div>hello</div>
         </Route>
         <Route key='2' path='/'>
            <NewsSource data = {news} deleteFun = {deleteFun} getArticle={getArticle}/>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
