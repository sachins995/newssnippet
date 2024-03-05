import React  from "react";
import Fidget from '../Fidget-spinner.gif'

function Spinner(){

    return(
      <div style={{textAlign : "center"}}>
        <img src = {Fidget} alt=""/>
        <h4>Loading...</h4>
      </div>

    )


}
export default Spinner;