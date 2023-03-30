
import React, { useContext, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'

const Home = () => {
    const [nameValue, setNameValue] = useState("")
    const [nameError, setNameError] = useState(null)
    const { user, saveUser } = useContext(UserContext)

    const handleChange = (e) => {
        const newNameValue = e.target.value;
    
        setNameValue(newNameValue);
        if (newNameValue === '') setNameError("Name is required");
        else if (!/^[A-Z][a-z ]{2,}$/.test(newNameValue))
          setNameError("Start with capital letter.");
        else setNameError(null);
      };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!nameError) {
          saveUser(nameValue)
        } 
    }

  return (
    <div className='container'>
        <div className='img_container'>
            <img src="https://s3-alpha-sig.figma.com/img/ca59/d9ce/98042af437fdff212d3259040db2e2db?Expires=1680480000&Signature=Tr9zNQTb0fUhyJmZH9NP3qwVdfWVXIrkosGlSvI86Yig9zLhhR75thPor8ACsSctprhOn5NjOavtetDjvcXhQjI0A3uVW5CCUwjEqxD45lmyYGgI1yCca0zSZ1iMIDOMHX-XyM5uu4w5vMUVk4K3PgIyYUicJzpZlOENYBDxwM3M18PYVs6bEqSNsEksGRaHJEQEt3F8rwRPM2rb3E17ISCJv67bACWbCojPFH7~hCk7sLletlxbh6mll5meJ4VqQYtnBJ0llqIxY5D9a2jnhffEulOGh8AX2uPl3sWhez4jkBqsIDhYsecxs1wpasVpLHGPwfio0-lh83Dn4dDQNw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" width="400"/>
        </div>
        <div className='welcome_container'>
            <h1 className='hello'>¡Hello trainer!</h1>
            <p className='type'>Type your name to star.</p>
        </div>
        <form
        className='form_home'
        onSubmit={handleSubmit}>
            <input
            className='user_name'
            type="text"
            value={nameValue}
            onChange={handleChange}
            />
            <button className='star_button' type="submit">Star</button>
        </form>
        {nameError && <p className='name_error'>{nameError}</p>}

        {user && <Navigate to="/pokedex" replace />}
    </div>
  )
}

export default Home