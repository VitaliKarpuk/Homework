import React, { useState } from 'react'
import { User2 } from './User2';
import { User1 } from './User1'

export const Form = ({state}) => {
    const [option, setOption] = useState('рабочий индустриального предприятия (завод, фабрика)');
    
    const OptionSelection = event => {
        setOption (event.target.value)
    }
    return(
        <div >
            <select value =  { option } id="selection" size = "1" onChange= {OptionSelection}>
                <option id = 'option1'>рабочий индустриального предприятия (завод, фабрика)</option>
                <option id = 'option2'>рабочий транспортного предприятия (железная дорога, аэродромная служба, др.).</option>
            </select>
            {option == 'рабочий индустриального предприятия (завод, фабрика)' ? 
            <User1  value = 'рабочий индустриального предприятия (завод, фабрика)' props = {state} option = {option}/> : 
            <User2 value = 'рабочий транспортного предприятия (железная дорога, аэродромная служба, др.).' props = {state} option = {option}/>} 
            
        </div>
    )
}
