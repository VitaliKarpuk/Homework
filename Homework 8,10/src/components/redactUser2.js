import React, {useState} from 'react'
export const RedactUser2 = ({props}) => {
    const [name, setName] = useState(props[0][0]);
    const [surname, setSurname] = useState(props[0][1]);
    const [patronymic, setPatronymic] = useState(props[0][2]);
    const [age, setAge] = useState(props[0][3]);
    const [education, setEducation] = useState(props[0][4]);
    const [placeWork,setPlaceWork] = useState(props[0][5]);
    const [drivingExperience, setDrivingExperience] = useState(props[0][6]);
    const [driverLicense, setDriverLicense] = useState(props[0][7]);
    const handleChangeName = e => setName( e.target.value )
    const handleChangeSurname = e => setSurname(e.target.value)
    const handleChangePatronymic = e => setPatronymic(e.target.value)
    const handleChangeAge = e => setAge(e.target.value)
    const handleChangeEducation = e => setEducation(e.target.value)
    const handleChangePlaceWork = e => setPlaceWork(e.target.value)
    const handleChangeDrivingExperience = e => setDrivingExperience(e.target.value)
    const handleChangeDriverLicense = e => setDriverLicense(e.target.value)
    const handlSave = () => {
        const a = [name, surname, patronymic, age,education, placeWork, drivingExperience, driverLicense]
        localStorage.setItem(name, JSON.stringify(a))
    }
    return(
        <div className = "form">
            <div><p>Имя</p><input type = "text" className = "name" value = {name} onChange = {handleChangeName}/></div>
            <div><p>Фамилия</p> <input type = "text" className = "Surname" value = {surname} onChange = {handleChangeSurname}/></div>
            <div><p>Отчество</p> <input type = "text" className = "patronymic" value = {patronymic} onChange = {handleChangePatronymic}/></div>
            <div><p>Возраст</p> <input type = "text" className = "age" value = {age} onChange = {handleChangeAge}/></div>
            <div><p>Образование</p> <input type = "text" className = "education" value = {education} onChange = {handleChangeEducation}/></div>
            <div><p>Прошлое место работы</p><input type = "text" className = "placeWork" value = {placeWork} onChange = {handleChangePlaceWork}/></div>
            <div><p>Стаж вождения</p><input type = "text" className = "drivingExperience" value = {drivingExperience}  onChange = {handleChangeDrivingExperience}/></div>
            <div><p>Водительские права</p><input type = "text" className = "driverLicense" value = {driverLicense} onChange = {handleChangeDriverLicense}/></div>
            <button onClick = {handlSave}>Сохранить</button>
        </div>
    )
}