import React from 'react'
import "../Style.css"

export default function Main() {
  return (
    <div className="aboba">
      <div className="main">
        <h1 className="h1-main">Скачать Brawl Stars на свое мобильное устройство</h1>
        <p className="p-main">Brawl Stars — это мобильная игра, онлайн-шутер от третьего лица, в которой вы играете за выбранного бойца и участвуете в различных событиях. В этих событиях вы сталкиваетесь с другими бойцами, пытаясь выполнить специальную задачу, уникальную для каждого типа событий. Доступна на Android и IOS.</p>
        <button className="btn" onClick={() => document.location='https://www.youtube.com/watch?v=dQw4w9WgXcQ'}>Cкачать</button>
      </div>
    </div>
  )
}