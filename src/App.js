import React, {useEffect, useState} from "react"
import "./App.css";
import Video from "./pages/Video";
import db from "./config/firebase"
import {collection, getDoc, getDocs} from 'firebase/firestore/lite'

function App() {
    let maxHeight;

    if(window.innerHeight <= 800){
        maxHeight = window.innerHeight
    }

    const [video, setVideos] = useState([])

    async function getVideos(){
        const videosCollection = collection(db, 'videos')
        const videosSnapshot = await getDocs(videosCollection)
        const videosList = videosSnapshot.docs.map(doc => doc.data())
        setVideos(videosList)
    }

    useEffect(()=> {
        getVideos();
    }, [])

    return (
        <div className="App" style={{maxHeight: maxHeight + 'px '}}>
            <div className="app__videos">
                {video.map((item)=> {
                    return (
                        <Video 
                            likes={item.likes}
                            messages={item.messages}
                            shares={item.shares}
                            name={item.name}
                            description={item.description}
                            music={item.music}
                            url={item.url}
                        />
                    )
                })}
                {/* <Video 
                    likes={300}
                    messages={120}
                    shares={53}
                    name='matheus'
                    description="gato goleiro"
                    music="música épica"
                    url="https://firebasestorage.googleapis.com/v0/b/jornada3-a7924.appspot.com/o/brecker2.mp4?alt=media&token=5493f40a-3b0d-4c19-b5dd-a9016cc5a6d1"
                />
                <Video 
                    likes={310}
                    messages={220}
                    shares={22}
                    name='paulosantos2058'
                    description="pertubando"
                    music="clap your hands"
                    url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4"
                /> */}
            </div>
        </div>
    );
}

export default App;
