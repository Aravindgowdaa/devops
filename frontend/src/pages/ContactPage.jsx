import { useState } from 'react'

function ContactPage() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const onSubmit = (event) => {
    event.preventDefault()
    setMessage(`Thanks ${name || 'friend'}, we received your message.`)
  }

  return (
    <section className="card">
      <h1>Contact Page</h1>
      <form className="contact-form" onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Your name"
        />
        <button type="submit">Send</button>
      </form>
      {message && <p className="status">{message}</p>}
    </section>
  )
}

export default ContactPage
