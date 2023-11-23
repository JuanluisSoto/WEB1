import React, { useState, useEffect, useRef } from 'react';

function NoteEditor() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [notes, setNotes] = useState([]);
  const titleInputRef = useRef();

  useEffect(() => {
    // Cargar notas desde localStorage al inicio
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(storedNotes);
  }, []);

  const handleSaveNote = () => {
    const newNote = {
      id: Date.now(),
      title,
      content,
    };
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    // Guardar las notas actualizadas en localStorage
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
    // Limpiar el formulario después de guardar
    setTitle('');
    setContent('');
    // Enfocar el campo de título después de guardar
    titleInputRef.current.focus();
  };

  return (
    <div className="text-white">
      <h2>Editor de Notas</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          ref={titleInputRef}
        />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          placeholder="Contenido"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button className="btn btn-outline-secondary" onClick={handleSaveNote}>
        Guardar Nota
      </button>
    </div>
  );
}
export default NoteEditor;