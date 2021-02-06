import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMusic} from "@fortawesome/free-solid-svg-icons"

export const Nav = (props) => {
    return (
       <nav>
           <h1>Waves</h1> 
           <button onClick={()=>props.setlibraryStatus(!props.libraryStatus)}>

               Music library
               <FontAwesomeIcon icon={faMusic}/>
           </button>

       </nav>
    )
}
