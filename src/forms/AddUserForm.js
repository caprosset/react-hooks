import React, { useState } from 'react'

const AddUserForm = (props) => {
  const initialFormState = { id: null, name: '', username: '' }
  const [ user, setUser ] = useState(initialFormState)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    console.log('user from state in AddUserForm', user)
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    // make sure empty values cannot be submitted
    if(!user.name || !user.username) return

    // send the user through to the add function from the props
    props.addUser(user)
    // reset the form to its initial value after successful submission.
    setUser(initialFormState)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input 
        type="text" 
        name="name" 
        value={user.name} 
        onChange={handleInputChange} 
      />

      <label>Username</label>
      <input 
        type="text" 
        name="username" 
        value={user.username} 
        onChange={handleInputChange} 
      />

      <button>Add new user</button>
    </form>
  )
}

export default AddUserForm;