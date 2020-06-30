import React,{useState} from "react";

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

    return (
    <div className="form">
            <input onChange={handleChange} name="title" value={newNote.title} className="title-input" placeholder="Title" />
            <textarea onChange={handleChange} name="content" value={newNote.content} className="content-input" placeholder="Take a note..." />
            <button onClick={ () => {
                props.onAdd(newNote);
                setNote({
                    title:"",
                    content:""
                });
            }} className="add-btn">Add</button>
    </div> )
}

export default InputArea;