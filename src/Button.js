import React from 'react';

const Button = ({
  value,
  label,
  onClick,
  colSpan = 1,
}) => (
  <td colSpan={colSpan} key={value}>
    <span aria-label={label} onClick={onClick}>
      {value}
    </span>
  </td>
);

export default Button;