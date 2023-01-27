import React from 'react';

function Login ({isLoggedIn}) {

    return (
        <>
        {isLoggedIn ? 'Залогинен' : 'Нет'}
        </>
    );
}

export default Login;