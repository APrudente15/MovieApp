import React, { useState, useContext, createContext } from "react";

const ShowContext = createContext();

export const ShowProvider = ({ children }) => {
    const [showData, setShowData] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [searchString, setSearchString] = useState("");
    const [filter, setFilter] = useState("");
    const [sortBy, setSortBy] = useState("rating");
    const [data, setData] = useState([]);
    const [selectedFilterOption, setSelectedFilterOption] = useState("all");

    return (
        <ShowContext.Provider 
        value={{ 
            showData, 
            setShowData,
            inputValue,
            setInputValue,
            searchString,
            setSearchString,
            filter,
            setFilter,
            sortBy,
            setSortBy,
            data,
            setData,
            selectedFilterOption,
            setSelectedFilterOption, }}>
            {children}
        </ShowContext.Provider>
    );
};

export const useShow = () => useContext(ShowContext);//this is our custom hook

//Steps we have done here: 1) creating the context and providing the context, though we need to wrap the app with the Provider which is done in the App.jsx