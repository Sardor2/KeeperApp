import React,{useState} from "react";
import Fab from '@material-ui/core/Fab';

function InputArea(props) {

    const [newNote,setNote] = useState({
        title:"",
        content:""
    });

    function handleChange(event) {
        let {value:newValue,name} = event.target;
        setNote( prevValue => {
            return {
                ...prevValue,
                [name]:newValue
            }
        })
        
    }
    function handleClick(event) {
        props.onAdd(newNote);
        setNote({
            title:"",
            content:""
        });
        event.preventDefault();
    }
    return (
    <form className="form">
            <input onChange={handleChange} name="title" value={newNote.title} className="title-input" placeholder="Title" />
            <textarea onChange={handleChange} name="content" value={newNote.content} className="content-input" placeholder="Take a note..." />
            <button onClick={handleClick} className="add-btn">Add</button>
    </form> )
}

export default InputArea;