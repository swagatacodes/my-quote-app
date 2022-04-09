const { useEffect, useState } = require("react");

export function QuoteOfTheDay() {
    const [quote, setQuote] = useState("Loading..");
    async function getQuote({ category = "inspire" } = {}) {
        setQuote("Loading..");
        const response = await fetch(`https://quotes.rest/qod?language=en&category=${category}`);
        if(!response.ok) {
            setQuote("Error");
            return;
        }
        const data = await response.json();
        setQuote(data.contents.quotes[0].quote);
        // return data.contents.quotes[0].quote;
    }

    useEffect(()=>{
        getQuote();
    }, [])

    return (
        <div style={{ borderRadius:"1rem",margin: "5rem auto", padding: "2rem", border: "2px solid black", maxWidth: "60rem", textAlign:"center",boxShadow:".5rem .5rem 1rem 1rem brown" }}>
            
            <h1 style={{borderRadius:".5rem"}}>Quote of the Day</h1>
            <p style={{ paddingRight:"3rem",paddingLeft:"3rem" }}>{quote}</p>
            <form onSubmit={(e)=>{
                e.preventDefault();
                getQuote({category:e.target.category.value});
            }}>
                <input list="categories" type="text" name="category"/>
                <datalist id="categories">
                    <option value="inspire">Inspire</option>
                    <option value="life">Life</option>
                    <option value="love">Love</option>
                    <option value="funny">Funny</option>

                </datalist>
                <button>Change Category</button> 
            </form>
        </div>
    )
}