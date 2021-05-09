import React, {useState, useEffect} from 'react'
import {NewsList} from './NewsList'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import {ButtonGroup, Button} from '@material-ui/core'




export  const NewsSource = (props) => {
    let articles = ['theHindu', 'theWire', 'TimesNews', 'HindustanTimes', 'TheQuint']
    // let active = 0
    const [state, setstate] = useState(0)
    
    let isActive = (index)=> {
        if (index === state){
            // console.log(index)
            return "active";
        }else{
            return 'inactive'
        }
    }
    
    let styles ={
        display: 'flex',
        justifyContent: 'space-around'
    }
    return (

        <Router>
            <div>
                <ButtonGroup  >
                    {articles.map((article,i) =>{
                        return <Button variant="contained" color='secondary' ><Link style={{ textDecoration: 'none', color:'white' }} onClick={()=>setstate(i)}  key={i} to={article}>{article}</Link></Button>
                    })}
                </ButtonGroup>
            </div>
            <Switch>
                <Route  key='2' path='/theWire'>
                    <NewsList source='theWire'/>
                </Route>

                <Route key='1' path='/theHindu' >
                    <NewsList source='theHindu'/>
                </Route>

                <Route path='/theHindustan' exact>
                    {/* <NewsList type="husdustan" newsItem={props.data[0]} key={props.data.id} del = {props.deleteFun}/> */}
                </Route>
                <Route path='/theQuint' exact>
                    {/* <NewsList newsItem={props.data[0]} key={props.data.id} del = {props.deleteFun}/> */}
                </Route>
            </Switch>
        </Router>
    )
}
