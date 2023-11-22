import Popup from './Popup.js'
import MyInput from './MyInput.js'
import { useState } from 'react'

import { Context } from './Context/InputContext.js';

export default function Inputs () {
    const [inputValue, setInputValue] = useState({name: '', phoneNumber: '', age: '', areYouEmployed: false, salary: 'less than 500 $'});
    const [showPopup, setShowPopup] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);

    function handleFormSubmit (e) {
        e.preventDefault();
        setErrorMessage(null)
        const {age} = inputValue;
        if (age < 18 || age > 100) {
            setErrorMessage("the age is not allowed");
        }
        setShowPopup(true);
    }

    function handleDivClick () {
        if (showPopup) {
            setShowPopup(false);
        }
    }
    
    const btnIsDisabled = inputValue.name === '' || inputValue.phoneNumber === '' || inputValue.age === '' || inputValue.areYouEmployed === false || inputValue.salary === '';
    
    function handleNameChange (value) {
        setInputValue({...inputValue, name: value})
    }
    function handlePhoneNumberChange (value) {
        setInputValue({...inputValue, phoneNumber: value})
    }
    function handleAgeChange (value) {
        setInputValue({...inputValue, age: value})
    }

    return (
        <div onClick={handleDivClick}>
            <form> 

                <Context.Provider value={{ title: "Name:", handleChange: handleNameChange, inputValue: inputValue.name }} >
                    <MyInput />
                </Context.Provider>

                <Context.Provider value={{ title: "Phone Number:", handleChange: handlePhoneNumberChange, inputValue: inputValue.phoneNumber }} >
                    <MyInput />
                </Context.Provider>

                <Context.Provider value={{ title: "Age:", handleChange: handleAgeChange, inputValue: inputValue.age }} >
                    <MyInput />
                </Context.Provider>

                <label>Are You Employed:</label>
                <input  checked={inputValue.areYouEmployed} onChange={(e) => setInputValue({...inputValue, areYouEmployed: e.target.checked})} type="checkbox"/>
                
                <label>Salary:</label>
                <select value={inputValue.salary} onChange={(e) => setInputValue({ ...inputValue,salary: e.target.value })} >
                    <option value="less than 500 $">less than 500 $</option>
                    <option value="less than 2000 $">less than 2000 $</option>
                    <option value="less than 5000 $">less than 5000 $</option>
                </select>
                
                <button onClick={handleFormSubmit} disabled={btnIsDisabled} className={btnIsDisabled ? 'disabled' : ''}>Submit</button>
            
                <Popup isVisible={showPopup} errorMessage={errorMessage} />
            </form>
        </div>
    )
    
}

