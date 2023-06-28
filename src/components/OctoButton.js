import React, {useState} from 'react';


export function OctoButton(props) {

    const func = props.func;
    const symbol = props.symbol;
    const extraClass = props.extraClass;
    const [active, setActive] = useState(false);

    const handleClick = (e) => {
        const current = active;
        func();
        setActive(!current);
    }
    

    return (
        <button className={extraClass + " octo-btn__wrapper"} onClick={handleClick}>
            <div className="octo-btn__symbol"  alt="-">{symbol}</div>
        </button>
    )
}

export default OctoButton;