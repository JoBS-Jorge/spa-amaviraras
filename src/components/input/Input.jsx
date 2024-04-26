import { useEffect, useState } from 'react';
import './styles.css'

const Input = (props) => {

    const [inputValue, setInputValue] = useState('')

    const currentValue = (e) => {
        setInputValue(e.target.value);
        return inputValue
    }

    useEffect(()=>{
        // console.log(inputValue)
    } ,[inputValue])

    props.handleInput(inputValue)

    return(
        <div className='input_container'>
            <img src={props.img} alt={props.img}/>
            <input type={props.inputType} placeholder={props.msg} value={inputValue} onChange={currentValue} />
        </div>
    )
}

export default Input;