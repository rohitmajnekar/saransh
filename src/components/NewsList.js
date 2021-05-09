import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useSpring, animated} from 'react-spring'
import FavoriteIcon from '@material-ui/icons/Favorite';
import Divider from '@material-ui/core/Divider';
import {Button, ButtonGroup} from '@material-ui/core';
import BookIcon from '@material-ui/icons/Book';

export const NewsList = (props) => {

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
            {news.length?news[0].data.map((d, i)=>{
                return <List data={d} link = {news[0].link[i]} id={i} key = {i} />
            }):'loading'}
            </>
        )
    }

}

const List = ({data, link, id}) => {
    const transition = useSpring( {
        from:{x:1000, opacity:0},
        delay:id *150,
        to:{x:0, opacity:1},
        leave:{}

    })
    const useStyles = makeStyles((theme) => ({
        root: {
          width: '100%',
        },
        heading: {
          fontSize: theme.typography.pxToRem(15),
          fontWeight: theme.typography.fontWeightRegular,
        },
    }));
    const classes = useStyles();
    return(
        <animated.div style={transition} className={classes.root}>
          <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography className={classes.heading}>{data.substring(0,60)} </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography className='container' style={{alignItems: 'center', textAlign: 'justify', textJustify:'inter-word'}}>
                <ButtonGroup>
                    <Button size='small' color="primary" startIcon={<FavoriteIcon edge ='start'/>}>Add Fav</Button>
                    <Button size='small' color="primary" startIcon={<BookIcon edge ='start'/>}>ReadLater</Button>
                </ButtonGroup>
                <br/>
                <br/>
                <div className="container ml-6">{data}</div>
            </Typography>
            </AccordionDetails>
        </Accordion>  
        <Divider light />
        </animated.div>
    )
}
