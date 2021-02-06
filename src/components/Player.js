import React ,{useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'  //" {} means we are importing 1 specific thing froma file "
import { faAngleLeft, faAngleRight, faPlay, faPause} from "@fortawesome/free-solid-svg-icons";

export const Player = (props) => {
    //Event handleser
    //ref
    useEffect(()=>{

 
        const newSong = props.songs.map((song)=>{
            
            
            if(song.id===props.currentSong.id){

                return{
                    ...song,
                    active:true,
                }
                
            }else{
                return{
                    ...song,
                    active:false,
                }
            }
        

        });
     props.setsongs(newSong)
    },[props.currentSong])


    
    
    const playSongHandler=()=>{         
        if(props.isPlaying){
            
            props.audioRef.current.pause();
            props.setisPlaying(!props.isPlaying)

        
        }else 
        {
        props.audioRef.current.play();        //audio.current.play in html 
        props.setisPlaying(!props.isPlaying)
        }
    }



     


const converter=(time)=>{

    return(
        Math.floor(time/60)+ ":"+("0"+Math.floor(time%60)).slice(-2)  
        
    )
    
}

const skipTrackHandler=(direction)=>{           //play forward and backward
    const currentIndex=props.songs.findIndex((song)=>song.id===props.currentSong.id)
    console.log(currentIndex);
    if(direction==="skip-forward")
    {
        props.setcurrentSong(props.songs[(currentIndex+1) % props.songs.length])
      
    }
    if(direction==="skip-back")
    {
        if(((currentIndex- 1) % props.songs.length)=== -1)
        {
            props.setcurrentSong(props.songs[props.songs.length-1])  
            // return;
        }else {
        props.setcurrentSong(props.songs[(currentIndex- 1) % props.songs.length])  
        }


    }
}
//styling

let anime={

    transform:`translateX(${props.songInfo.animationPercentage}%)`
}


    return (
        <div className="player">
            <div className="time-control ">
            <p>{converter(props.songInfo.currentTime)}</p>


            <div style={{background:`linear-gradient(to right, ${props.currentSong.color[0]},${props.currentSong.color[1]})`}} className="track">
            <input  type="range"
                min={0}     //starting time 
                 max={props.songInfo.durationTime|| 0 }        //
                 value={props.songInfo.currentTime} 
                 onChange={props.DragHandleer}     //where ua pointer should be 
            
            
            /> 
            <div style={anime} className="animate-track">

</div>
            </div>   



            <p> {props.songInfo.durationTime?converter(props.songInfo.durationTime):"00:00"} </p>
            </div>



            <div className="play-control">
            <FontAwesomeIcon className="skip-back"  onClick={()=>skipTrackHandler("skip-back")} size="2x" icon={faAngleLeft}/>  
            <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={props.isPlaying? faPause:faPlay}/>  
           
            <FontAwesomeIcon className="skip-forward" onClick={()=>skipTrackHandler("skip-forward")} size="2x" icon={faAngleRight}/>  
            </div>
            
            {/* <audio ref={audioRef} onTimeUpdate={timeupdateHandler} onLoadedMetadata={timeupdateHandler} src={props.currentSong.audio}/> */}
        </div>
    )
}
