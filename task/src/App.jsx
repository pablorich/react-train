import React, {useState} from 'react';
import './App.css';
import LengthChecker from './length-checker/lengthChecker';
import MyInput from './my-input/myInput';
import CharComponent from './char-component/charComponent';

function App() {
    const [myString, setMyString] = useState('')
    let strLen = myString.length;
    
    const updateString = (newString) => {
        setMyString(newString)
        strLen = newString.length
    }
    
    const deleteChar = (index) => {
        let newString = myString.split('')
        newString.splice(index,1)
        setMyString(newString.join(''))
    }

    return (
        <div className = "App" >
            <header className = "App-header">
                <MyInput val={myString} onChange={updateString}/>
                <LengthChecker length={strLen}/>
                <p>{strLen}</p>
                {myString.split('').map((char, index)=> {
                    return (<CharComponent char={char} index={index} key={index} onClick={deleteChar}/>)
                })}
            </header>
        </div>
    );
}

export default App;