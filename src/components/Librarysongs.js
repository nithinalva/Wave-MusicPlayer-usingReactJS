import React from 'react'



export const Librarysongs = (props) => {

    const SongSelectHandler=()=>{
        // const selectedSong= props.Songs.filter((state)=>state.id===props.id)
        // console.log(selectedSong);  o/p was  [{}]
        //  props.setcurrentSong(selectedSong[0])
        props.setcurrentSong(props.Song)
        console.log(props.setsongs);
        // props.setsongs({...props.Song,active:false})
        // props.setsongs({...props.Song,active:true})
      
 
        
       
        
        const selection = props.Songs.map((song)=>{
            
            
            if(song.id===props.Song.id){

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
     props.setsongs(selection)


         
       
        if(props.isPlaying){                                        //?? dint understand 
            const Playpromise=props.audioRef.current.play();
         
         
         
            if(Playpromise!==undefined){
                Playpromise.then((audio)=>{
                    props.audioRef.current.play();  
                })
            }

        }

    }

    return (
        <div className={`library-song ${props.Song.active? 'selected' : " "} `} onClick={SongSelectHandler} id={props.Song.id} > 
    
        <img alt={props.Song.name} src={props.Song.cover}></img>
        <div className="Song-descriptions">
        <h4>{props.Song.name} </h4>
        
        <h3> {props.Song.artist} </h3>
        </div>
        </div>
     

  
    )
}
