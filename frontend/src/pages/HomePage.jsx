import { useEffect, useState } from 'react'

function HomePage() {
  const [status, setStatus] = useState('Checking backend...')

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch('/api/health/')
        if (!response.ok) {
          throw new Error('Backend returned an error')
        }
        const data = await response.json()
        setStatus(data.message)
      } catch {
        setStatus('Backend is not running yet. Start Django on port 8000.')
      }
    }

    fetchStatus()
  }, [])

  return (
    <section className="card">
      <h1>Home Page</h1>
      <p>This React frontend has multiple pages and connects to Django APIs.</p>
      <p className="status">API status: {status}</p>
    </section>
  )
}

export default HomePage
