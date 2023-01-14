import React from 'react';

export const BtnColumn = ({ data: {value, id }}) => {
  const onClick = () => {
    alert(id)
  }
  return (
    <div  style={{display: 'flex', justifyContent: 'end'}}>
      <button
        style={{
          minHeight: '30px',
          backgroundColor: 'orange',
          borderRadius: '10px',
          display: 'flex',
          padding: '5px 20px',
          justifyContent: 'center',
          fontWeight: 'bold',
          color: 'white'
        }}
        onClick={onClick}
      >
        {!!value && value}
      </button>
    </div>
  );
}
