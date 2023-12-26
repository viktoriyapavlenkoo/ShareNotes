import React from "react";
import { useState } from "react";
import env from '../env.json';

function Create() {
  const [url, setUrl] = useState('');
  const [lineClass, setLineClass] = useState('hide');
  const [formClass, setFormClass] = useState('');
  let sendData = (obj) => {
    setFormClass('hide');
    setLineClass('');
    fetch(env.urlBackend, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(obj)
    })
    .then(response => response.json())
    .then(response => {
      if(response.result) {
        setUrl(env.url + '/' + response.url)
      }
    })
  }
  let laodDataFromForm = (event) => {
    event.preventDefault();
    let note = event.target.elements.note.value;
    note = note.trim();
    if (note === '') {
      alert('Заполните поля');
      return false;
    }
    sendData({"note": note});
  }
  let createNote = () => {
    window.location.reload();
  }
  return (
      <div className="create">
        <div className="container create__container">
          <div className={formClass}>
            <form onSubmit={laodDataFromForm} className="create__form">
                <label htmlFor="note">Введите заметку</label>
                <textarea name="note" id="note" defaultValue="Test node system"></textarea>
                <button className="btn" type="submit">Создать</button>
            </form>
          </div>
          <div className={lineClass}>
            <div className="create__url">{url}</div>
            <div><button className="btn" onClick={createNote}>Создать новую заметку</button></div>
          </div>
        </div>
      </div>   
  );    
}
  
export default Create;
  