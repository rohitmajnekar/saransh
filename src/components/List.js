import React from 'react'
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
import axios from 'axios';


export const List = ({data, link, id}) => {
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

    const saveFav = ()=>{
        const fav = {link:link};
        axios.post('http://localhost:3001/fav', fav).then(res=>{
            console.log(res)
        })
    }
    const classes = useStyles();
    return(
        <animated.div style={transition} className={classes.root}>
          <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography className={classes.heading}>{data.substring(0,150)} </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography className='container' style={{alignItems: 'center', textAlign: 'justify', textJustify:'inter-word'}}>
                <ButtonGroup>
                    <Button onClick={saveFav} size='small' color="primary" startIcon={<FavoriteIcon edge ='start'/>}>Add Fav</Button>
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
