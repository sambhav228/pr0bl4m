import React from "react"
import "./App.css"

function App() {
    return (
        <div>
            <header>
                <ul className="navbar">
                    <li className="nav-item">
                        <a className="active" href="/">
                            pr0gr4m
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/browse">둘러보기</a>
                    </li>
                    <li className="nav-item">
                        <a href="/storage">보관함</a>
                    </li>
                </ul>
            </header>
        </div>
    )
}

export default App
