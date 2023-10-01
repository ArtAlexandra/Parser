import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import "./Main.css";

export default function Main(){
    const [url, setUrl]= useState("")
    const navigate = useNavigate()

    const Analis = ()=>{
        navigate("/data",  {state: {url:url, category: "Бизнес", topic: "Создание и продвижение сайтов"}})
    }
    
    return(
          <div className="main">
              <div className='container'>
                  <h1>Парсер страниц сайта</h1>
                  <p>Ализируйте контент сайта и внедряйте в свой бизнес</p>
                  <form onSubmit={Analis}>
                  <InputGroup className="mb-3 search" >
                      <Form.Control
                      placeholder="https://www.wildberries.ru/"
                      aria-label="https://www.wildberries.ru/"
                      aria-describedby="basic-addon2" 
                      onChange={(e)=>setUrl(e.target.value)}
                      value={url||""}
                      />
                      <button  type="submit">Найти</button>
                  </InputGroup>
                 
                  </form>
              </div>
          </div>
    )
}