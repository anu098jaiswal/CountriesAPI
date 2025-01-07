import { useState } from "react"
import Header from "./components/Header"
import './App.css'
import Searchbar from "./components/Searchbar"
import SelectMenu from "./components/SelectMenu"

import CountriesList from "./components/CountriesList"

const App = () => {

    const[searchText, setSearchText]=useState(" ")
    return(
        <>
        <Header/>
        <main>
            <div >
            <Searchbar setText={setSearchText}/>
            <SelectMenu/>
            </div>
       
        <CountriesList searchText={searchText} />
        </main>

        </>
    )
}
export default App


