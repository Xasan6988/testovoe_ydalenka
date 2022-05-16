import React from 'react';
import {RouteProps} from 'react-router';

interface UsersProps {
  children: RouteProps['children']
}

export const Users: React.FC<UsersProps> = (children) => {
  return(
    <>
      {children.children}
    </>
  )
}
