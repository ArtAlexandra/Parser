import React, { useState } from "react";
import {useLocation} from 'react-router-dom';
import "./Main.css"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Data(){
    const location = useLocation()?.state;
    const [url, setUrl]= useState(location?.url ||"")
    const [category,setCategory] = useState(location?.category||"")
    const [topic,setTopic] = useState(location?.topic || "")
    const [flag,setFlag] =useState(!location?.name || true)

    const AnalisM = (e)=>{
        e.preventDefault()
        console.log(url)
        setFlag(!flag)
        setCategory("Бизнес 2")
        setTopic("Создание и продвижение сайтов")
    }

    const Write = (e)=>{
        console.log(e.target.value)
        setFlag(false)
        setUrl(e.target.value)
    }

    return(
        <div className="data">
            <div className="data__search">
                <form onSubmit={AnalisM}>
                    <InputGroup className="mb-3 search">
                        <Form.Control
                        placeholder="https://www.wildberries.ru/"
                        aria-label="https://www.wildberries.ru/"
                        aria-describedby="basic-addon2" 
                        onChange={(e)=>Write(e)}
                        value={url || ""}
                        />
                        <button  type="submit">Найти</button>
                    </InputGroup>
                </form>
            </div>
            <div className="data__details">
                {flag?
                    <div>
                        <p>Анализ сайта</p>
                        <p>url: {url}</p>
                        <p>Категория: {category}</p>
                        <p>Тема: {topic}</p>
                    </div>: null}
               
            </div>
        </div>
    )
}