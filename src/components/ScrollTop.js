import React from 'react';

const scrollTop = (e) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function ScrollTop() {
    return (
      <button className="scrollTop" onClick={scrollTop}>↑</button>
    )
}

export default ScrollTop;