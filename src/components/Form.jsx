import React from 'react'
import './Form.css'
const Form = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Author" />
        <textarea type="text" placeholder="Description" />
        <input type="text" placeholder="Cover Image URL" />
        <button type="submit">Add Book</button>
      </form>
    </div>
  )
}

export default Form
