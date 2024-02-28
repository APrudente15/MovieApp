import ShowList from "../ShowList";
import SearchForm from "../SearchForm";

function SearchWidget() {
    return (
        <>
        <SearchForm />
        <ShowList />
        </>
    )
}

export default SearchWidget


// import React, {useState, useEffect} from 'react'
// import ShowList from '../ShowList';
// import { useShow } from '../../contexts'; //we import the useContext here

// export default function SearchWidget() {
//     const [inputValue, setInputValue]=useState("");
//     const [searchString, setSearchString]=useState("Married At First Sight");
//     // const [showData, setShowData]=useState([]) //this useState will be set to global in the useContext (in the context folder)
//     const {setShowData}=useShow()

// //useStates above explained: 

//     function handleInput(e){
//         const newInput = e.target.value
//         setInputValue(newInput);
//     };

//     useEffect(()=>{
//         async function searchAPI (){
//             const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchString}`)
//             const rawData = await response.json()
//             const data=rawData.map((show)=> show.show)
//             setShowData(data)
//         }
//         searchAPI()
//     },[searchString])

//     function handleSubmit(e){
//         e.preventDefault()
//         setSearchString(inputValue)
//         setInputValue("")
//     }

//   return (
//     <>
//     <form onSubmit={handleSubmit}>
//         <input type="text" value={inputValue} onChange={handleInput} required />
//         <input type="submit" value="search"/>
//     </form>
//     <ShowList />
//     </>
//   );
// };

//showData ={showData} setShowData ={setShowData} --> we have removed this as props because we have set these as global in the contexts folder