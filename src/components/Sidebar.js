import React, { useState } from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChartBar, faUtensils, faClipboardList } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? '<' : '>'}
      </button>
      <div className="sidebar-content">
        <div className="sidebar-item">
          <FontAwesomeIcon icon={faHome} />
          {isOpen && <span>Home</span>}
        </div>
        <div className="sidebar-item">
          <FontAwesomeIcon icon={faChartBar} />
          {isOpen && <span>Dashboard</span>}
        </div>
        <div className="sidebar-item">
          <FontAwesomeIcon icon={faUtensils} />
          {isOpen && <span>Menu</span>}
        </div>
        <div className="sidebar-item">
          <FontAwesomeIcon icon={faClipboardList} />
          {isOpen && <span>Orders</span>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
