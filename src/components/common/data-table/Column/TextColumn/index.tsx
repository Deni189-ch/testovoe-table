import React from 'react';

export const TextColumn = ({ data: { value }}) => {
   return (
    <div className="App">
      {!!value && value}
    </div>
  );
}
