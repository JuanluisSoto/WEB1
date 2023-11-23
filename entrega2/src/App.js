import React, { useState } from 'react';
import './App.css';
import NoteList from './NoteList';
import NoteEditor from './NoteEditor';


function App() {
  const bodyStyle = {
    backgroundColor: '#000000',
  };
  const [notes, setNotes] = useState([]); 
  const handleSaveNote = (newNote) => {
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    // Guardar las notas actualizadas en localStorage
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  return (
  <div style={bodyStyle} class="rounded"> 
      <div className="container mb-5 text-center text-white" >
        <div className="text-white">
          <h1>Notas</h1>
        </div>
        <div>
          <NoteList notes={notes} setNotes={setNotes} />
        </div>
        <div>
          <NoteEditor onSaveNote={handleSaveNote} />
        </div>
      </div>
    </div>
  );
}

export default App;
