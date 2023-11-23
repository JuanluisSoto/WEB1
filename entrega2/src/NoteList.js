import React, { useState, useEffect } from 'react';
import Note from './Note';

function NoteList({ notes, setNotes }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredNotes, setFilteredNotes] = useState([]);

  useEffect(() => {
    // Cargar notas desde localStorage al inicio
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(storedNotes);
  }, [setNotes]);

  useEffect(() => {
    // Filtrar notas basándote en la consulta de búsqueda
    const filtered = notes.filter(
      (note) =>
        note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.content.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredNotes(filtered);
  }, [searchQuery, notes]);

  const handleDeleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    // Guardar las notas actualizadas en localStorage
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  return (
    <div className="container mt-3">
      <h2>Lista de Notas</h2>

      {/* Barra de búsqueda */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar Notas"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Mostrar las notas existentes */}
      <div className="row">
        {filteredNotes.map((note) => (
          <div key={note.id} className="col-md-3 mb-3">
            <Note note={note} onDelete={() => handleDeleteNote(note.id)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default NoteList;
