import React, { useState, useContext, createContext } from "react";

//Good template for createContext

const ShowContext = createContext();

export const ShowProvider = ({ children }) => {
    const [showData, setShowData] = useState([]);

    return (
        <ShowContext.Provider value={{ showData, setShowData }}>
            {children}
        </ShowContext.Provider>
    );
};

export const useShow = () => useContext(ShowContext);//this is our custom hook

//Steps we have done here: 1) creating the context and providing the context, though we need to wrap the app with the Provider which is done in the App.jsx