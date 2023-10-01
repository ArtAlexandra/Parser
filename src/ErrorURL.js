import React from "react";

import "./Main.css"

import Nav from 'react-bootstrap/Nav';
export default function ErrorURL(){
    return(
        <div className="errorUrl">
            <h1>Страница не найдена</h1>
            <p>Возможно, вы неправильно ввели адрес или страница была перемещена</p>

            <Nav.Link href="/home" className="errorUrl__go">Перейти на главную страницу</Nav.Link>
        </div>
    )
}