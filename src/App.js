import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { Component, useState} from "react";
import  React from "react";
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = () =>{
  const [progress, setProgress] = useState(0);
  const [country, setCountry] = useState("in");
  const [search, setSearch] = useState("")
  // const [language, setLanguage] = useState("en");
//  state = {
//   progress:0
//  }

//  setProgress(progress)
//  setProgress(progress){
//   setState({progress: progress})

//  }
 
  return (
    <div >
      
    <Router>
    <LoadingBar
        color='#f11946'
        height={4}
        progress={progress}
        
      />
      
    <Navbar country = {country} setCountry = {setCountry} setSearch = {setSearch} search = {search} />
    {/* <form className="d-flex" role="search">
        <input className="form-control me-2" id = "search-text" type="search" value = {search} placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" id = "search-button" type="submit" onClick={setSearch()}>Search</button>
      </form> */}
     
      <Routes>
          <Route exact path="/business"element={<News setProgress= {setProgress} key="business" pageSize={6} country={country} search = {search}  category = "business"/>} />
            <Route exact path="/entertainment"element={<News setProgress= {setProgress} key = "entertainment" pageSize={6} search = {search}   country={country} category = "entertainment"/>}/>
              <Route exact path="/"element={<News setProgress= {setProgress} key = "general" pageSize={6} country={country} search = {search}   category = "general"/>}/>
                <Route  exact path="/health"element={<News setProgress= {setProgress} key = "health" pageSize={6} country={country} search = {search}   category = "health"/>}/>
                  <Route exact path="/science"element={<News setProgress= {setProgress} key = "science" pageSize={6} country={country} search = {search}   category = "science"/>}/>
                    <Route exact path="/sports"element={<News setProgress= {setProgress} key = "sports" pageSize={6} country={country} search = {search}   category = "sports"/>}/>
                      <Route exact path="/technology"element={<News setProgress= {setProgress} key = "technology" pageSize={6} country={country} search = {search}   category = "technology"/>}/>
                     
                      </Routes>
                     
                    </Router>
                    </div>
                  );
  }


                  export default App;
