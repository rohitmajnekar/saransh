import React, { useState ,useContext } from 'react';
import { useHistory } from 'react-router-dom';
// import { UserContext } from '../App';
import {Dialog, DialogContent, DialogTitle} from '@material-ui/core';

export const LoginPopup = ({title, children, open, setOpen, handleClose}) => {
    // const {state, dispatch} = useContext(UserContext);
    const history = useHistory();

    const [email , setEmail ] = useState('');
    const [password , setPassword ] = useState('');

    const loginUser =async(e) => {
        e.preventDefault();

        const res = await fetch('/login',{
            method :"POST",
            headers :{
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                email,password
            })
        });

        const data =  res.json();

        if( data.status === 400 || !data ){
            window.alert("Invalid Credentials");
            console.log("Invalid");
        }
        // else{
        //     dispatch({type :"USER" ,payload :true })
        //     window.alert("Registration Credentials");
        //     console.log("Valid");
        //     history.push("/");
        // }
    }

    // const handleClose = () =>{
    //     open = false;
    // }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle  >
                <div className='d-flex'>
                    <div className='flex-grow-1'>Title</div>
                    <div onClick={handleClose} style={{color:'red'}} >x</div>
                </div>
            </DialogTitle>
            <DialogContent>
            <div>
                <div className="content">
                    <div className="login-card">
                        <div className="form">
                            <form className="loginform" id="loginform" method="post" name="login">
                            <div className="form-group">
                                <input type="email" name="email"  className="form-control my-input" id="email" 
                                value ={ email }
                                onChange = {(e) => setEmail(e.target.value)}
                                placeholder="Email"></input>
                            </div><br></br>
                            <div className="form-group">
                                <input type="password" name="password"  className="form-control my-input" id="password" 
                                value ={ password }
                                onChange = {(e) => setPassword(e.target.value)}
                                placeholder="Password"></input>
                            </div>
                            <br></br>
                            <div className="text-center ">
                                <a className="button-link" onClick={loginUser} href="Signup">
                                    <i className="fa fa-google"></i> Login
                                </a>
                            </div>
                            <br></br>
                            <div className="or">
                                <span className="span-or">OR</span>
                            </div>
                            <br></br>
                            <div className="text-center ">
                                <a className="button-link" href="Signup">
                                    <i className="fa fa-google"></i> Create Your Free Account
                                </a>
                            </div>
                            </form>
                        </div>
                    </div>
                    <nav className="Options">
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="articles_list">Contact</a></li> 
                                    <li><a href="articles_list">About Us</a></li>
                                </ul>
                    </nav>
                </div>
        </div>

            </DialogContent> 
        </Dialog>
    )
}
