import React, {useState} from 'react'
import { Form } from './Form'
import { RedactUser1 } from './redactUser1'
import { RedactUser2 } from './redactUser2'
export const BtnCreate = () => {
    const [state, setState] = useState('')
    const [arrUsers, setArrUsers] = useState([])
    const arr = [];
    let dataUsers = [];
    const handleCreateUser = () => {
        setState(<Form state = {state}/>)
        setArrUsers([])
    }
const handleShowUsers = () => {
    localStorage.removeItem('loglevel:webpack-dev-server')
    arr.push(Object.values(localStorage))
    for (let i = 0; i < arr[0].length; i++){
        dataUsers.push(JSON.parse(arr[0][i]))
      }
    setArrUsers(dataUsers) 
    setState('')
}
const handleDel = (e) => {
    let c = []
    localStorage.removeItem(e.currentTarget.parentElement.className)
    c.push(Object.values(localStorage))
    for( let g = 0; g < c[0].length; g++){
        dataUsers.push(JSON.parse(c[0][g]))
    }
    setArrUsers(dataUsers)
}
const handlRedact = (e) => {
    const a = arrUsers.filter( item => {
        return item[0] == e.currentTarget.parentElement.className
    })
    a[0][9] == 'рабочий индустриального предприятия (завод, фабрика)' ? setState (<RedactUser1 props = {a}/>) : setState(<RedactUser2 props = {a}/>)
    console.log(a)
}
    return (  
        <>
        <button onClick = {handleCreateUser}>Создать</button>
        {state}
        <div className = "allUsers">
        <table border="1">
            <tr>
                <th>Имя</th>
                <th>Фамилия</th>
                <th>Возраст</th>
                <th>Образование</th>
            </tr>
        {arrUsers.map( item => {
            
            return <tr className = {item[0]} key = {item[0]}>
                        <td>{item[0]}</td>
                        <td>{item[1]}</td>
                        <td>{item[2]}</td>
                        <td>{item[3]}</td>
                        <button onClick = { handleDel }>Удалить</button>
                        <button onClick = { handlRedact }>Редактировать</button> 
                    </tr>
        })}
        </table> 
        </div>
        <button onClick = {handleShowUsers}>Показать</button>
        </>
    )
}