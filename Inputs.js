import Popup from './Popup.js'
import {useState} from 'react'

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
    
    return (
        <div onClick={handleDivClick}>
            <form>
                <label>Name:</label>
                <input placeholder='Name' value={inputValue.name} onChange={(e) => setInputValue({...inputValue, name: e.target.value})}  type="text"  maxlength="10"/>

                <label>Phone Number:</label>
                <input placeholder='PhoneNumber'  value={inputValue.phoneNumber} onChange={(e) => setInputValue({...inputValue, phoneNumber: e.target.value})} type="tel"  maxlength="11"/>

                <label>Age:</label>
                    <input placeholder='Age' value={inputValue.age} onChange={(e) => setInputValue({...inputValue, age: e.target.value})} type="text" maxlength="3"/>

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



/*
 onChange={(e) => setInputValue({...inputValue, name: e.target.value})} 

 onChange={(e) => setInputValue({...inputValue, phoneNumber: e.target.value})} 

 onChange={(e) => setInputValue({...inputValue, areYouEmployed: e.target.checked})} 

 onChange={(e) => setInputValue({...inputValue, salary: e.target.value})} 

*/



    //     function handleAddDivice () {
    //     return diviceInput !== "" ? setDivices([...divices, diviceInput]) : alert('Input not Found');
// }
    
    
    // const DivicesList = divices.map((divice) => {
    //   return (
    //     <div>
    //       <li>{divice}</li>
    //       <button onClick={(e) => e.target.parentNode.remove()}>Delete</button>
    //     </div>
    //   );
// });
    
