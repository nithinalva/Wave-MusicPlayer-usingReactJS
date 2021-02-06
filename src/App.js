
import React, {useState,useRef} from 'react'
import { Player } from './components/Player'
import { Song } from './components/Song'
import "./styles/styles.scss"
import data from './components/data'
import { Library } from './components/Library'
import { Nav } from './components/Nav'
import { PlayAudio } from './components/util'




function App() {


  const audioRef =useRef(null)
//state
  const [songs, setsongs] = useState(data)    //song library or even the data from util.js

  const [currentSong , setcurrentSong ] = useState(songs[0])    //current playing 

    const [isPlaying, setisPlaying] = useState(false) ///for playing and pausing jus liek switch button 

     
    const [libraryStatus, setlibraryStatus] = useState(false)

    
    
    const [songInfo, setsongInfo] = useState({
      currentTime:0,                   //time and duration of song
      durationTime:0,
      animationPercentage:0
  })


  //lifting 
  const DragHandleer =(e)=>{
    // console.log(e.target.value);
        audioRef.current.currentTime=e.target.value;
        
        setsongInfo({...songInfo,currentTime:e.target.value})
}
  
    
    
    const timeupdateHandler =(e)=>{

      const current=e.target.currentTime;   
      const duration=e.target.duration;
      // console.log(current,duration);
      const currentRoundoff=Math.round(current);    //rounds of the decimal 0....
        const durationRoundoff=Math.round(duration);

      // console.log(currentRoundoff,durationRoundoff);  
      const animation=Math.round(currentRoundoff/durationRoundoff *100)
      // console.log(animation);
      //updating the song info
      
      setsongInfo({...songInfo,currentTime:current,durationTime:duration,animationPercentage:animation})
      
      
      }

       const songEndedHandler=async()=>{
        const currentIndex=songs.findIndex((song)=>song.id===currentSong.id)
       
        await setcurrentSong(songs[(currentIndex+1) % songs.length])
        if(isPlaying) audioRef.current.play();
           

       }


    PlayAudio(isPlaying,audioRef); 

       return (
    <div className="App" >
       {/* <h1> Music Player </h1> */}
      <Nav libraryStatus={libraryStatus} setlibraryStatus={setlibraryStatus}/>
      <Song currentSong ={currentSong}/>
      
        <Player audioRef={audioRef} currentSong={currentSong} songs={songs}  setsongs={setsongs} isPlaying={isPlaying} setisPlaying={setisPlaying} songInfo={songInfo}  setcurrentSong={setcurrentSong}  DragHandleer={DragHandleer}/>              
      
      
      
      
      <Library Songs={songs}  setcurrentSong= {setcurrentSong} audioRef={audioRef} isPlaying={isPlaying} setsongs={setsongs}  libraryStatus={libraryStatus}></Library>

    
    
      <audio ref={audioRef} onTimeUpdate={timeupdateHandler} onLoadedMetadata={timeupdateHandler} src={currentSong.audio} DragHandleer={DragHandleer} onEnded={songEndedHandler} />

    </div>
  );
}

export default App;
