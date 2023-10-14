import React from 'react'
import "./style.css"

export default function RegForm({setUser}) {
    const sumbitHandler = (e) => {
        e.preventDefault()
        const obj = {
            email: e.target.elements.email.value,
            name: e.target.elements.name.value
        }
        setUser(obj)
        localStorage.setItem("user", JSON.stringify(obj))
    }

  return (
    <div className='reg'>
        <form onSubmit={sumbitHandler}>
            <>
            <p>Имя:</p>
            <input type="text" name='name' id='name'/>
            </>
            <>
            <p>Email:</p>
            <input type="email" name='email' id='email'/>
            </>
            <>
            <p>Пароль:</p>
            <input type="password" name='password' id='password'/>
            </>
            <button className='regBtn'>Регистрация</button>
        </form>
    </div>
  )
}