import React, { useState, useRef } from 'react';

function NoteEditor({ onSaveNote }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const titleInputRef = useRef();

  const handleSaveNote = () => {
    // if (!title || !content) {
    //   alert('Por favor, completa tanto el título como el contenido.');
    //   return;
    // }

    const newNote = {
      id: Date.now(),
      title,
      content,
    };

    onSaveNote(newNote);

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
