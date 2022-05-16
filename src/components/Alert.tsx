import React from 'react';

interface IAlert {
  text: string
}

export const Alert: React.FC<IAlert> = ({text}) => {
  return(
    <>
      <p className="alert">{text}</p>
    </>
  )
}
