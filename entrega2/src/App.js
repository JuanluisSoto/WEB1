import React from 'react';
import NoteList from './NoteList';
import NoteEditor from './NoteEditor';
import './App.css' ;

function App() {
  return ( 
    <div className="container mb-5 text-center bg-black bg-gradient text-white rounded">
        <div className="text-white">
          <h1>Notas</h1>
        </div>
        <div>
          <NoteList />
        </div> 
        <div>
            <NoteEditor />
          </div>
      </div>
  );
}

export default App;