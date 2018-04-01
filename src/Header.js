import React from 'react';
import './App.css';

function Header(props)
{
    return (
        <div className="header">
            <section className="Title_parent">
                <img src="https://papersource.scene7.com/is/image/PaperSource/10003102?resMode=sharp&id=3N-qP0&fmt=jpg&fit=constrain,1&wid=380&hei=380" alt="8ball"/>
                <h1 className="Title">Magic 8 Ball</h1>
            </section>
        </div>
    );
}

export default Header;