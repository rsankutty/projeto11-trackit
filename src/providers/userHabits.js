import React from "react";
import { useContext,useState } from "react";

export const HabitsContext = React.createContext();

export const HabitsProvider = (props) => {
    const [addHabits, setAddHabits] = useState([]);
    return (
        <HabitsContext.Provider value={{addHabits,setAddHabits}}>
            {props.children}
        </HabitsContext.Provider>
    )
}

//hook personalizado
export const useHabits = () => useContext(HabitsContext)