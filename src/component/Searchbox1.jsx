import React, { useEffect, useState } from 'react'
import "./searchBox.css"
function Searchbox1() {
    const [searchtxt, setSearchtxt] = useState("");
    const [results, setResults] = useState([])
    const [showresults, setShowResults] = useState(false)
    const [selecttxt, setSelecttxt] = useState("");

    useEffect(() => {
        const timer = setTimeout(fetchData, 400)
        return () => {
            clearTimeout(timer)
        }
    }, [searchtxt])
    const fetchData = async () => {
        console.log("fetching ...." + searchtxt);

        const data = await fetch("https://dummyjson.com/recipes/search?q=" + searchtxt)
        const json = await data.json()
        setResults(json.recipes)
        console.log(json?.recipes);

    }


    return (
        <div className='container-fluid align-content-center bg-dark' style={{ minHeight: "90vh" }}>
            <div className="container align-items-center justify-content-center">
                <div className="input-box">
                    <input
                        type="text"
                        className='form-control'
                        placeholder='Search here..'
                        value={searchtxt}
                        onChange={(e) => setSearchtxt(e.target.value)}
                        onBlur={() => setTimeout(() => setShowResults(false), 200)}
                        onFocus={() => setShowResults(true)}
                    />

                    {showresults && (
                        <div className='border p-3 overflow-y-scroll ' style={{ maxHeight: "300px" }}>
                            {results.map((result) => (
                                <span
                                    key={result.id}
                                    className='text-white d-block text-start hover'
                                    onClick={() => {
                                        setSearchtxt(result.name); // show name in input
                                        setShowResults(false);     // hide dropdown
                                    }}
                                >
                                    {result.name}
                                </span>
                            ))}

                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}

export default Searchbox1