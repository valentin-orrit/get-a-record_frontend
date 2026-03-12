import styles from "./App.module.scss"
import axios from "axios"
import { useState } from "react"
import type { Artist } from "./types/types.ts"
import ArtistCard from "./components/ArtistCard/ArtistCard.tsx"

function App() {
    const API_URL = import.meta.env.VITE_API_URL || "/api"

    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    const [requestData, setRequestData] = useState<Artist | null>(null)

    const testRequest = async (): Promise<void> => {
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
            setLoading(false)
            setRequestData(response.data)
        } catch (error) {
            clearTimeout(timeoutId)
            setLoading(false)

            setError(`an error occurred : ${error}`)
        }
    }

    return (
        <div className={styles.app}>
            <h1>Get a Record</h1>
            <div>
                <button onClick={testRequest} disabled={loading}>
                    {loading ? "Loading..." : "get Artist"}
                </button>
            </div>
            <div>
                {!loading && requestData && <ArtistCard data={requestData} />}
                {error && <p>{error}</p>}
            </div>
        </div>
    )
}

export default App
