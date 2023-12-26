function Main() {
    return (
      <div className="main-page">
        <div className="container main-page__container">
          <div className="btn-list">
            <a className="btn" href="/create">Создать note</a>
            <a className="btn" href="/note">Посмотреть note</a>
          </div>
          <div className="text-block">
            <p><b>ShareNotes</b> - сервис для обмена заметками. Создайте заметку, отправьте ссылку на заметку и ваш друг сможет её просмотреть. После просмотра заметка будет удалена (или по истечении 15 минут с момента создания).</p>
            <p>Как сделать заметку?</p>
            <ul>
              <li>Пройдите по ссылке</li>
              <li>Вставьте текст и нажмите Create</li>
              <li>Отправьте сгенерированный адрус другу!</li>
            </ul>
            <p>Как прочитать заметку? Перейдите по присланному URL либо введите адрес руками здесь.</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Main;
  