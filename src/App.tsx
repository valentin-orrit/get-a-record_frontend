import "./App.css"
import axios from "axios"
import { useState } from "react"

function App() {
    const [loading, setLoading] = useState<boolean>(false)

    const testRequest = async (): Promise<JSON> => {
        setLoading(true)

        const response = await axios({
            method: "GET",
            url: `http://localhost:${import.meta.env.VITE_API_PORT}/api/artist`,
        })
        console.log(response)
        setLoading(false)
        return response.data
    }

    return (
        <>
            <h1>Get a Record</h1>
            <div className="card">
                <button onClick={testRequest}>test</button>
                {loading && <div>Loading...</div>}
            </div>
        </>
    )
}

export default App
