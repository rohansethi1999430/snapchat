import React, { useEffect, useState } from 'react'
import './Chats.css'
import {Avatar} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import { db } from './firebase';
import Chat from './Chat';
import { useDispatch, useSelector } from 'react-redux';
import { selectuser } from './features/appSlice';
import { auth } from './firebase';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { useHistory } from 'react-router-dom';
import { resetCameraImage } from './features/cameraSlice';


function Chats() {
    const [posts, setPosts] = useState([]);
    const user=useSelector(selectuser);
    const dispatch = useDispatch();
    const history=useHistory();
    useEffect(() => {
        db.collection('posts')
        .orderBy('timestamp','desc')
        .onSnapshot((snapshot)=>{
                setPosts(
                    snapshot.docs.map((doc)=>({
                        id:doc.id,
                        data:doc.data(),
                    }))
                )
        })
        
    }, [])
    const takeSnap=()=>{
        dispatch((resetCameraImage()))
        history.push('/')
    }

    return (
        <div className="chats">
            <div className="chats__header">
                <Avatar src={user.profilePic} 
                onClick={()=>auth.signOut()} 
                className="chats__avatar"/>
                <div className="chats__search">
                <SearchIcon className='chats__searchIcon' />
                <input type="text" placeholder="Friends"/>
                </div>
                <ChatBubbleIcon className='chats__chatIcon'/>
            </div>
            <div className="chats__posts">
                {posts.map(({id,data :{profilePic,username, timestamp,imageUrl,read},
                })=>(
                    <Chat
                        key={id}
                        id={id}
                        username={username}
                        read={read}
                        timestamp={timestamp}
                        profilePic={profilePic}
                        imageUrl={imageUrl}
                    />
                ))}
            </div>
            <RadioButtonUncheckedIcon
            onClick={takeSnap}
            className='chats__takePicIcon'
            fontSize='large'
            />
        </div>
    )
}

export default Chats
