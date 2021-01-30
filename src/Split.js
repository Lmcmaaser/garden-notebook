import React from 'react';
import './Split.css';

//Props are read-only, you can't change props directly
function Split(props) {
  const combinedClassName = `split ${props.className}`;
  const newStyles = { flex: props.flexBasis };
  return (
    <div
      className={combinedClassName}
      style={newStyles}
    >
      {props.children}
    </div>
  );
}

export default Split;
