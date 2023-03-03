import { createContext, useState, useEffect } from "react";
import axios from 'axios'

export const MpsContext = createContext()

export const MpsController = ({children}) => {
    return(
        <MpsContext.Provider>
            {children}
        </MpsContext.Provider>
    )
}