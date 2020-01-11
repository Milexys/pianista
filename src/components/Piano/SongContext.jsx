import React, { createContext, Component } from 'react';

export const SongContext = createContext();

class SongContextProvider extends Component {
    state = { 
        id: 1,
     }

     setId = () => {
         this.setState({
             id: 2
         })
     }

     setThirdId = () => {
        this.setState({
            id: 3
        })
    }

    render() { 
        return ( 
            <SongContext.Provider value={{...this.state, setId: this.setId, setThirdId: this.setThirdId}}>
                {this.props.children}
            </SongContext.Provider>
         );
    }
}
 
export default SongContextProvider;