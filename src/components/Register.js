import React from 'react';

function Register ({isLoggedIn}) {

    return (
        <>
        {isLoggedIn ? 'Залогинен' : '123'}
        </>
    );
}

export default Register;