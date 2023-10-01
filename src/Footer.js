import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";
export default function Footer(){
    return(
        <div className="footer">
            <p> © Александра </p>
            <Link to="https://vk.com/id285322289">
                <img src="/picture/vk.png" alt="vk"/>
            </Link>
        </div>
    )
}