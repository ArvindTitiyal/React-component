import React, { useState } from 'react';
import './App.css';

function App() {
  const items = ["Yes", "Probably not"];
  
  return (
    <div className="App">
      <h1>Should you use a dropdown?</h1>
      <Dropdown items={items} />
    </div>
  );
}

function Dropdown({ items }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Select");

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  const handleItemClick = (item) => {
    if (item === selectedItem) {
      setSelectedItem("Select");
    } else {
      setSelectedItem(item);
    }
    setIsOpen(false);
  };

  return (
    <div className="dropdown" onMouseLeave={handleMouseLeave}>
      <button onMouseEnter={handleMouseEnter} className="dropdown-button">
        {selectedItem} <span className="arrow">&#9662;</span>
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {items.map((item, index) => (
            <li key={index} onClick={() => handleItemClick(item)} className="dropdown-item">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
