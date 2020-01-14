import React, { useState, createContext } from 'react';

export const SongContext = createContext();

const SongContextProvider = (props) => {

    const [idSong, setIdSong] = useState(2);

    const nextSong = () =>{
        setIdSong(idSong + 1)
    }

    return ( 
        <SongContext.Provider value={{idSong, nextSong}}>
            {props.children}
        </SongContext.Provider>
     );
}
 
export default SongContextProvider;