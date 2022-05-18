import React from 'react';
import {selectFilter} from './UsersList';
import './Sidebar.scss';

interface SideBarProps {
  selectFilterHandler: (e: React.MouseEvent, selectFilter: selectFilter) => void
}

export const Sidebar: React.FC<SideBarProps> = ({selectFilterHandler}) => {
  return(
    <div className="Sidebar">
      <h1 className="sidebar-title">Сортировка</h1>
      <button className="primary-btn sidebar_btn" onClick={(e) => selectFilterHandler(e, 'city')}>по городу</button>
      <button className="primary-btn sidebar_btn" onClick={(e) => selectFilterHandler(e, 'companyName')}>по компании</button>
    </div>
  )
}
