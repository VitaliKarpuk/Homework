import React, { useState } from 'react'
import { RedactUser1 } from './redactUser1'
import { RedactUser2 } from './redactUser2'
export const User2 = ({value}) => {
    const [state, setState] = useState('')
    const [arrUsers, setArrUsers] = useState([])
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [patronymic, setPatronymic] = useState('');
    const [age, setAge] = useState('');
    const [education, setEducation] = useState('');
    const [placeWork,setPlaceWork] = useState('');
    const [drivingExperience, setDrivingExperience] = useState('');
    const [driverLicense, setDriverLicense] = useState('');
    const handleChangeName = e => setName( e.target.value )
    const handleChangeSurname = e => setSurname(e.target.value)
    const handleChangePatronymic = e => setPatronymic(e.target.value)
    const handleChangeAge = e => setAge(e.target.value)
    const handleChangeEducation = e => setEducation(e.target.value)
    const handleChangePlaceWork = e => setPlaceWork(e.target.value)
    const handleChangeDrivingExperience = e => setDrivingExperience(e.target.value)
    const handleChangeDriverLicense = e => setDriverLicense(e.target.value)
    const handleBtnSave = (e) => {
        const data = [name, surname, patronymic, age, education, driverLicense, placeWork, drivingExperience, value]
        localStorage.setItem(name, JSON.stringify(data))
        document.getElementsByClassName('name')[0].value = ''
        document.getElementsByClassName('Surname')[0].value = ''
        document.getElementsByClassName('patronymic')[0].value = ''
        document.getElementsByClassName('age')[0].value =''
        document.getElementsByClassName('education')[0].value = ''
        document.getElementsByClassName('driverLicense')[0].value = ''
        document.getElementsByClassName('placeWork')[0].value = ''
        document.getElementsByClassName('drivingExperience')[0].value = ''

    }
    const handlRedact = (e) => {
        const valueRedact = JSON.parse(localStorage.getItem(e.currentTarget.parentElement.className))
        const a = arrUsers.filter( item => {
            return item[0] == e.currentTarget.parentElement.className 
        })
        console.log(a)
        a[0][9] == 'рабочий индустриального предприятия (завод, фабрика)' ? setState (<RedactUser1/>) : setState(<RedactUser2/>)
        setName(valueRedact[0]) 
        setSurname(valueRedact[1]) 
        setPatronymic(valueRedact[2])
        setAge(valueRedact[3])
        setEducation(valueRedact[4])
        setPlaceWork(valueRedact[5])
        setDrivingExperience(valueRedact[6])
        setDriverLicense(valueRedact[7])   
    }
    return(
        <>
        <div className = "form">
            <div><p>Имя</p><input type = "text" className = "name" value = {name} onChange = {handleChangeName}/></div>
            <div><p>Фамилия</p> <input type = "text" className = "Surname" value = {surname} onChange = {handleChangeSurname}/></div>
            <div><p>Отчество</p> <input type = "text" className = "patronymic" value = {patronymic} onChange = {handleChangePatronymic}/></div>
            <div><p>Возраст</p> <input type = "text" className = "age" value = {age} onChange = {handleChangeAge}/></div>
            <div><p>Образование</p> <input type = "text" className = "education" value = {education} onChange = {handleChangeEducation}/></div>
            <div><p>Прошлое место работы</p><input type = "text" className = "placeWork" value = {placeWork} onChange = {handleChangePlaceWork}/></div>
            <div><p>Стаж вождения</p><input type = "text" className = "drivingExperience" value = {drivingExperience}  onChange = {handleChangeDrivingExperience}/></div>
            <div><p>Водительские права</p><input type = "text" className = "driverLicense" value = {driverLicense} onChange = {handleChangeDriverLicense}/></div>
        </div>
        <button onClick = {handleBtnSave}>Сохранить</button> 
        {state}
        </>
    )
}