import React, {useState, useEffect} from 'react'
import {List} from './List'
export const NewsList = (props) => {

    const [startEle, setStartEle] = useState(1);
    // const [lastEle, setLastEle] = useState(10);

    const getPaginatedData = (n) => setStartEle((n-1)*10)
    const [news, setNews] = useState({ 
        paper: '',
        data:[],
        dates: [],
        link: [],
    })
    useEffect(() =>{
        fetch('http://localhost:3001/'+props.source).then(response =>{
            if(response.ok){
                return response.json()
            }
        })
        .then(response =>setNews(response.result))
        .catch(err =>{
            console.log(err)
        })
    }, []);

    if(news.length < 1){
        return <>loading</>
    }
    else{
        return (
            <>
            {console.log(news)}
            {news.length?news[0].data.slice(startEle, startEle+10).map((d, i)=>{
                return <List data={d} link = {news[0].link[i]} id={i} key = {i} />
            }):<Spinner/>}
            {news.length?<Paginate length = {news[0].data.length/10} pag = {getPaginatedData} />:""}
            </>
        )
    }

}

const Spinner = ()=>{
    return (
        <div class="d-flex justify-content-center m-5">
            <div class="spinner-border" role="status">
                <span class="sr-only"></span>
            </div>
        </div>
    )
}

const Paginate = ({length, pag}) =>{

    const obj = [];

    const Style = {
        background: 'grey',
        margin: '3px',
        width:'20px',
        height: '30px',
        alignContent: 'center'
    }

    for(var i =1; i<=length; i++){
        obj.push(i);
    }

    return (
    <ul className="pagination">
        {
            obj.map((i)=>{
                return <li className='page-item'><a className='page-link' onClick={() => pag(i)} >{i}</a></li>
            })
        }
    
    </ul>
    )
}
