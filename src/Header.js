import React from 'react';

function Header(props)
{
    return (
        <div>
            <section className="Title_parent">
                <img src={require('./images/8ball.jpg')} alt="8ball"/>
                <h1 className="Title">Magic 8 Ball</h1>
                
        </section>
        </div>
    );
}

export default Header;