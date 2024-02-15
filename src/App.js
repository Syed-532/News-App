import { useEffect, useState } from 'react';
import './App.css';
import News from './News';

function App() {

   let[articles,setArticles]=useState([]);
   let[category,setCategory]=useState("india");
   let[date, setDate]=useState("2024-01-20");
   

   useEffect(()=>{
   fetch(`https://newsapi.org/v2/everything?q=${category}&from=${date}&apiKey=1f270b533d8b434b83f60e04a0d583a6`)
    .then((response)=>response.json())
    .then((news)=>{
     setArticles(news.articles);
     console.log(news.articles);
    })
    .catch((err)=>{
    console.log(err)
    })


  },[category])

  return (
    <div className="App">
      <header className='header'>
        <h1>NEWS APP</h1>
         
        <input type='text'  onChange={(event)=>{
          if(event.target.value!==""){
            setCategory(event.target.value);
          }
          else{
            setCategory("india")
          }
          
        }} placeholder='Search News'/>

<input type='text'  onChange={(event2)=>{
          if(event2.target.value!==""){
            setDate(event2.target.value);
          }
          else{
            setDate("2024-01-20")
          }
          
        }} placeholder='year-month-date'/>
         
         
      </header> 

      <section className='news-articles'>
        {

          articles.length!==0?

          articles.map((article)=>{
            return(
              <News article={article}/>
              
            )
          })
          :
          <h3>No news found</h3>
        }

      </section>
        
    </div>
  );
}

export default App;
