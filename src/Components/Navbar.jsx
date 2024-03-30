import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./news.css"
import { NavLink } from "react-router-dom";


const Navbar = ({ country, setCountry, setLanguage, setSearch }, search) => {
  const handleSearch = () => {
    // Handle search functionality here
    console.log(search); // This will log the current value of the search state


  };

  const [clicked, setClicked] = useState(false);
  const [id, setId] = useState();

  const handleClick = () => {
      setClicked(!clicked);
        setId("line")
      
  }
  return (
    <>

      <nav className="first navbar navbar-expand-lg bg-body-tertiary">
        {/* <div className="container" style={{width:"99% !important"}}> */}
          <a className="nav-link dropdown-toggle drop" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {country}
            
          </a>
          {/* <a className="nav-link dropdown-toggle" href={`/${country}`} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {country}
            </a> */}
          <ul className="dropdown-menu" >
            <li className="nav-link" onClick={() => setCountry("in")}>India</li>
            <li className="nav-link" onClick={() => setCountry("ae")}>United Arab Emirates</li>
            <li className="nav-link" onClick={() => setCountry("at")}>Argentina</li>
            <li className="nav-link" onClick={() => setCountry("au")}>Austria</li>
            <li className="nav-link" onClick={() => setCountry("be")}>Belgium</li>
            <li className="nav-link" onClick={() => setCountry("bg")}>Bulgaria</li>
            <li className="nav-link" onClick={() => setCountry("br")}>Brazil</li>
            <li className="nav-link" onClick={() => setCountry("ca")}>Canada</li>
            <li className="nav-link" onClick={() => setCountry("ch")}>Switzerland</li>
            <li className="nav-link" onClick={() => setCountry("cn")}>China</li>
            <li className="nav-link" onClick={() => setCountry("co")}>Colombia</li>
            <li className="nav-link" onClick={() => setCountry("cu")}>Cuba</li>
            <li className="nav-link" onClick={() => setCountry("cz")}>Czech Republic</li>
            <li className="nav-link" onClick={() => setCountry("de")}>Germany</li>
            <li className="nav-link" onClick={() => setCountry("eg")}>Egypt</li>
            <li className="nav-link" onClick={() => setCountry("es")}>Spain</li>
            <li className="nav-link" onClick={() => setCountry("fr")}>France</li>
            <li className="nav-link" onClick={() => setCountry("gb")}>United Kingdom</li>
            <li className="nav-link" onClick={() => setCountry("gr")}>Greece</li>
            <li className="nav-link" onClick={() => setCountry("hk")}>Hong Kong</li>
            <li className="nav-link" onClick={() => setCountry("hu")}>Hungary</li>
            <li className="nav-link" onClick={() => setCountry("id")}>Indonesia</li>
            <li className="nav-link" onClick={() => setCountry("ie")}>Ireland</li>
            <li className="nav-link" onClick={() => setCountry("il")}>Israel</li>
            <li className="nav-link" onClick={() => setCountry("it")}>Italy</li>
            <li className="nav-link" onClick={() => setCountry("jp")}>Japan</li>
            <li className="nav-link" onClick={() => setCountry("kr")}>South Korea</li>
            <li className="nav-link" onClick={() => setCountry("lt")}>Lithuania</li>
            <li className="nav-link" onClick={() => setCountry("lv")}>Latvia</li>
            <li className="nav-link" onClick={() => setCountry("ma")}>Morocco</li>
            <li className="nav-link" onClick={() => setCountry("mx")}>Mexico</li>
            <li className="nav-link" onClick={() => setCountry("my")}>Malaysia</li>
            <li className="nav-link" onClick={() => setCountry("ng")}>Nigeria</li>
            <li className="nav-link" onClick={() => setCountry("nl")}>Netherlands</li>
            <li className="nav-link" onClick={() => setCountry("no")}>Norway</li>
            <li className="nav-link" onClick={() => setCountry("nz")}>New Zealand</li>
            <li className="nav-link" onClick={() => setCountry("ph")}>Philippines</li>
            <li className="nav-link" onClick={() => setCountry("pl")}>Poland</li>
            <li className="nav-link" onClick={() => setCountry("pt")}>Portugal</li>
            <li className="nav-link" onClick={() => setCountry("ro")}>Romania</li>
            <li className="nav-link" onClick={() => setCountry("rs")}>Serbia</li>
            <li className="nav-link" onClick={() => setCountry("ru")}>Russia</li>
            <li className="nav-link" onClick={() => setCountry("sa")}>Saudi Arabia</li>
            <li className="nav-link" onClick={() => setCountry("se")}>Sweden</li>
            <li className="nav-link" onClick={() => setCountry("sg")}>Singapore</li>
            <li className="nav-link" onClick={() => setCountry("sk")}>Slovakia</li>
            <li className="nav-link" onClick={() => setCountry("th")}>Thailand</li>
            <li className="nav-link" onClick={() => setCountry("tr")}>Turkey</li>
            <li className="nav-link" onClick={() => setCountry("tw")}>Taiwan</li>
            <li className="nav-link" onClick={() => setCountry("ua")}>Ukraine</li>
            <li className="nav-link" onClick={() => setCountry("us")}>United States</li>
            <li className="nav-link" onClick={() => setCountry("ve")}>Venezuela</li>
            <li className="nav-link" onClick={() => setCountry("za")}>South Africa</li>
  
          </ul>

          <Link className="title navbar-link" to="/"><img className="logo" src="ns.png" /> News Snippets</Link>

        {/* </div> */}
      </nav>

      <nav className="second navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          {/* <Link className="navbar-link" to="/" style={{textDecoration:"none",fontWeight:"600",color:"olive"}}><img src="fotor-2024022213113.png" style={{height:"20px",width:"20px"}}/>  News Snippets</Link> */}
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="list navbar-nav me-auto mb-2 mb-lg-0">
              {/* <Link className="nav-link link" id = {(e)=>{return e.isClicked?"line":""}} to="/" onClick={handleClick}>General</Link> */}
              <NavLink className={({ isActive}) =>  (isActive ? "active" : "pending")} onClick={handleClick} to="/">General</NavLink>
              {/* <Link className="nav-link" id = {(e)=>{return e.isClicked?"line":""}}  to="/business" onClick={handleClick}>Business</Link> */}
              <NavLink className={({ isActive}) =>  isActive ? "active" : "pending"} onClick={handleClick} to="/business">Business</NavLink>
              {/* <Link className="nav-link"  id = {(e)=>{return e.isClicked?"line":""}}  to="/entertainment" onClick={handleClick}>Entertainment</Link> */}
              <NavLink className={({ isActive}) =>  isActive ? "active" : "pending"} onClick={handleClick} to="/entertainment">Entertainment</NavLink>
              {/* <Link className="nav-link" id = {(e)=>{return e.isClicked?"line":""}}   to="/health" onClick={handleClick}>Health</Link> */}
              <NavLink className={({ isActive }) =>  isActive ? "active" : "pending"} onClick={handleClick} to="/health">Health</NavLink>
              {/* <Link className="nav-link" id = {(e)=>{return e.isClicked?"line":""}}   to="/science" onClick={handleClick}>Science</Link> */}
              <NavLink className={({ isActive}) =>  isActive ? "active" : "pending"} onClick={handleClick} to="/science">Science</NavLink>
              {/* <Link className="nav-link position-relative" id = {(e)=>{return e.isClicked?"line":""}}   to="/sports" onClick={handleClick}>Sports<span className="new position-absolute translate-middle badge rounded-pill bg-danger">New</span></Link> */}
              <NavLink className={({ isActive}) =>  isActive ? "active" : "pending"} onClick={handleClick} to="/sports">Sports<span className="new position-relative translate-middle badge rounded-pill bg-danger">New</span></NavLink>
              {/* <Link className="nav-link"  id = {(e)=>{return e.isClicked?"line":""}}  to="/technology" onClick={handleClick}>Technology</Link> */}
              <NavLink className={({ isActive}) =>  isActive ? "active" : "pending"} onClick={handleClick} to="/technology">Technology</NavLink>
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="nav-link" to="/">general</Link></li>
                  <li><Link className="nav-link" to="/business">business</Link></li>
                  <li><Link className="nav-link" to="/entertainment">entertainment</Link></li>
                  <li><Link className="nav-link" to="/health">health</Link></li>
                  <li><Link className="nav-link" to="/science">science</Link></li>
                  <li><Link className="nav-link" to="/sports">sports<span className="position-absolute translate-middle badge rounded-pill bg-danger" 
                  style={{width: "26px",
                         marginTop: "15px",
                         marginLeft: "18px",
                         height: "12px",
                         fontSize: "7px"}}>New</span></Link></li>
                  <li><Link className="nav-link" to="/technology">technology</Link></li>
                </ul>
              </li> */}
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" id="search-text" type="search" value={search.value} onChange={(e) => setSearch(e.target.value)} placeholder="Search" aria-label="Search" />
              {/* <button disabled = {search.value<0} className="btn btn-outline-success" id="search-button" type="submit" onClick={handleSearch}>Search</button> */}
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Navbar;