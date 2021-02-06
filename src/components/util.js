

export const PlayAudio = (isPlaying, audioRef) => {
  
        if(isPlaying){                                        //?? dint understand 
            const Playpromise=audioRef.current.play();
         
         
         
            if(Playpromise!==undefined){
                Playpromise.then((audio)=>{
                    audioRef.current.play();  
                })
            }

        }

    }
    

