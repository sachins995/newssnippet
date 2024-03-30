import React , {useEffect, useState} from "react";
import  NewsItem  from "./NewsItem";
import Spinner from "./Spinner";
import "./news.css"
import propTypes from "prop-types";
const News =(props)=> {
    const [articles,setArticles] = useState([])
    const [loading,setLoading] = useState(false)
    const [totalResults,setTotalResults] = useState(0)
    const [page, setPage] = useState(1)
    document.title = `${((props.category.charAt(0).toUpperCase()) + (props.category.slice(1)))} - News Snippets`



  const updateNews = async () =>{
    // setPage(page+1)
  props.setProgress(0)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&q=${props.search}&apiKey=8d1abd32b6c04ff5b69fe38407336fe5&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url)
    let parsedData = await data.json()
   
    setArticles(parsedData.articles);
setTotalResults(parsedData.totalResults);
setLoading(false)
props.setProgress(100)
   }

useEffect(()=>{
   
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    updateNews()
    
},[props.country,props.search, page])


const handleNextClick = async () =>{
  updateNews()
  
  setPage(page+1)
}

  const handlePrevClick = async () =>{
   
    updateNews()
    setPage(page-1)
    
  }

    return(

        <div className="container my-3">
            {/* <h3 className="title2">Top {((props.category.charAt(0).toUpperCase()) + (props.category.slice(1)))} Snippets</h3> */}
            <h3 className="title2">Top {props.category} Snippets</h3> 
            {loading&&<Spinner/>}
             <div className="row">
              {articles && articles.length>0 ?
               !loading && articles.map((element) =>{
                return <div className="col-md-4" key = {element.url}>          
                <NewsItem title =  {element.title.length<100? element.title: element.title.slice(0,100)+"..."}
                /* <NewsItem title =  {element.title} */
                           source = {element.source.name}
                           // description = {element.description?element.description.slice(0,80):""}
                           urlToImage = {element.urlToImage}
                           url = {element.url}
                           author = {element.author}
                           publishedAt = {element.publishedAt}   
                            />
                           </div> 
                         })
            
                 :(!loading?<div className="result">No result found. Please search Relevant keyword for specific Category.</div>:"") 
                        }
               
                      </div>

                      <div className="container  d-flex justify-content-between">
                      {/* {page<=1?"":<button   type="button" className = "btn btn-dark" onClick={handlePrevClick}>&larr; Previous</button> }  */}
                      <button disabled = {page<=1} type="button" className="btn btn-dark" onClick={handlePrevClick}>&larr; Previous</button>
                      {/* {page > 1 && (<button type="button"className="btn btn-dark" onClick={handlePrevClick}>&larr; Previous</button>)} */}
                      <button disabled = {page+1>Math.ceil(totalResults/props.pageSize)} type="button" className = "btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
                      {/* // {page + 1 > Math.ceil(totalResults/props.pageSize)?"":<button  type="button" className = "btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>}   */}
                      {/* {page + 1 <= Math.ceil(totalResults/props.pageSize) && (<button type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>)}   */}
                      </div>
        </div>
    )

}

News.defaultProps = {
    country: "in",
    pageSize: 6,
    category: 'general'
}

News.propTypes = {
    country: propTypes.string,
    pageSize:propTypes.number,
    category:propTypes.string
}
export default News;