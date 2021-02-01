import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'

function Login() {

    const signIn=()=>{

    };

    
    return (
        <div className='login'>
            <img src="https://scx2.b-cdn.net/gfx/news/2017/1-snapchat.jpg" alt=""/>
            <Button variant='outline' onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
