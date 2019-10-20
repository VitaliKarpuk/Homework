import React, {useState} from 'react'
export const RedactUser1 = ({props}) => {
    console.log(props)
    const [name, setName] = useState(props[0][0]);
    const [surname, setSurname] = useState(props[0][1]);
    const [patronymic, setPatronymic] = useState(props[0][2]);
    const [age, setAge] = useState(props[0][3]);
    const [specialty, setSpecialty] = useState(props[0][4]);
    const [education, setEducation] = useState(props[0][5]);
    const [organization,setOrganization] = useState(props[0][6]);
    const [placeWork, setPlaceWork] = useState(props[0][7]);
    const [dateDismissal, setDateDismissal] = useState(props[0][8]);
    const handleChangeName = e => setName( e.target.value )
    const handleChangeSurname = e => setSurname(e.target.value)
    const handleChangePatronymic = e => setPatronymic(e.target.value)
    const handleChangeSpecialty = e => setSpecialty(e.target.value)
    const handleChangeAge = e => setAge(e.target.value)
    const handleChangeEducation = e => setEducation(e.target.value)
    const handleChangePlaceWork = e => setPlaceWork(e.target.value)
    const handleChangeOrganization = e => setOrganization(e.target.value)
    const handleChangeDateDismissal = e => setDateDismissal(e.target.value)
    const handlSave = () => {
        const a = [name, surname, patronymic, age, specialty,education, organization, placeWork, dateDismissal]
        localStorage.setItem(name, JSON.stringify(a))
    }
    return(
        <div className = "form">
            <div><p>Имя</p><input  type = "text" className = "name" value = {name}  onChange = {handleChangeName}/></div>
            <div><p>Фамилия</p> <input  type = "text" className = "Surname" value = {surname} onChange = {handleChangeSurname}/></div>
            <div><p>Отчество</p> <input type = "text" className = "patronymic" value = {patronymic} onChange = {handleChangePatronymic}/></div>
            <div><p>Возраст</p> <input type = "text" className = "age" value = {age} onChange = {handleChangeAge}/></div>
            <div><p>Специальность</p> <input type = "text" className = "specialty" value = {specialty} onChange = {handleChangeSpecialty}/></div>
            <div><p>Образование</p> <input type = "text" className = "education" value = {education} onChange = {handleChangeEducation}/></div>
            <div><p>Организация</p><input type = "text" className = "organization" value = {organization}   onChange = {handleChangeOrganization}/></div>
            <div><p>Прошлое место работы</p><input type = "text" className = "placeWork" value = {placeWork} onChange = {handleChangePlaceWork}/></div>
            <div><p>Дата увольнения</p><input type = "text" className = "dateDismissal" value = {dateDismissal} onChange = {handleChangeDateDismissal}/></div>
            <button onClick = {handlSave}>Сохранить</button> 
        </div>
    )
}