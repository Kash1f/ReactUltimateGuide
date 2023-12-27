import React, { useState } from 'react'

const Form2 = () => {

//   const [name, setName] = useState("")
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")

    const [formData, setFormdata] = useState({

        name: '',
        email:'',
        password:''

    }
    )

    const handleInput = (e) => {
        const {name,value} = e.target;

        setFormdata({...formData,[name]:value})
    }

//   const handleName = (e) =>{
//     console.log(e.target.value);
//     setName(e.target.value)
//   }

//   const handleEmail = (e) =>{
//     console.log(e.target.value);
//     setEmail(e.target.value)
//   }

//   const handlePassword = (e) =>{
//     console.log(e.target.value);
//     setEmail(e.target.value)
//   }

  const handleSubmit = (e) => {
    e.preventDefault;``

  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
      Name:
      <input type='text' name="name"value={formData.name} onChange={handleInput}/>
      </label>

      <label>
      Email:
      <input type='email' name="email"value={formData.email} onChange={handleInput}/>
      </label>

      <label>
      Password:
      <input type='password' name="password" value={formData.password} onChange={handleInput}/>
      </label>

      <button type='submit'>Submit</button>






    </form>
  )
}

export default Form2