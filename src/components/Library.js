import React from 'react'
import { Librarysongs } from './Librarysongs';





export const Library = (props) => {
    return (
        <div className={`library ${props.libraryStatus? 'active-library':""}`}>
            <h2>library </h2>
            <div className="library-songs">

                  {/* {console.log("library",props.Songs)} */}

                    {props.Songs.map(song=>(

                        
                        <Librarysongs Song={song} Songs={props.Songs} key={song.id} id={song.id} setcurrentSong={props.setcurrentSong} audioRef={props.audioRef} isPlaying={props.isPlaying} setsongs={props.setsongs}/>
                       
        
                    ))} 
        
      
                    
                         
           
        


            </div>
            
            
        </div>
    );
};
