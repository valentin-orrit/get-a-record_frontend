import "./App.css"
import axios from "axios"
import { useState } from "react"

function App() {
    const API_URL = import.meta.env.VITE_API_URL || "/api"

    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    const testRequest = async (): Promise<JSON | void> => {
        setLoading(true)
        setError(null)

        const timeoutId = setTimeout(async () => {
            setLoading(false)
            setError("Request Timeout")
        }, 10000)

        try {
            const response = await axios({
                method: "GET",
                url: `${API_URL}/artist`,
                timeout: 10000,
            })
            clearTimeout(timeoutId)
            console.log(response)
            setLoading(false)
            return response.data
        } catch (error) {
            clearTimeout(timeoutId)
            setLoading(false)

            setError(`an error occurred : ${error}`)
        }
    }

    return (
        <>
            <h1>Get a Record</h1>
            <div className="card">
                <button onClick={testRequest} disabled={loading}>
                    {loading ? "Loading..." : "test"}
                </button>
                {error && <p>{error}</p>}
            </div>
        </>
    )
}

export default App
