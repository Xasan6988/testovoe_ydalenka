import React from 'react';
import {selectFilter} from './UsersList';

interface SideBarProps {
  selectFilterHandler: (e: React.MouseEvent, selectFilter: selectFilter) => void
}

export const Sidebar: React.FC<SideBarProps> = ({selectFilterHandler}) => {
  return(
    <div className="Sidebar">
      <button className="primary sidebar_btn" onClick={(e) => selectFilterHandler(e, 'city')}>по городу</button>
      <button className="primary sidebar_btn" onClick={(e) => selectFilterHandler(e, 'companyName')}>по компании</button>
    </div>
  )
}
