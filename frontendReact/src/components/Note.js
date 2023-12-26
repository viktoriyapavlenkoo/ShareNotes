import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import env from '../env.json'

function Note() {
  let {noteURL} = useParams();
  const [noteText, setNoteText] = useState('');
  const [lineClass, setLineClass] = useState('hide');
  const [formClass, setFormClass] = useState('hide');
  const [errorClass, setErrorClass] = useState('hide');

  useEffect(() => {
    
    if(noteURL !== undefined) {
      
      fetch(env.urlBackend, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({"url": noteURL})
      })
      .then(response => response.json())
      .then(response => {
        if(response.result) {
          setNoteText(response.note);
          setLineClass('');
          setFormClass('hide');
          setErrorClass('hide');
        } 
        else if (!response.result) {
          setLineClass('hide');
          setFormClass('hide');
          setErrorClass('');
        }
      })
    }  else {
      setLineClass('hide');
      setFormClass('');
      setErrorClass('hide');
    }

  }, [])
  let getNote = (event) => {
    event.preventDefault();
    let url = event.target.elements.url.value;
    url = url.trim();
    if (url === '') {
      alert('Заполните поля');
      return false;
    }
    noteURL = url;
    window.location.href = env.url + '/' + url;
  }
  let searchNote = () => {
    window.location.href = env.url;
  }
  return (
    <div className="note">
      <div className="container note__container">
        <div className={lineClass}>
          <h4>Note:</h4>
          <div className="note__text">{noteText}</div>
          <div><button className="btn" onClick={searchNote}>Смотреть еще один note</button></div>
        </div>
        <div className={errorClass}>
          <p>Произошла ошибка. Такой note не найден!!</p>
        </div>
        <div className={formClass}>
          <div className="note__form-block">
            <form action="" className="note__form" onSubmit={getNote}>
              <label htmlFor="url">Введите hash заметки</label>
              <textarea name="url" id="url" className=""></textarea>
              <button type="submit" className="btn">Искать Note</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
  
export default Note;
  