import React,{useState} from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from '@material-ui/core/Fab';
import Zoom from "@material-ui/core/Zoom";

function InputArea(props) {
    const [isExtended,setExtended] = useState(false);

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

    function extend() {
        setExtended(true);
    }
    return (
    <form className="create-note">
        {isExtended && <input onChange={handleChange} name="title" value={newNote.title}  placeholder="Title" />}
        
        <textarea onClick={extend} onChange={handleChange} rows={isExtended ? 3:1} name="content" value={newNote.content}  placeholder="Take a note..." />
        <Zoom in={isExtended} timeout={500}>
            <Fab onClick={handleClick}><AddIcon /></Fab>
        </Zoom>
    </form> )
}

export default InputArea;