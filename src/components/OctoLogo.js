import React from 'react';


export function OctoLogo() {

    const boxStyle = { 
        clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
        backgroundColor: 'rgb(230, 61, 182)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '70px',
        height: '50px',
        marginLeft: '2%'
    }

    const boxStyle2 = { 
        clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
        backgroundColor: 'rgb(5, 3, 36)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '96%',
        height: '96%',
    }

    return (
        <div style={boxStyle}>
            <div style={boxStyle2}>
                <span>PB</span>
            </div>
        </div>
    )
}

export default OctoLogo;