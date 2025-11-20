import React, { useEffect, useState } from 'react'
import "./searchBox.css"
function Searchbox() {
    const [searchtxt, setSearchtxt] = useState("");
    const [results, setResults] = useState([]);
    const [showresults, setShowresults] = useState(false);

    useEffect(() => {
        const timer = setTimeout(fetchData, 300)
        return () => {
            clearTimeout(timer)
        }
    }, [searchtxt])

    const fetchData = async () => {
        console.log("Fetching data " + searchtxt);

        const data = await fetch("https://dummyjson.com/recipes/search?q=" + searchtxt)
        const json = await data.json()
        setResults(json?.recipes)

    }

    return (
        <div className='container-fluid align-content-center bg-dark' style={{ minHeight: "90vh" }}>
            <div className="container align-items-center justify-content-center">
                <div className="input-box">
                    <input
                        type="search"
                        className='form-control'
                        name="" id=""
                        placeholder='search ...'
                        value={searchtxt}
                        onChange={(e) => {
                            setSearchtxt(e.target.value), console.log(results.map(r => r.name));
                            
                        }}
                        onFocus={()=>setShowresults(true)}
                        onBlur={()=>setShowresults(false)} />
                    {showresults && (
                        <div className='border p-3 overflow-y-scroll ' style={{ maxHeight: "300px" }}>
                            {results.map((result) => <span key={result.id} className='text-white d-block text-start hover' >{result.name}</span>)}
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}

export default Searchbox