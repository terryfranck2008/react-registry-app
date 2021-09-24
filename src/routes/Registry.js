import React ,  { useState , useEffect} from "react"
import {Link} from "react-router-dom";
function Registry(){
    const [registryData, setRegitryData] = useState([]);
    const [textInput, setTextInput] = useState("");
    const [error, setError] = useState(false);

    const addItem = (e) => {
        e.preventDefault();
        if(error)return;
        console.log(e);
        const tempData = [...registryData];
        tempData.push(textInput);
        setRegitryData(tempData);
        setTextInput('');
    }

    const removeItem = (index) => {
        let newData = [...registryData];
        newData.splice(index, 1);
        setRegitryData(newData);
    }

    const editItem = (index) => {
        if(error)return;
        let newData = [...registryData];
        newData[index] = textInput;
        setRegitryData(newData);
    }

    useEffect( () => {
        if(textInput.length > 10) setError(true)
        else setError(false)
    }, [textInput]);
    

    return (
        <div>
            <h1>Registry</h1>
            <Link to="/">Click here to go to home</Link>
            <form onSubmit={addItem}>
                <label>text input:
                     <input type="text" value={textInput} onChange={(e) => setTextInput(e.target.value)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            {error && <span style={{color: 'red'}}>Error occured.</span>}
            {
                registryData.map((c,index) => <li key={index}>{c} <button onClick={() => editItem(index)}>Update</button><button onClick={() => removeItem(index)}>Remove</button></li>)
            }
        </div>
    )
    
}

export default Registry;