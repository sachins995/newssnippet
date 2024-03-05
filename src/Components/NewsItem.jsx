import React  from "react";
import "./App.css"
const NewsItem = (props) => {

   let {title, description, urlToImage, url, author, publishedAt, source} = props;
    return(
        <div className="container my-3 mb-3 mx-3 px-3 py-3" style={{margin:"25px"}}>
<a href= {url} style={{textDecoration:"none"}} target = "_blank" ><div className="card" style={{width: "325px" ,height: "410px",overflow:"hidden" }} >
  <img src= {urlToImage?urlToImage:"54323.jpg"} className="card-img-top" alt="..."  style={{maxHeight:"182px",maxWidth:"325px", objectFit: "contain"}}/>
  <div className="card-body">
    {/* <h5 className="card-title">{title?title+"...":""}</h5> */}
    <h5 className="card-title">{title}</h5>

    {/* <p className="card-text">{description?description+"...":""}</p> */}
    <p className="card-text"><small>{(author&&publishedAt)? "Sources: "+author:"Source: Unknown"}</small></p>
    <p className="card-text"><small>{publishedAt ? "Last Updated: "+new Date(publishedAt).toGMTString():""}</small></p>

    <p className="card-text" style={{color:"#00b1cd", fontSize: "1.1em",fontWeight: "600", position:"relative", bottom:"5px"}}><small style={{fontWeight: "1000"}}>&#x00B7;</small> {source}</p>
   {/* <a href= {url} className="btn btn-sm btn-primary" target = "_blank" style={{position:"absolute", bottom:"10px", backgroundColor:"#00b1cd"}}>Read More</a><br/> */}
    {/* <span>{publishedAt.slice(0,10)}</span><br/>
    <span>{publishedAt.slice(10,20)}</span> */}
    </div>
</div></a>
</div>
 )

}
export default NewsItem;