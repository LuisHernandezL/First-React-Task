import React from 'react';
import quotes from '../quotes.json'
import { useState } from 'react';



const colors = ['#9e0142','#d53e4f','#f46d43','#fdae61','#fee08b','#e9f6a6','#abdda4','#66c2a5','#3288bd','#5e4fa2','#fad2e1']
const QuoteBoxText = () => {
/*
console.log(quotes[0].author);
console.log(quotes[0].quote);
*/
//para el button es color
    const randomIndex = Math.floor(Math.random()*quotes.length);
    const [index,setIndex]=useState(randomIndex);

    const changeQuote = ()=>{
        const random = Math.floor(Math.random()*quotes.length);
        setIndex(random);
    };

    const randomColor = Math.floor(Math.random()*colors.length)
    
    document.body.style=`background : ${colors[randomColor]}`
    



    return (
        <div>
            <div className='text-container'>
                <h3 style={{color:colors[randomColor]}}>"{quotes[index].quote}"</h3>
                <h4 style={{color:colors[randomColor]}}>- {quotes[index].author}</h4>
                <button onClick={changeQuote} style={{color:colors[randomColor]}}><i className="fa-solid fa-shuffle"></i></button>


            </div>
            
        </div>
    );
};

export default QuoteBoxText;