import React, { useState, useEffect } from 'react';
import Note from './Note';

function NoteList() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Cargar notas desde localStorage al inicio
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(storedNotes);
  }, []);

  const handleDeleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    // Guardar las notas actualizadas en localStorage
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  return (
    <div className="container mt-3 text-white">
      <h2>Lista de Notas</h2>
      <div className="row">
        {notes.map((note) => (
          <div key={note.id} className="col-md-3 mb-3">
            <Note note={note} onDelete={handleDeleteNote} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default NoteList;
