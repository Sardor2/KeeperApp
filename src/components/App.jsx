import React,{useState} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Note from "../components/Note"
import InputArea from "./formArea";

function App() {

    
    const [notes,updateNotes] = useState([]);


    function handleClick(newNote) {
        updateNotes(prevValue => {
            return [
                ...prevValue,
                newNote
            ]
        });
    }

    function deleteNote(id) {
        updateNotes((prevValue) => {
            return prevValue.filter(
                (note,index) => {
                    return index !== id;
                }
            )
        })
    }

    return (
        <div>
            <Header />
            <div className="body">   
                <InputArea onAdd={handleClick}/>
                <div className="notes-container">
                    {notes.map( (item,index) => {
                        return <Note key={index} id={index} title={item.title} content={item.content} onDelete={deleteNote}/>
                    })}
                </div>
            </div>
            <Footer />
        </div>
    );
}



export default App;
