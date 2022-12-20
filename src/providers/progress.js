import React from "react";
import { useContext,useState } from "react";

export const ProgressContext = React.createContext();

export const ProgressProvider = (props) => {
    const [percentage,setPercentage] = useState(0);

    return (
        <ProgressContext.Provider value={{percentage,setPercentage}}>
            {props.children}
        </ProgressContext.Provider>
    )
}

//hook personalizado
export const useProgress = () => useContext(ProgressContext)