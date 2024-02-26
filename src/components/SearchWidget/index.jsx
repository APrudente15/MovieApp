import React, {useState, useEffect} from 'react'
import ShowList from '../ShowList';

export default function SearchWidget() {
    const [inputValue, setInputValue]=useState("");
    const [searchString, setSearchString]=useState("Married At First Sight");
    const [showData, setShowData]=useState([])

//useStates above explained: 

    function handleInput(e){
        const newInput = e.target.value
        setInputValue(newInput);
    };

    useEffect(()=>{
        async function searchAPI (){
            const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchString}`)
            const rawData = await response.json()
            const data=rawData.map((show)=> show.show)
            setShowData(data)
        }
        searchAPI()
    },[searchString])

    function handleSubmit(e){
        e.preventDefault()
        setSearchString(inputValue)
        setInputValue("")
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInput} required />
        <input type="submit" value="search"/>
    </form>
    <ShowList 
    showData ={showData}
    setShowData ={setShowData} />
    </>
  );
};
